/*! MTW-BOILERPLATE-DECKS: MTW-DECK-TRIPS.JS
 * 
 * Author: sitdisch
 * Source: https://github.com/mythemeway
 * License: MIT
 * Copyright: © 2022 sitdisch
 *
 * DECK IS BASED ON:
 * 
 * trips
 * 
 * Original Authors: deck.gl Contributors
 * Source: https://github.com/visgl/deck.gl/tree/8.7-release/examples/website/trips
 * License: MIT
 * Copyright: © 2020 Urban Computing Foundation
 * Changes: made
 * 
 * BOUNDARIES & ROADS DATA SOURCE:
 * 
 * Original Sources:
   * Borough Boundaries [ https://data.cityofnewyork.us/City-Government/Borough-Boundaries/tqmj-j8zm ]
   * NYC Street Centerline [ https://data.cityofnewyork.us/City-Government/NYC-Street-Centerline-CSCL-for-PlowNYC-Winter-2016/uxpt-rzip ]
   * via NYC OpenData [ https://opendata.cityofnewyork.us/ ]
 * Credits:
   * Department of City Planning (DCP) [ https://www1.nyc.gov/site/planning/index.page ]
   * Department of Information Technology & Telecommunications (DoITT) [ https://www1.nyc.gov/site/doitt/index.page ]
 * License: Public Domain / OpenData [ https://opendata.cityofnewyork.us/overview/ ] 
 * Changes: data modified, minified & converted via mapshaper [ https://github.com/mbloch/mapshaper ] to use only area of interest data
 * 
 * TRIPS DATA SOURCE:
 * 
 * Original Source:
   * Source: NYC Taxi & Limousine Commission Trip Record Data [ https://www1.nyc.gov/site/tlc/about/raw-data.page ] 
   * Credits:
     * Taxi and Limousine Commission (TLC) [ https://www1.nyc.gov/site/tlc/index.page "Check it out" ]
     * Technology System Providers (TSP) [ https://www1.nyc.gov/site/tlc/businesses/technology-system-provider-tsp.page ]
     * Department of Information Technology & Telecommunications (DoITT) [ https://www1.nyc.gov/site/doitt/index.page ]
   * License: Public Domain / OpenData [ https://opendata.cityofnewyork.us/overview/ ] 
 * Used Source:
   * Source: deck.gl TripsLayer Example | trips.json [ https://github.com/visgl/deck.gl-data/blob/master/examples/trips/trips.json ] via deck.gl-data [ https://github.com/visgl/deck.gl-data ]
   * Credit: deck.gl-data contributors [ https://github.com/visgl/deck.gl-data/graphs/contributors ]
   * License: MIT [ https://github.com/visgl/deck.gl-data/blob/master/LICENSE ]
   * Copyright: © 2017 Uber Technologies, Inc.
   * Changes: data modified and minified to use only area of interest data
 * 
 * BUILDINGS DATA SOURCE:
 * 
 * Original Source:
   * Source: OpenStreetMap [ https://www.openstreetmap.org/#map=15/40.7067/-74.0106&layers=Y ] via Mapzen Vector Tiles API [ https://www.mapzen.com/projects/vector-tiles/ ]  
   * Credits:
     * OpenStreetMap contributors [ https://wiki.openstreetmap.org/wiki/Contributors ] 
     * Mapzen [ https://www.mapzen.com/ ]
   * License: ODbL [ https://www.openstreetmap.org/copyright ]
   * Copyright: © OpenStreetMap contributors
 * Used Source:
   * Source: deck.gl TripsLayer Example | buildings.json [ https://github.com/visgl/deck.gl-data/blob/master/examples/trips/buildings.json ] via deck.gl-data [ https://github.com/visgl/deck.gl-data ] 
   * Credit: deck.gl-data contributors [ https://github.com/visgl/deck.gl-data/graphs/contributors ]
   * License: MIT [ https://github.com/visgl/deck.gl-data/blob/master/LICENSE ]
   * Copyright: © 2017 Uber Technologies, Inc.
 */

"use strict";

