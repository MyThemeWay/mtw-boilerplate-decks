<div align='center'>
<h1>MTW-BOILERPLATE-DECKS</h1>
<img src="https://repository-images.githubusercontent.com/505743675/a0d372b8-8f22-4373-aa0f-99fe0793743e"/><br>
<a href="https://github.com/mythemeway/mtw-boilerplate-decks/actions?query=workflow%3ACodeQL" title="Explore it" target="_blank"><img src="https://img.shields.io/github/workflow/status/mythemeway/mtw-boilerplate-decks/CodeQL?logo=github&label=CodeQL&cacheSeconds=3600" /></a>
<img src="https://img.shields.io/github/languages/code-size/mythemeway/mtw-boilerplate-decks?label=CodeSize&cacheSeconds=3600" /><br>
<img src="https://img.shields.io/github/repo-size/mythemeway/mtw-boilerplate-decks?label=RepoSize&cacheSeconds=3600" />
<a title="Check it out" target="_blank" href="https://github.com/mythemeway/mtw-boilerplate-decks/blob/main/LICENSE.txt"><img src="https://raw.githubusercontent.com/sitdisch/cloud/master/badges/particle/License-MIT.svg" /></a>
<a title="Check it out" target="_blank" href="https://github.com/mythemeway/mtw-boilerplate-decks/releases"><img src="https://img.shields.io/github/v/release/mythemeway/mtw-boilerplate-decks?label=LastRelease&cacheSeconds=3600" /></a><br>
<a title="Explore it" target="_blank" href="https://snyk.io/test/github/MyThemeWay/mtw-boilerplate-decks"><img alt="Snyk Vulnerabilities" src="https://img.shields.io/badge/Snyk-Vulnerabilities-2A2E30.svg?logo=snyk&cacheSeconds=3600" /></a><br>
<a title="Explore it" target="_blank" href="https://snyk.io/test/github/MyThemeWay/mtw-boilerplate-decks"><img loading="eager" alt="&nbsp;pending..." height="25" src="https://img.shields.io/snyk/vulnerabilities/github/MyThemeWay/mtw-boilerplate-decks?label=&cacheSeconds=3600" /></a><br>
<b>Full Report: <a title="Check it out" target="_blank" href="https://snyk.io/test/github/MyThemeWay/mtw-boilerplate-decks">Last&nbsp;One</a></b><br>
</div>
<hr>

This boilerplate allows you to develop quickly and easily WebGL-based visualizations of large datasets in deck canvas bundles. It has two modes. The result of <a title="Go there" href="#run-production-mode" >production mode</a> is a minimized bundle. You can <a title="Watch how" href="#embed-deck" >embed</a> this bundle on a website and then automatically update the deck's datasets continuously, for example.

