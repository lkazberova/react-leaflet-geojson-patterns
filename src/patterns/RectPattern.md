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
      color: 'blue',
      fillPattern: Patterns.RectPattern({
        rx: 0,
        ry: 0,
        fill: true,
        width: 40,
        height: 40,
        color: 'blue',
        key: 'rect',
      }),
    })}
  />
</Map>;
```
