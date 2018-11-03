# react-leaflet-geojson-patterns

> The component extended default GeoJSON for support svg patterns

[![NPM](https://img.shields.io/npm/v/react-leaflet-geojson-patterns.svg)](https://www.npmjs.com/package/react-leaflet-geojson-patterns) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-leaflet-geojson-patterns
```

## Usage

```jsx
import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { GeoJSONFillable, Patterns} from 'react-leaflet-geojson-patterns';

<Map center={[6.722, -1.555]} zoom={14} style={{ height: '300px' }}>
  <TileLayer
    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <GeoJSONFillable
    data={{
      type: 'FeatureCollection',
      bbox: [-3.255, 4.738, 1.191, 11.173],
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-1.552, 6.712],
                [-1.569, 6.722],
                [-1.569, 6.724],
                [-1.552, 6.734],
                [-1.54, 6.728],
                [-1.552, 6.712],
              ],
            ],
          },
        },
      ],
    }}
    style={feature => ({
      color: 'green',
      fillPattern: Patterns.StripePattern({ color: 'green', key: 'stripe' }),
    })}
  />
</Map>;
```

## Built With

- [Leaflet.pattern](https://github.com/teastman/Leaflet.pattern) - The plugin for leaflet that allows for use of fill patterns in Paths.
- [Leaflet-react](https://react-leaflet.js.org) - React components for 🍃 Leaflet maps

## License

MIT © [lkazberova](https://github.com/lkazberova)
