/*! MTW-BOILERPLATE-DECKS: UTILS.JS
 * 
 * Author: sitdisch
 * Source: https://github.com/mythemeway
 * License: MIT
 * Copyright: © 2022 sitdisch
 *
 * UTILITIES ARE BASED ON:
 * 
 * slice-data.js, animated-arc-layer.js
 * 
 * Original Authors: deck.gl Contributors
 * Sources: 
   * https://github.com/visgl/deck.gl/blob/8.7-release/examples/website/globe/animated-arc-layer.js
   * https://github.com/visgl/deck.gl/blob/8.7-release/examples/website/globe/slice-data.js
 * License: MIT
 * Copyright: © 2020 Urban Computing Foundation
 * Changes: made
 */

"use strict";

const spinnerSign = ['◜', '◠', '◝', '◞', '◡', '◟'];
var spinnerIdx = -1;

export function spinner() {
  if (spinnerIdx === 5) {spinnerIdx = -1}
  spinnerIdx += 1;
  return spinnerSign[spinnerIdx];
}

const shadow = "0.05em 0 black, 0 0.05em black, -0.05em 0 black, 0 -0.05em black, -0.05em -0.05em black, -0.05em 0.05em black, 0.05em -0.05em black, 0.05em 0.05em black, 0 0 1em black";

export function initSourceTxt(content){
  const sourceTxt = document.createElement('div');
  sourceTxt.style.position = 'absolute';
  sourceTxt.style.zIndex = 1;
  sourceTxt.style.top = '1%';
  sourceTxt.style.maxWidth = '215px';
  sourceTxt.style.right = '1%';
  sourceTxt.style.color = '#eeeeee';
  sourceTxt.style.padding = '5px';
  sourceTxt.style.backgroundColor ='rgba(255, 255, 255, .4)';
  sourceTxt.style.fontFamily = 'sans-serif';
  sourceTxt.style.fontSize = '12px';
  sourceTxt.style.border = '2px solid #eeeeee';
  sourceTxt.style.borderRadius = '6px';
  sourceTxt.style.boxShadow = shadow;
  sourceTxt.innerHTML = content;
  return sourceTxt;
}; 

export function initInfoTxt(content){
  const infoTxt = document.createElement('div');
  infoTxt.style.position = 'absolute';
  infoTxt.style.zIndex = 1;
  infoTxt.style.bottom = '8%';
  infoTxt.style.color = '#eeeeee';
  infoTxt.style.width = '100%'
  infoTxt.style.justifyContent = 'center';
  infoTxt.style.fontFamily = 'sans-serif';
  infoTxt.style.fontSize = '23px';
  infoTxt.style.textAlign ="center";
  infoTxt.style.textShadow = shadow;
  infoTxt.innerHTML = content;
  return infoTxt;
}; 

// 
// SOURCE OF THE FOLLOWING: https://github.com/visgl/deck.gl/blob/8.7-release/examples/website/globe/slice-data.js
// 

const GROUP_SIZE = 2500;
const SEC_PER_DAY = 60 * 60 * 24;

// Divide data into smaller groups, and render one layer for each group.
// This allows us to cheaply cull invisible flights by turning layers off and on.
export function sliceData(data) {
  if (!data) { return []; }

  return data.flatMap((day, i) => {
    if (day.groups) return day.groups;

    // Join multiple days together into a continuous animation
    day.groups = [];
    const offset = SEC_PER_DAY * i;
    let group = null;

    for (const row of day.flights) {
      row.time1 += offset;
      row.time2 += offset;

      if (!group || group.flights.length >= GROUP_SIZE) {
        group = {
          date: day.date,
          startTime: row.time1,
          endTime: row.time2,
          flights: []
        };
        
        day.groups.push(group);
      }
      
      group.flights.push(row);
      group.startTime = Math.min(group.startTime, row.time1);
      group.endTime = Math.max(group.endTime, row.time2);
    }
    
    return day.groups;
  });
}

// Look up the real date time from our artifical timestamp
export function getDate(data, t) {
  if (typeof data === 'string') {
    const timestamp = new Date(`${data}`).getTime() + (t % SEC_PER_DAY) * 1000;
    return timestamp;

  } else {
    const index = Math.min(data.length - 1, Math.floor(t / SEC_PER_DAY));
    const date = data[index].date;
    const timestamp = new Date(`${date}T00:00:00Z`).getTime() + (t % SEC_PER_DAY) * 1000;
    const endDate = (index === (data.length - 1)) ? true : false;
    const flightNum = Math.round(data[index].flights.length / 100) / 10;
    return [timestamp, endDate, flightNum];
  }
}

// 
// SOURCE OF THE FOLLOWING: https://github.com/visgl/deck.gl/blob/8.7-release/examples/website/globe/animated-arc-layer.js
// 

import {ArcLayer} from '@deck.gl/layers';

export class AnimatedArcLayer extends ArcLayer {
  getShaders() {
    const shaders = super.getShaders();
    
    shaders.inject = {
      'vs:#decl': `\
uniform vec2 timeRange;
attribute float instanceSourceTimestamp;
attribute float instanceTargetTimestamp;
varying float vTimestamp;
`,
      'vs:#main-end': `\
vTimestamp = mix(instanceSourceTimestamp, instanceTargetTimestamp, segmentRatio);
`,
      'fs:#decl': `\
uniform vec2 timeRange;
varying float vTimestamp;
`,
      'fs:#main-start': `\
if (vTimestamp < timeRange.x || vTimestamp > timeRange.y) {
  discard;
}
`,
      'fs:DECKGL_FILTER_COLOR': `\
color.a *= (vTimestamp - timeRange.x) / (timeRange.y - timeRange.x);
`
    };
    
    return shaders;
  }

  initializeState() {
    super.initializeState();
    this.getAttributeManager().addInstanced({
      instanceSourceTimestamp: {
        size: 1,
        accessor: 'getSourceTimestamp'
      },
      
      instanceTargetTimestamp: {
        size: 1,
        accessor: 'getTargetTimestamp'
      }
    });
  }

  draw(params) {
    params.uniforms = Object.assign({}, params.uniforms, {
      timeRange: this.props.timeRange
    });
    
    super.draw(params);
  }
}

AnimatedArcLayer.layerName = 'AnimatedArcLayer';
AnimatedArcLayer.defaultProps = {
  getSourceTimestamp: {type: 'accessor', value: 0},
  getTargetTimestamp: {type: 'accessor', value: 1},
  timeRange: {type: 'array', compare: true, value: [0, 1]}
};
