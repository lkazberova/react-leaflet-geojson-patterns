import { BasePattern } from './BasePattern'

const L = window.L

/**
 * **key**: {string} - required.<br/>
 * **x**: {number} (default: 0) - x offset of the circle.<br/>
 * **y**: {number} (default: 0) - y offset of the circle.<br/>
 * **radius**: {number} (default: 0) - radius of the circle.<br/>

 * @see See [API](https://github.com/teastman/Leaflet.pattern#circle) for a list of properties
 * @component
 */
export const CirclePattern = options => BasePattern(options, L.PatternCircle);