In <a title="Go there" href="#run-development-mode" >development mode</a>, the deck files are watched. This means, if you edit them and save your changes, the decks will be recompiled and reloaded immediately. Feel free to adapt the existing decks or create a completely new one. If you need inspiration, check out [deck.gl showcase](https://deck.gl/showcase "Go there") or [deck.gl examples](https://deck.gl/examples "Go there"). There you can see what's possible. E.&nbsp;g. Nicolas Belmonte's [Wind Map](https://medium.com/vis-gl/wind-map-a58575f87fe3 "Check it out") is really amazing.

## | Deck Canvas Examples

### [mtw-deck-flights](https://mythemeway.github.io/mtw-boilerplate-decks/mtw-deck-flights "Check it out")

<table>
<td align="center">

https://user-images.githubusercontent.com/54351917/174600720-2c307f38-73b0-43a1-a46c-ea7f1dedb90b.mp4

<div><a href="https://mythemeway.github.io/mtw-boilerplate-decks/mtw-deck-flights" title="Explore " target="_blank"><img height="30" src="https://raw.githubusercontent.com/sitdisch/cloud/master/badges/particle/Explore-grey.svg"/></img></div>

</td>
</table>

> * <b>Note</b>: moving, zooming and rotating is possible; airports are clickable;
> * <b>Original Sources</b>: [deck.gl website example | globe](https://github.com/visgl/deck.gl/tree/8.7-release/examples/website/globe "Check it out") and [deck.gl pure-js example | globe](https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/globe "Check it out")
> * <b>Original Authors</b>: [deck.gl contributors](https://github.com/visgl/deck.gl/graphs/contributors "Go there") 
> * <b>License & Copyright</b>: [MIT ©️ 2020 Urban Computing Foundation](https://github.com/visgl/deck.gl/blob/master/LICENSE "Go there")
> * <b>Changes</b>: made

<b>Air Traffic Data Source</b>

>	* <b>Original Source</b>: [Crowdsourced air traffic data from The OpenSky Network 2020 [CC-BY]](https://zenodo.org/record/4419082 "Check it out")
>	 * <b>License</b>: [CC BY 4.0](https://zenodo.org/record/4419082 "Check it out")
>	* <b>Credits</b>:
>		* <i>Matthias Schäfer, Martin Strohmeier, Vincent Lenders, Ivan Martinovic and Matthias Wilhelm. "Bringing Up OpenSky: A Large-scale ADS-B Sensor Network for Research". In Proceedings of the 13th IEEE/ACM International Symposium on Information Processing in Sensor Networks (IPSN), pages 83-94, April 2014.</i>
>		* <i>Xavier Olive. "traffic, a toolbox for processing and analysing air traffic data." Journal of Open Source Software 4(39), July 2019.</i>
>	* <b>Used Source</b>: [deck.gl-data example | globe](https://github.com/visgl/deck.gl-data/tree/master/examples/globe "Check it out")

<b>Land & Airport Data Source</b> 

>	* <b>Original Source</b>: [Natural Earth](https://www.naturalearthdata.com/downloads/ "Check it out")
>	* <b>License</b>: [Public Domain](https://www.naturalearthdata.com/about/terms-of-use/ "Check it out")
>	* <b>Used Source</b>: [geojson-xyz](http://geojson.xyz/ "Check it out")

### [mtw-deck-trips](https://mythemeway.github.io/mtw-boilerplate-decks/mtw-deck-trips "Check it out")

<table>
<td align="center">

https://user-images.githubusercontent.com/54351917/174600820-05bc8021-a73c-4cfe-bc9d-617a3d571d39.mp4

<div><a href="https://mythemeway.github.io/mtw-boilerplate-decks/mtw-deck-trips" title="Explore " target="_blank"><img height="30" src="https://raw.githubusercontent.com/sitdisch/cloud/master/badges/particle/Explore-2A2E30.svg"/></img></div>

</td>
</table>

> * <b>Note</b>: moving, zooming and rotating is possible (e.&nbsp;g. hold down shift to rotate)
> * <b>Original Source</b>: [deck.gl website example | trips](https://github.com/visgl/deck.gl/tree/8.7-release/examples/website/trips "Check it out")
> * <b>Original Authors</b>: [deck.gl contributors](https://github.com/visgl/deck.gl/graphs/contributors "Go there") 
> * <b>License & Copyright</b>: [MIT ©️ 2020 Urban Computing Foundation](https://github.com/visgl/deck.gl/blob/master/LICENSE "Go there")
> * <b>Changes</b>: made

<b>Boundaries & Roads Data Source</b>

>	* <b>Original Sources</b>: [Borough Boundaries](https://data.cityofnewyork.us/City-Government/Borough-Boundaries/tqmj-j8zm "Check it out") and [NYC Street Centerline](https://data.cityofnewyork.us/City-Government/NYC-Street-Centerline-CSCL-for-PlowNYC-Winter-2016/uxpt-rzip "Check it out") via [NYC OpenData](https://opendata.cityofnewyork.us/ "Check it out")
>	* <b>License</b>: [Public Domain / OpenData](https://opendata.cityofnewyork.us/overview/ "Check it out")
>	* <b>Credits</b>:
>		* [Department of City Planning (DCP)](https://www1.nyc.gov/site/planning/index.page "Check it out")
>		* [Department of Information Technology & Telecommunications (DoITT)](https://www1.nyc.gov/site/doitt/index.page "Check it out")
>	* <b>Changes</b>: data modified, minified & converted via [mapshaper](https://github.com/mbloch/mapshaper "Check it out") to use only area of interest data

<b>Trips Data Source</b>

>	* <b>Original Source</b>: [NYC Taxi & Limousine Commission Trip Record Data](https://www1.nyc.gov/site/tlc/about/raw-data.page "Check it out")
>		* <b>License</b>: [Public Domain / OpenData](https://opendata.cityofnewyork.us/overview/ "Check it out")
>		* <b>Credits</b>:
>			* [Taxi and Limousine Commission (TLC)](https://www1.nyc.gov/site/tlc/index.page "Check it out")
>			* [Technology System Providers (TSP)](https://www1.nyc.gov/site/tlc/businesses/technology-system-provider-tsp.page "Check it out")
>			* [Department of Information Technology & Telecommunications (DoITT)](https://www1.nyc.gov/site/doitt/index.page "Check it out")
>	* <b>Used Source</b>: [deck.gl TripsLayer Example | trips.json](https://github.com/visgl/deck.gl-data/blob/master/examples/trips/trips.json "Check it out") via [deck.gl-data](https://github.com/visgl/deck.gl-data "Check it out")
>		* <b>License & Copyright</b>: [MIT ©️ 2017 Uber Technologies, Inc.](https://github.com/visgl/deck.gl-data/blob/master/LICENSE "Check it out")
>		* <b>Credit</b>: [deck.gl-data contributors](https://github.com/visgl/deck.gl-data/graphs/contributors "Check it out")
>		* <b>Changes</b>: data modified and minified to use only area of interest data

<b>Buildings Data Source</b>

>	* <b>Original Source</b>: [OpenStreetMap](https://www.openstreetmap.org/#map=15/40.7067/-74.0106&layers=Y "Check it out") via [Mapzen Vector Tiles API](https://www.mapzen.com/projects/vector-tiles/ "Check it out")
>		* <b>License & Copyright</b>: [ODbL © OpenStreetMap contributors](https://www.openstreetmap.org/copyright "Check it out")
>		* <b>Credits</b>:
>			* [OpenStreetMap contributors](https://wiki.openstreetmap.org/wiki/Contributors "Check it out")
>			* [Mapzen](https://www.mapzen.com/ "Check it out")
>	* <b>Used Source</b>: [deck.gl TripsLayer Example | buildings.json](https://github.com/visgl/deck.gl-data/blob/master/examples/trips/buildings.json "Check it out") via [deck.gl-data](https://github.com/visgl/deck.gl-data "Check it out")
>		* <b>License & Copyright</b>: [MIT ©️ 2017 Uber Technologies, Inc.](https://github.com/visgl/deck.gl-data/blob/master/LICENSE "Check it out")
>		* <b>Credit</b>: [deck.gl-data contributors](https://github.com/visgl/deck.gl-data/graphs/contributors "Check it out")

## | Feature Overview

### [Branch: main](https://github.com/MyThemeWay/mtw-boilerplate-decks/tree/main "Check it out")

<a href="https://github.com/nodejs/node" title="Check it out" target="_blank"><img height="26" alt="Node.js" src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sitdisch/cloud/master/badges/json/nodejs.json&cacheSeconds=3600"/></a>
<a title="Check it out" target="_blank" href="https://www.npmjs.com/package/esbuild"><img height="26" alt="esbuild" src="https://img.shields.io/github/package-json/dependency-version/mythemeway/mtw-boilerplate-decks/esbuild?label=esbuild&logo=esbuild&cacheSeconds=3600" /></a>
<a title="Check it out" target="_blank" href="https://www.npmjs.com/package/deck.gl"><img height="26" alt="deck.gl" src="https://img.shields.io/github/package-json/dependency-version/mythemeway/mtw-boilerplate-decks/@deck.gl/core?label=deck.gl&cacheSeconds=3600" /></a>
<a title="Check it out" target="_blank" href="https://www.npmjs.com/package/terser"><img height="26" alt="terser" src="https://img.shields.io/github/package-json/dependency-version/mythemeway/mtw-boilerplate-decks/terser?label=terser&cacheSeconds=3600" /></a>

### Note:
>	* Badges are clickable and linked to their sources.

<h3>Additional Feature Information:</h3>
<div align="center">
	<a href="https://github.com/evanw/esbuild" title="Explore this" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=evanw&repo=esbuild&text_color=F1F1EB&border_color=050B0E&bg_color=2A2E30&title_color=FFFFFF&icon_color=E28905" /></a><span> </span>
	<a href="https://github.com/visgl/deck.gl" title="Explore this" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=visgl&repo=deck.gl&text_color=F1F1EB&border_color=050B0E&bg_color=212426&title_color=FFFFFF&icon_color=E28905" /></a><span> </span>
	<a href="https://github.com/terser/terser" title="Explore this" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=terser&repo=terser&text_color=F1F1EB&border_color=050B0E&bg_color=2A2E30&title_color=FFFFFF&icon_color=E28905" /></a><span> </span>
	<details><summary><b>[click to toggle]</b></summary>
	<a href="https://github.com/nodejs/node" title="Explore this" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=nodejs&repo=node&text_color=F1F1EB&border_color=050B0E&bg_color=212426&title_color=FFFFFF&icon_color=E28905" /></a><span> </span>
	<a href="https://github.com/npm/cli" title="Explore this" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=npm&repo=cli&text_color=F1F1EB&border_color=050B0E&bg_color=2A2E30&title_color=FFFFFF&icon_color=E28905&show_owner=true" /></a><span> </span>
	<a href="https://github.com/nvm-sh/nvm" title="Explore this" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=nvm-sh&repo=nvm&text_color=F1F1EB&border_color=050B0E&bg_color=212426&title_color=FFFFFF&icon_color=E28905" /></a><span> </span>
	</details><p></p>
</div>

> <b>Note</b>: Cards are clickable and linked to the corresponding GitHub repositories.

## | Setup

To enable local operation of this boilerplate, you can do the following:

1. open your terminal and define your shell `MYSHELL` and startup file `MYSTARTUPFILE` in use
	* e.&nbsp;g. for [Zsh](https://www.zsh.org/ "Go there")
		```bash
		MYSHELL="zsh"
		MYSTARTUPFILE=".zshrc"
		```
	* or for pure [Bash](https://www.gnu.org/software/bash/ "Go there")
		```bash
		MYSHELL="bash"
		MYSTARTUPFILE=".bashrc" # or .bash_profile for macOS
		```
2. install [nvm](https://github.com/nvm-sh/nvm "Go there") and source your startup file again
	```bash
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | $MYSHELL
	source ~/$MYSTARTUPFILE
	```
3. if your terminal has closed, open it again and continue
4. execute <a href="https://nodejs.org/en/" title="Explore this" target="_blank"><img alt="nvm install --lts" height="25" align="top" src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sitdisch/cloud/master/badges/json/nodejs.json&color=343941&labelColor=343941&label=nvm install&logo='&cacheSeconds=3600"/></a> to install [Node.js](https://nodejs.org/en/ "Go there")
5. clone the repository `git clone https://github.com/mythemeway/mtw-boilerplate-decks` or your fork to your local machine
6. change your current directory to mtw-boilerplate-decks `cd mtw-boilerplate-decks`
7. run `npm install`

> <b>Note</b>: If you've already installed <a href="https://nodejs.org/en/" title="Explore this" target="_blank"><img alt="Node.js LTS" height="25" align="top" src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sitdisch/cloud/master/badges/json/nodejs.json&color=343941&labelColor=343941&cacheSeconds=3600"/></a> you only have to do steps 5-7.

That's it.

## | Boilerplate Usage

### Run Development Mode

Go to the mtw-boilerplate-decks directory on your local machine and execute `npm start`. The result will appear at e.&nbsp;g. `http://localhost:8080`.

### Run Production Mode

There are two ways to get your minimized bundle.

Way 1: `npm run build`	= without [terser](https://github.com/terser/terser "Check it out") <b>[default] [faster]</b>

Way 2: `npm run terser`	= with [terser](https://github.com/terser/terser "Check it out") additionally <b>[smaller]</b>

> <b>Note</b>: output directory is always `~/mtw-boilerplate-decks/dist`

### Embed Deck

```html
<div style="position:relative; height:40vh; width:80vw">
	<canvas id="mtw-canvas"></canvas>
</div>
<script src="./canvas.bundle.min.js"></script>
```

> <b>Note</b>: WebGL canvases can make your CPU sweat. For the environment, stop the requestAnimationFrame loop when the canvas isn't visible <b>#GreenCoding</b>. See my [website-boilerplate](https://github.com/MyThemeWay/Dark-Particle/blob/master/src/canvas/mtw-canvas-disks/main.js "Check it out") for an example.

### Switch Deck
1. open `~/mtw-boilerplate-decks/canvas.config.js`
2. change `const canvas` and save it
	```js
	// 
	// CANVAS SETTINGS
	//  - path:  path to canvas
	//  - id:    canvas id attribute
	//  

	// const canvas = { path: './src/mtw-deck-flights.js', id: 'mtw-canvas' };
	const canvas = { path: './src/mtw-deck-trips.js', id: 'mtw-canvas' };

	module.exports = canvas;
	```

### Add Deck

1. put `mtw-deck-new.js` into the `~/mtw-boilerplate-decks/src/...` directory
2. follow the <a title="Go there" href="#switch-deck" >switch deck</a>  procedure
	```js
	// 
	// CANVAS SETTINGS
	//  - path:  path to canvas
	//  - id:    canvas id attribute
	//  

	// const canvas = { path: './src/mtw-deck-flights.js', id: 'mtw-canvas' };
	// const canvas = { path: './src/mtw-deck-trips.js', id: 'mtw-canvas' };
	const canvas = { path: './src/mtw-deck-new.js', id: 'new-canvas' };

	module.exports = canvas;
	```

### Note:
>	* your <b>canvas id attribute </b> setting is only used in production mode; in development mode it is always the default `mtw-canvas`
> * if you <b>switch/add</b> a Deck in development mode, the result is displayed immediately after saving your changes

## | Other Boilerplates

<table>
<td align="center" width="500px">

<a align="center" href="https://github.com/MyThemeWay/mtw-boilerplate-graphics" title="Explore this" target="_blank"><img src="https://repository-images.githubusercontent.com/467431589/d31c5129-c82f-4fd5-94d0-d4229a5a2dd7" width="804"/></a>
<a href="https://github.com/MyThemeWay/mtw-boilerplate-graphics" title="Explore this" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=mythemeway&repo=mtw-boilerplate-graphics&text_color=F1F1EB&border_color=050B0E&bg_color=212426&title_color=FFFFFF&icon_color=E28905"/></a>

</td>
</table>

<div align="right">
<table>
<td align="center" width="500px">

<a align="center" href="https://github.com/MyThemeWay/mtw-boilerplate-charts" title="Explore this" target="_blank"><img src="https://repository-images.githubusercontent.com/481295060/f5440180-8316-4816-af25-66b544761ff8" width="804"/></a>
<a href="https://github.com/MyThemeWay/mtw-boilerplate-charts" title="Explore this" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=mythemeway&repo=mtw-boilerplate-charts&text_color=F1F1EB&border_color=050B0E&bg_color=2A2E30&title_color=FFFFFF&icon_color=E28905"/></a>

</td>
</table>
</div>

## | Appendix
### Note on protected brand names and logos
> * The use of protected brand names, trade names, utility models and brand logos on this website does not constitute an infringement of copyright; rather, it serves as an illustrative note. Even if this is not marked as such at the respective points, the corresponding legal provisions always apply.
> * The brand names and logos used are the property of their respective owners and are subject to their copyright provisions.
> * This offer is in no way related to the legal entities of the protected brand names and logos used.

### Note on liability for links
> * This README contains links to external third-party websites. The README operator has no influence on the content of these sites. Therefore, he cannot assume any liability. Instead, the respective provider is always responsible for the content.
> * The linked pages were checked for possible legal violations at the time of linking and illegal content wasn't discernible. A permanent control of the linked pages is unreasonable without concrete evidence of an infringement. However, if the README operator becomes aware of such a violation, he will act immediately. 

### Readme uses
> * [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats "Check it out") [License: [MIT](https://github.com/anuraghazra/github-readme-stats/blob/master/LICENSE "Go there"); Copyright: ©️ 2021 Anurag Hazra]
> * [Simple Icons](https://simpleicons.org/ "Check it out") [License: [CC0&nbsp;1.0](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md "Go there")]
> * [Shields.io](https://github.com/badges/shields "Check it out") [License: [CC0&nbsp;1.0](https://github.com/badges/shields/blob/master/LICENSE "Go there")]
