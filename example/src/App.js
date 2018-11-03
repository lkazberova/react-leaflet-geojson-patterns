import React from 'react'
import ReactDOM from 'react-dom'
import { Map, TileLayer, LayersControl } from 'react-leaflet'
import geojson from './samples/geojson'
import { GeoJSONFillable, Patterns } from 'react-leaflet-geojson-patterns'
const { BaseLayer, Overlay } = LayersControl

class App extends React.Component {
  state = {
    selectedColor: 'red'
  };

  render() {
    const { selectedColor } = this.state
    return (
      <Map
        center={[48.010418784700107, -71.729270299794578]}
        zoom={9}
        style={{ height: '100vh' }}
      >
        <LayersControl position='topright'>
          <BaseLayer checked name='OpenStreetMap'>
            <TileLayer
              attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </BaseLayer>
          <Overlay checked name='Patterns'>
            <GeoJSONFillable
              data={geojson}
              style={feature => ({
                color: selectedColor,
                fillPattern: this.getFillPattern(feature)
              })}
            />
          </Overlay>
        </LayersControl>
        <button
          style={{ position: 'fixed', right: 10, top: 70, zIndex: 1001 }}
          onClick={this.toggleButtonHandler}
        >
          Change color
        </button>
      </Map>
    )
  }
  toggleButtonHandler = () =>
    this.setState({
      selectedColor: this.state.selectedColor !== 'red' ? 'red' : 'green'
    });

  getFillPattern = feature => {
    const { selectedColor } = this.state

    switch (feature.properties.style) {
      case 'checkerboard': return Patterns.CheckerBoardPattern({
        key: 'checkerboard' + selectedColor,
        color: selectedColor,
        width: 20,
        height: 20
      })
      case 'circle':
        return Patterns.CirclePattern({
          x: 7,
          y: 7,
          radius: 5,
          fill: true,
          width: 15,
          height: 15,
          color: selectedColor,
          key: 'circle' + selectedColor
        })
      case 'rect':
        return Patterns.RectPattern({
          width: 40,
          height: 40,
          rx: 10,
          ry: 10,
          fill: true,
          color: selectedColor,
          key: 'rect' + selectedColor
        })
      case 'stripe':
        return Patterns.StripePattern({
          key: 'stripe' + selectedColor,
          color: selectedColor
        })
      case 'path':
        return Patterns.PathPattern({
          d: 'M10 0 L7 20 L25 20 Z',
          fill: true,
          key: 'path' + selectedColor,
          width: 25,
          height: 25,
          x: 5,
          y: 5,
          color: selectedColor
        })
    }
  };
}
export default App
