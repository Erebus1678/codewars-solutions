// In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade).

// You will be given a list of climbing grades and you have to write a function to return a list of the grades sorted easiest to hardest.

// If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

function sortGrades(arr: string[]): string[] {
  return [...arr].sort((a, b) => {
    const getKey = (grade: string): [number, number] => {
      if (grade === 'VB') return [-1, 0]
      const rest = grade.slice(1)
      const hasPlus = rest.endsWith('+')
      const num = parseInt(hasPlus ? rest.slice(0, -1) : rest, 10)
      return [num, hasPlus ? 1 : 0]
    }

    const [aNum, aPlus] = getKey(a)
    const [bNum, bPlus] = getKey(b)
    return aNum !== bNum ? aNum - bNum : aPlus - bPlus
  })
}

console.log(sortGrades(['V0+', 'V0', 'V16', 'V2', 'VB', 'V6']))

//Top one
// const grades = ["VB", "V0", "V0+", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17"];

// function sortGrades(lst){
//   return lst.sort((a, b) => grades.indexOf(a) - grades.indexOf(b));
// }
