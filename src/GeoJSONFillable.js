import { Path, withLeaflet } from 'react-leaflet';
import { GeoJSON as LeafletGeoJSON } from 'leaflet';
import isFunction from 'lodash.isfunction';

/**
 * GeoJSON supported fillPattern style
 */
class GeoJSONFillable extends Path {
  createLeafletElement(props) {
    const el = new LeafletGeoJSON(props.data, this.getOptions(props));
    el.once('add', e => {
      this.addedNotExistedPatterns(e.target.getLayers(), props.style);
    });
    return el;
  }

  updateLeafletElement(fromProps, toProps) {
    if (isFunction(toProps.style)) {
      this.addedNotExistedPatterns(
        this.leafletElement.getLayers(),
        toProps.style
      );
      this.setStyle(toProps.style);
    } else {
      if (fromProps.style.fillPattern !== toProps.style.fillPattern) {
        this.addPatternToLayer(toProps.style.fillPattern, this);
      }
      this.setStyleIfChanged(fromProps, toProps);
    }
  }

  addedNotExistedPatterns = (layers, style) => {
    const {
      leaflet: { map },
    } = this.props;
    if (!style) return;
    if (isFunction(style))
      layers.forEach(layer => {
        const featureStyle = style(layer.feature);
        if (
          featureStyle.fillPattern &&
          !map.hasPattern(featureStyle.fillPattern)
        ) {
          map.once('patternadd', ({ pattern }) => {
            // console.log('added', pattern, layer);
            setTimeout(() => layer.setStyle({ fillPattern: pattern }), 0);
          });
          map.addPattern(featureStyle.fillPattern);
        }
      });
    else if (style.fillPattern) {
      this.addPatternToLayer(style.fillPattern, this);
    }
  };
  addPatternToLayer = (pattern, layer) => {
    const {
      leaflet: { map },
    } = this.props;
    if (!map.hasPattern(pattern)) {
      map.once('patternadd', ({ pattern }) => {
        setTimeout(() => layer.setStyle({ fillPattern: pattern }), 0);
      });
      map.addPattern(pattern);
    } else {
      layer.setStyle({ fillPattern: pattern });
    }
  };
}
/** @component */
export default withLeaflet(GeoJSONFillable);
