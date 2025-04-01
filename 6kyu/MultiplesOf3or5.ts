// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

export class Challenge {
  static solution(number: number) {
    return number < 0
      ? 0
      : Array.from({ length: number }, (_, i) => i).reduce(
          (sum, current) =>
            current % 3 === 0 || current % 5 === 0 ? sum + current : sum,
          0,
        )
  }
}

console.log(Challenge.solution(10))

// describe("solution", function(){
//   it("should handle basic tests", function() {
//     test(10, 23);
//   });
// });
