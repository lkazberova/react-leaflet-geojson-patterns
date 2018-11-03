const L = window.L
export const BasePattern = (options, Shape) => {
  const shape = new Shape(options)
  const pattern = new L.Pattern(options)
  pattern.addShape(shape)
  return pattern
}
