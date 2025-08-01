const SECONDS_IN_YEAR = 365.25 * 24 * 60 * 60
type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune'
const RATIOS: ReadonlyMap<Planet, number> = new Map([
  ['mercury', 0.2408467],
  ['venus',	0.61519726],
  ['earth',	1.0],
  ['mars',	1.8808158],
  ['jupiter',	11.862615],
  ['saturn',	29.447498],
  ['uranus',	84.016846],
  ['neptune',	164.79132],
])

export function age(planet: Planet, seconds: number): number {
  const planetYears = (seconds / SECONDS_IN_YEAR) / RATIOS.get(planet)!;
  return round(planetYears, 2);
}

function round(num: number, decimalPlaces: number): number {
  const factor = 10 ** decimalPlaces;
  return Math.round(num * factor) / factor;
}