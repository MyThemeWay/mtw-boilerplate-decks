/*! MTW-BOILERPLATE-DECKS: MTW-DECK-FLIGHTS.JS
 * 
 * Author: sitdisch
 * Source: https://github.com/mythemeway
 * License: MIT
 * Copyright: © 2022 sitdisch
 *
 * DECK IS BASED ON:
 * 
 * globe
 * 
 * Original Authors: deck.gl Contributors
 * Sources: 
   * https://github.com/visgl/deck.gl/tree/8.7-release/examples/website/globe
   * https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/globe
 * License: MIT
 * Copyright: © 2020 Urban Computing Foundation
 * Changes: made
 * 
 * AIR TRAFFIC DATA SOURCE:
 * 
 * Crowdsourced air traffic data from The OpenSky Network 2020 [CC-BY] (v20.12)
 * 
 * Credits:
   * Matthias Schäfer, Martin Strohmeier, Vincent Lenders, Ivan Martinovic and Matthias Wilhelm. "Bringing Up OpenSky: A Large-scale ADS-B Sensor Network for Research". In Proceedings of the 13th IEEE/ACM International Symposium on Information Processing in Sensor Networks (IPSN), pages 83-94, April 2014.
   * Xavier Olive. "traffic, a toolbox for processing and analysing air traffic data." Journal of Open Source Software 4(39), July 2019.
 * Original Source: https://zenodo.org/record/4419082
 * Used Source: https://github.com/visgl/deck.gl-data/tree/master/examples/globe
 * License: CC BY 4.0
 * 
 * LAND & AIRPORT DATA SOURCE: 
 * 
 * admin 0 scale rank & airports (v3.3.0)
 * 
 * Credits:
   * Natural Earth http://www.naturalearthdata.com/
   * geojson-xyz https://github.com/geojson-xyz
 * Original Source: https://www.naturalearthdata.com/downloads/
 * Used Source: http://geojson.xyz/
 * License: Public Domain
 */

"use strict";

import { Deck, COORDINATE_SYSTEM, _GlobeView as GlobeView } from '@deck.gl/core';
import { GeoJsonLayer } from '@deck.gl/layers';
import { SimpleMeshLayer } from '@deck.gl/mesh-layers';
import { SphereGeometry } from '@luma.gl/core';
import { load } from '@loaders.gl/core';
import { CSVLoader } from '@loaders.gl/csv';
import {
  AnimatedArcLayer,
  sliceData,
  getDate,
  initSourceTxt,
  initInfoTxt,
  spinner
} from './utils.js';

