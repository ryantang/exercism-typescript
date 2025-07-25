export function decodedResistorValue(colors: string[]): string {
  const [first, second, third] = colors;
  const baseValue = `${colorCode(first)}${colorCode(second)}`
  const multiplier = 10 ** colorCode(third);
  let value = parseInt(baseValue) * multiplier;
  let unit = 'ohms';

  if (value === 0) {
    //keep ohms as the unit
  } else if (value % 1_000_000_000 === 0) {
    value = value / 1_000_000_000;
    unit = `gigaohms`;
  } else if (value % 1_000_000 === 0) {
    value = value / 1_000_000;
    unit = `megaohms`;
  } else if (value % 1_000 === 0) {
    value = value / 1_000;
    unit = `kiloohms`;
  }

  return `${value} ${unit}`;
}

type ColorName = typeof COLORS[number];

const colorCode = (color: ColorName) => {
  return COLORS.indexOf(color);
}

const COLORS = [
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