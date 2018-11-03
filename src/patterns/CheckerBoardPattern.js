const L = window.L

/**
 * **key**: {string} - required.<br/>
 * **width**: {number} (default: 12) - The width of the square.<br/>
 * **height**: {number} (default: 12) - The height of the square.<br/>
 * **color**: {color} (default: #000000) - The color of the square.<br/>
 * **fillOpacity**: {number} (default: 1) - The opacity of the primary square.<br/>

 * @component
 */
export const CheckerBoardPattern = (options) => new L.CheckerBoardPattern(options)
