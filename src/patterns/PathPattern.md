```js
const Map = require('react-leaflet').Map;
const TileLayer = require('react-leaflet').TileLayer;
const Patterns = require('./index.js').default;
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
      color: 'orange',
      fillPattern: Patterns.PathPattern({
        d: 'M10 0 L7 20 L25 20 Z',
        x: 5,
        y: 5,
        fill: true,
        width: 25,
        height: 25,
        color: 'orange',
        key: 'path',
      }),
    })}
  />
</Map>;
```
