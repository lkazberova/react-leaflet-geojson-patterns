import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'
import { GeoJSONFillable, Patterns } from './'
import { Map, TileLayer } from 'react-leaflet'
import geojson from '../example/src/samples/geojson'
import { SVG } from 'leaflet'

configure({ adapter: new Adapter() })

describe('<GeoJSONFillable />', () => {
  const mountGeoJSONFillable = options => {
    const div = global.document.createElement('div')
    global.document.body.appendChild(div)
    global.Browser = { svg: true }
    const renderer = new SVG()
    class WrapperClass extends React.Component {
      render() {
        return (
          <Map
            center={[6.7123546125822156, -1.5522903158112547]}
            zoom={14}
            renderer={renderer}
            style={{ height: '100vh' }}
          >
            <TileLayer
              attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <GeoJSONFillable {...this.props} />
          </Map>
        )
      }
    }
    return mount(<WrapperClass {...options} />, { attachTo: div })
  }

  it('render a style with a function type', () => {
    let props = {
      data: geojson,
      style: feature => ({
        fillPattern: Patterns.StripePattern({ key: 'stripe' })
      })
    }
    const wrapper = mountGeoJSONFillable(props)
    const cheerio = wrapper.render()
    expect(wrapper).toBeDefined()
    expect(cheerio.find('pattern#stripe').length).toEqual(1)
  })
  it('render changed via props a style with a function type', done => {
    let props = {
      data: geojson,
      style: feature => ({
        fillPattern: Patterns.StripePattern({ key: 'stripe1' })
      })
    }
    const wrapper = mountGeoJSONFillable(props)
    const cheerio = wrapper.render()
    expect(wrapper).toBeDefined()
    expect(cheerio.find('pattern#stripe1').length).toEqual(1)

    wrapper.setProps(
      {
        ...props,
        style: feature => ({
          fillPattern: Patterns.StripePattern({ key: 'stripe2' })
        })
      },
      () => {
        expect(wrapper.render().find('pattern#stripe2').length).toEqual(1)
        done()
      }
    )
  })

  it('render a object style', () => {
    let props = {
      data: geojson,
      style: {
        fillPattern: Patterns.StripePattern({ key: 'stripe1' })
      }
    }
    const wrapper = mountGeoJSONFillable(props)
    const cheerio = wrapper.render()
    expect(wrapper).toBeDefined()
    expect(cheerio.find('pattern#stripe1').length).toEqual(1)
  })

  it('render changed via props a style with a object type', done => {
    let props = {
      data: geojson,
      style: { fillPattern: Patterns.CirclePattern({ key: 'circle1' }) }
    }
    const wrapper = mountGeoJSONFillable(props)
    const cheerio = wrapper.render()
    expect(wrapper).toBeDefined()
    expect(cheerio.find('pattern#circle1').length).toEqual(1)

    wrapper.setProps(
      {
        ...props,
        style: { fillPattern: Patterns.CirclePattern({ key: 'circle2' }) }
      },
      () => {
        expect(wrapper.render().find('pattern#circle2').length).toEqual(1)
        done()
      }
    )
  })

  it('render without style', () => {
    let props = {
      data: geojson
    }
    const wrapper = mountGeoJSONFillable(props)
    expect(wrapper).toBeDefined()
  })

  it('render a usual style with a object type', () => {
    let props = {
      data: geojson,
      style: { color: 'red' }
    }
    const wrapper = mountGeoJSONFillable(props)
    expect(wrapper).toBeDefined()
  })

  it('render a usual style with a function type', () => {
    let props = {
      data: geojson,
      style: feature => ({ color: 'red' })
    }
    const wrapper = mountGeoJSONFillable(props)
    expect(wrapper).toBeDefined()
  })
})
