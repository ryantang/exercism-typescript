const mapping = new Map<string, string>([
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U']
])

export function toRna(dna: string): string {

  const rnaArr = [];

  for (const nucleotide of dna) {
    if(!mapping.has(nucleotide)) { throw new Error("Invalid input DNA.")}
    rnaArr.push(mapping.get(nucleotide));
  }

  return rnaArr.join("");
}
