import { BasePattern } from './BasePattern';

const L = window.L;

/**
 * **key** {string} - required.<br/>
 * **d** {path} (default: null) - The SVG path definition.
 * @see See [API](https://github.com/teastman/Leaflet.pattern#path) for a list of properties
 * @component
 */
export const PathPattern = options => BasePattern(options, L.PatternPath);
