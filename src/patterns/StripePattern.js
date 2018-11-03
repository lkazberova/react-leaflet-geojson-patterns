const L = window.L;

/**
 * **key**: {string} - required.<br/>
 * **weight**: {number} (default: 4) - The width of the primary stripe.<br/>
 * **spaceWeight**: {number} (default: 4) - The width of the secondaty stripe, typically an empty space.<br/>
 * **color**: {color} (default: #000000) - The color of the primary stripe.<br/>
 * **spaceColor**: {color} (default: #ffffff) - The color of the secondary stripe.<br/>
 * **opacity**: {0.0 - 1.0} (default: 1.0) - The opacity of the primary stripe.<br/>
 * **spaceOpacity**: {0.0 - 1.0} (default: 0.0) - The opacity of the secondary stripe.<br/>
 *
 * @see See [API](https://github.com/teastman/Leaflet.pattern#stripes) for a list of properties
 * @component
 */
export const StripePattern = options => new L.StripePattern(options);
