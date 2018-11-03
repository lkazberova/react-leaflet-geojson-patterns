# react-leaflet-geojson-patterns

> The component extended default GeoJSON for support svg patterns

[![NPM](https://img.shields.io/npm/v/react-leaflet-geojson-patterns.svg)](https://www.npmjs.com/package/react-leaflet-geojson-patterns) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**[Demo](https://lkazberova.github.io/react-leaflet-geojson-patterns/)** | **[Documentation](https://lkazberova.github.io/react-leaflet-geojson-patterns/documentation/)**

## Install

```bash
npm install --save react-leaflet-geojson-patterns
```

## Usage

```jsx
import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { GeoJSONFillable, Patterns} from 'react-leaflet-geojson-patterns';

<Map center={[47.9, -71.4]} zoom={10} style={{ height: "300px" }}>
  <TileLayer
    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <GeoJSONFillable
    data={{
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            style: "stripe",
            name: "Loisirs Lavoie et St-Jean-Baptiste"
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-71.729270299794578, 48.010418784700107],
                [-71.291070323784993, 48.004374022337799],
                [-71.291070323784993, 47.777183877693901],
                [-71.729270299794578, 47.786290622064854],
                [-71.729270299794578, 48.010418784700107]
              ]
            ]
          }
        }
      ]
    }}
    style={feature => ({
      color: "red",
      fillPattern: Patterns.CirclePattern({
        x: 7,
        y: 7,
        radius: 5,
        fill: true,
        width: 15,
        height: 15,
        color: "red",
        key: "circle"
      })
    })}
  />
</Map>;
```

## Built With

- [Leaflet.pattern](https://github.com/teastman/Leaflet.pattern) - The plugin for leaflet that allows for use of fill patterns in Paths.
- [Leaflet-react](https://react-leaflet.js.org) - React components for 🍃 Leaflet maps

## License

MIT © [lkazberova](https://github.com/lkazberova)
