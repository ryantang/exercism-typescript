type ColorName = typeof COLORS[number];

export const colorCode = (color: ColorName) => {
  return COLORS.indexOf(color);
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