(() => {
  // 
  // SECTION: LOADING AIR TRAFFIC DATA
  // 
  
  // choose dates
  const dates = [
    // '2020-01-14',
    // '2020-02-11',
    // '2020-03-10',
    '2020-04-14',
    // '2020-05-12',
    // '2020-06-09',
    // '2020-07-14',
    '2020-08-11',
    // '2020-09-08',
    // '2020-10-13',
    // '2020-11-10',
    '2020-12-08'
  ];
  
  var groups = [];
  const data = [];
  const DATA_URL = {
    TRAFFIC: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/globe',
    LAND: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson',
    AIRPORTS: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson'
  }
  
  for (const date of dates) { loadData(date); }
  
  async function loadData(date) {
    const url = `${DATA_URL.TRAFFIC}/${date}.csv`;
    const flights = await load(url, CSVLoader, {csv: {skipEmptyLines: true}});
    data.push({flights, date});
    groups = sliceData(data);
  }
  
  // 
  // SECTION: SPECIFICATION OF DOCUMENT ELEMENTS
  // 
  
  const canvas = document.getElementById(MTW_CANVAS_ID);
  canvas.style.backgroundColor ='#111';
  
  canvas.before(initSourceTxt(
    "Source: <i><a title='Explore it' target='_blank' href='https://github.com/mythemeway/mtw-boilerplate-decks'>mtw-boilerplate-decks</a></i><br>Data: <i><a title='Explore it' target='_blank' href='https://zenodo.org/record/4419082'>Crowdsourced air traffic data from The OpenSky Network 2020 [CC-BY]</a>; <a title='Explore it' target='_blank' href='http://www.naturalearthdata.com/'>Natural Earth</a>;</i><br>Moving, zooming & rotating is possible; Airports are clickable;"
  ));
  
  const infoTxt = initInfoTxt('<b>Loading<br>◜</b><br><br>');
  canvas.before(infoTxt);
  
  // 
  // SECTION: LAYER SETTING
  // 
  
  var layersLoaded = 0;
  
  const backgroundLayers = [
    new SimpleMeshLayer({
      id: 'earth-sphere',
      data: [0],
      mesh: new SphereGeometry({radius: 6.3e6, nlat: 18, nlong: 36}),
      coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
      getPosition: [0, 0, 0],
      getColor: [5, 40, 53]
    }),
    
    new GeoJsonLayer({
      id: 'earth-land',
      data: DATA_URL.LAND,
      // Styles
      stroked: true,
      filled: true,
      lineWidthMinPixels: 2,
      getLineColor: [135, 123, 64],
      getFillColor: [135, 123, 64, 200],
      onDataLoad: () => {layersLoaded += 1;},
    }),
    
    new GeoJsonLayer({
      id: 'airports',
      data: DATA_URL.AIRPORTS,
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: f => 11 - f.properties.scalerank,
      lineWidthMinPixels: .5,
      getLineColor: [15, 15, 15],
      getFillColor: [135, 123, 64],
      // Interactive props
      pickable: true,
      autoHighlight: true,
      onDataLoad: () => {layersLoaded += 1;},
      
      onClick: info =>
        info.object && alert(`${info.object.properties.name} (${info.object.properties.abbrev})`)
    }),
  ];
  
  function setDataLayers(timeRange) {
    const dataLayers = groups.map((group, index) =>
      new AnimatedArcLayer({
        id: `flights-${index}`,
        data: group.flights,
        visible: group.startTime < timeRange[1] && group.endTime > timeRange[0],
        getSourcePosition: d => [d.lon1, d.lat1, d.alt1],
        getTargetPosition: d => [d.lon2, d.lat2, d.alt2],
        getSourceTimestamp: d => d.time1,
        getTargetTimestamp: d => d.time2,
        getHeight: 0.5,
        getWidth: 1,
        timeRange,
        getSourceColor: [255, 0, 128],
        getTargetColor: [0, 128, 255]
      })
    );
    
    return dataLayers;
  };
  
  // 
  // SECTION: DECK LAUNCHING & RENDERING
  // 
  
  var currentTime = 0;
  var endTime = null;
  const TIME_WINDOW = 900; // 15 minutes
  const animationSpeed = TIME_WINDOW * 0.2;
  
  const viewState = {
    latitude: 20,
    longitude: 30,
    zoom: 0,
    minZoom: 0,
  };
  
  const deckgl = new Deck({
    canvas: MTW_CANVAS_ID,
    views: new GlobeView(),
    controller: true,
    layers: backgroundLayers,
    
    onWebGLInitialized: () => {
      if ((canvas.clientHeight < 600) || (canvas.clientWidth < 600)) {
        viewState.zoom = -.8;
        viewState.minZoom = -.8;
        
      } else if ((canvas.clientHeight > 1300) && (canvas.clientWidth > 1100)) {
        viewState.zoom = 1;
        viewState.minZoom = 1;
      }
      
      deckgl.setProps({initialViewState: viewState});
    },
    
    onLoad: () => launch()
  });
  
  function launch() {
    if ((groups.length != 0) && (layersLoaded === 2))
      requestAnimationFrame(render)
    
    else {
      infoTxt.innerHTML = '<b>Loading<br>'+spinner()+'</b><br><br>';
      setTimeout(() => launch(), 100);
    }
  }

  function render() {
    const [timestamp, endDate, flightNum] = getDate(data, currentTime);
    if (endDate) {
      if (!(endTime)) {
        endTime = timestamp;
        
      } else if (endTime === timestamp) {
        currentTime = 0; 
        endTime = null;
      };
    };
    
    infoTxt.innerHTML = '<b>Air Traffic During the Global Pandemic</b><br>'+new Date(timestamp).toUTCString()+"<br>Flights: "+flightNum+"K"; 
    
    deckgl.setProps({
      layers: [
        backgroundLayers,
        setDataLayers([currentTime, currentTime + TIME_WINDOW])
      ]
    });
    
    currentTime += animationSpeed;
    
    setTimeout(() => requestAnimationFrame(render), 100);
  }
})();
