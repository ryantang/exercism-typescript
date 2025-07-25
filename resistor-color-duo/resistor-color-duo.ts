type ColorName = typeof COLORS[number];

export function decodedValue(colors: ColorName[]) {
  const [firstColor, secondColor] = colors; //Ignore all but the first two colors
  const resistorValue = `${colorCode(firstColor)}${colorCode(secondColor)}}`

  return parseInt(resistorValue)
}

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