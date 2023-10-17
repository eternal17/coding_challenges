/*Given a number as an input, print out every integer from 1 to that number.
However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5,
print out “Buzz”;
when it’s divisible by both 3 and 5, print out “Fizz Buzz”.*/

package main

import "fmt"

func fizzBuzzVariation(n int) {
	for i := 1; i <= n; i++ {
		if i%5 == 0 && i%3 == 0 {
			fmt.Println("Fizz Buzz")
		} else if i%5 == 0 {
			fmt.Println("Buzz")
		} else if i%3 == 0 {
			fmt.Println("Fizz")
		} else {
			fmt.Println(i)
		}
	}
}

func main() {
	fizzBuzzVariation(15)
}