import { Deck, AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';
import { GeoJsonLayer, PolygonLayer } from '@deck.gl/layers';
import { TripsLayer } from '@deck.gl/geo-layers';
import {
  getDate,
  initSourceTxt,
  initInfoTxt,
  spinner
} from './utils.js';

(() => {
  // 
  // SECTION: SPECIFICATION OF DOCUMENT ELEMENTS
  // 
  
  const canvas = document.getElementById(MTW_CANVAS_ID);
  canvas.style.backgroundColor ='#111';
  
  canvas.before(initSourceTxt(
    "Source: <i><a title='Explore it' target='_blank' href='https://github.com/mythemeway/mtw-boilerplate-decks'>mtw-boilerplate-decks</a></i><br>Data: <i><a title='Explore it' target='_blank' href='https://www1.nyc.gov/site/tlc/about/raw-data.page'>NYC Taxi & Limousine Commission Trip Records</a>; <a title='Explore it' target='_blank' href='https://opendata.cityofnewyork.us/'>NYC OpenData</a>; <a title='Explore it' target='_blank' href='https://github.com/visgl/deck.gl-data/blob/master/examples/trips'>deck.gl-data</a>; <a title='Explore it' target='_blank' href='https://www.mapzen.com/projects/vector-tiles/'>Mapzen</a>; <a title='Explore it' target='_blank' href='https://www.openstreetmap.org/#map=15/40.7067/-74.0106&layers=Y'>©&nbsp;OpenStreetMap contributors</a>;</i><br>Moving, zooming & rotating is possible (e.&nbsp;g. hold down shift)</i>"
  ));
  
  const infoTxt = initInfoTxt('<b>Loading<br>◜</b><br><br>');
  canvas.before(infoTxt);
  
  // 
  // SECTION: LAYER SETTING
  // 
  
  const DATA_URL = {
    BOUNDARIES: 'https://raw.githubusercontent.com/sitdisch/cloud/master/data/mtw-boilerplate-decks/mtw-deck-trips/boundaries.geojson',
    BUILDINGS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/buildings.json',
    ROADS: 'https://raw.githubusercontent.com/sitdisch/cloud/master/data/mtw-boilerplate-decks/mtw-deck-trips/roads.geojson',
    TRIPS: 'https://raw.githubusercontent.com/sitdisch/cloud/master/data/mtw-boilerplate-decks/mtw-deck-trips/trips.json',
  };
  
  const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 1.0
  });

  const pointLight = new PointLight({
    color: [255, 255, 255],
    intensity: 2.0,
    position: [-74.05, 40.7, 8000]
  });

  const DEFAULT_THEME = {
    buildingColor: [74, 80, 87, 200],
    trailColor0: [253, 128, 93],
    trailColor1: [23, 184, 190],
    
    material: {
      ambient: 0.1,
      diffuse: 0.6,
      shininess: 32,
      specularColor: [60, 64, 70]
    },
    
    effects: [
      new LightingEffect({
        ambientLight,
        pointLight
      })
    ]
  };
  
  var layersLoaded = 0;
  var tripsNum = 0;
  
  const backgroundLayers = [
    new GeoJsonLayer({
      id: 'boundaries',
      data: DATA_URL.BOUNDARIES,
      // Styles
      stroked: true,
      filled: true,
      lineWidthMinPixels: 2,
      getLineColor: [41, 57, 57, 100],
      getFillColor: [18, 36, 36, 200],
      onDataLoad: () => {layersLoaded += 1;},
    }),
    
    new GeoJsonLayer({
      id: 'roads',
      data: DATA_URL.ROADS,
      stroked: true,
      lineWidthMinPixels: 1.5,
      getLineColor: [5, 40, 53, 200],
      onDataLoad: () => {layersLoaded += 1;}
    }),
    
    new PolygonLayer({
      id: 'buildings',
      data: DATA_URL.BUILDINGS,
      extruded: true,
      wireframe: false,
      opacity: 0.5,
      getPolygon: f => f.polygon,
      getElevation: f => f.height,
      getFillColor: DEFAULT_THEME.buildingColor,
      material: DEFAULT_THEME.material,
      onDataLoad: () => {layersLoaded += 1;}
    })
  ];

  function setTripsLayer() { 
    return new TripsLayer({
      id: 'trips',
      data: DATA_URL.TRIPS,
      getPath: d => d.path,
      getTimestamps: d => d.timestamps,
      opacity: 0.3,
      widthMinPixels: 2,
      capRounded: true,
      trailLength: 25,
      currentTime,
      
      getColor: d => (
        d.vendor === 0 ? DEFAULT_THEME.trailColor0 : DEFAULT_THEME.trailColor1
      ),
      
      onDataLoad: (d) => {
        layersLoaded += 1;
        tripsNum = d.length;
      }
    });
  };
  
  // 
  // SECTION: DECK LAUNCHING & RENDERING
  // 
  
  const date = 'June 16, 2016 21:00:00';
  const startTime = 450;
  const endTime = 1850;
  var currentTime = 1200;
  const TIME_WINDOW = 10;
  const animationSpeed = TIME_WINDOW * 0.2;
  
  const viewState = {
    longitude: -74.005,
    latitude: 40.701,
    zoom: 12.7,
    minZoom: 11,
    pitch: 45,
    bearing: 0
  };
  
  const deckgl = new Deck({
    canvas: MTW_CANVAS_ID,
    effects: DEFAULT_THEME.effects,
    controller: {touchRotate: true},
    
    layers: [
      backgroundLayers,
      setTripsLayer()
    ],
    
    onWebGLInitialized: () => {
      if (canvas.clientWidth >= 1400) {
        viewState.longitude = -74;
        viewState.zoom = 14.1;
        
        if (canvas.clientHeight > 1000) {
          viewState.latitude = 40.715;
        
        } else if ((canvas.clientHeight <= 1000) && (canvas.clientHeight > 700)) {
          viewState.latitude = 40.710;
        }
        
      } else if (canvas.clientHeight >= 1000) {
        viewState.longitude = -74.009;
        viewState.latitude = 40.718;
        viewState.zoom = 13.5;
        
      } else if ((canvas.clientHeight > 700) && (canvas.clientHeight < 1000)) {
        viewState.latitude = 40.72;
        
      } else if ((canvas.clientHeight <= 700) && (canvas.clientHeight > 440)) {
        viewState.latitude = 40.710;
      }
      
      deckgl.setProps({initialViewState: viewState});
    },
    
    onLoad: () => launch()
  });

  function launch() {
    if (layersLoaded === 4)
      requestAnimationFrame(render)
    
    else {
      infoTxt.innerHTML = '<b>Loading<br>'+spinner()+'</b><br><br>';
      setTimeout(() => launch(), 100);
    }
  }

  function render() {
    if (endTime === currentTime) {
      currentTime = startTime;
    };
    
    infoTxt.innerHTML = '<b>Yellow & Green Cab Trips in NYC</b><br>'+new Date(getDate(date, currentTime)).toLocaleString('en-US')+"<br>Trips: "+tripsNum;
    
    deckgl.setProps({
      layers: [
        backgroundLayers,
        setTripsLayer()
      ]
    });
    
    currentTime += animationSpeed;
    
    setTimeout(() => requestAnimationFrame(render), 100);
  }
})();
