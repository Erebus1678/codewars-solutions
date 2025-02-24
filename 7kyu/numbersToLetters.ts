function switcher(x: number[]): string {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'].reverse()

  const symb = ['!', '?', ' ']
  const collection = [...alphabet, ...symb]

  return x.map((numb) => collection[numb - 1]).join('')
}
