// Define a function that takes in a positive integer x, where 0 > x > 3000, and returns the Roman Numeral representation of that number. 

const romanNumeralize = (num) => {
  let n = num
  let result = ""
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

  for( let i = 0; i <= decimal.length; i++ ){
    while( n >= decimal[i] ) {
      result += symbol[i]
      n -= decimal[i]
      console.log(n)
    }
  }
  return result
}

console.log(romanNumeralize(1990))
