import { BasePattern } from './BasePattern';

const L = window.L;

/**
 * **key**: {string} - required.<br/>
 * **x**: {number} (default: 0) - x offset of the rectangle.<br/>
 * **y**: {number} (default: 0) - y offset of the rectangle.<br/>
 * **width**: {number} (default: 10) - width of the rectangle.<br/>
 * **height**: {number} (default: 10) - height of the rectangle.<br/>
 * **rx**: {number} (default: null) - x radius for rounded corners.<br/>
 * **ry**: {number} (default: null) - y radius for rounded corners.<br/>

 * @see See [API](https://github.com/teastman/Leaflet.pattern#rectangle) for a list of properties
 * @component
 */
export const RectPattern = options => BasePattern(options, L.PatternRect);
