# 1.Ternary Operator

* Rewrite this if using the conditional operator '?':
```js
    let result;
    let a=3;
    let b=6;
    if (a + b < 4) {
    result = 'Below';
    } else {
    result = 'Over';
    }

    console.log(result)
``` 
* Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).
```js
    let score = 42;
    let msg = "";

    if (score > 1337)
    {
        msg = "This is a new highscore!";
    }
    else
    {
        msg = "You need more points to beat the highscore!";
    }
    console.log(msg)
```

* Rewrite if..else using multiple ternary operators '?'.

    For readability, it’s recommended to split the code into multiple lines.
```js
    let message;
    let login="Employee"
    if (login == 'Employee') {
    message = 'Hello';
    } else if (login == 'Director') {
    message = 'Greetings';
    } else if (login == '') {
    message = 'No login';
    } else {
    message = '';
    }
    console.log(message)
``` 
# 2. While, do while

## 1. Run Along
Create a `while` loop that runs as long as the variable `i` is less than 15. Print `i`.

## 2. Add it up 
Create a function which sums up numbers from 1-20 using a `while` loop.

## 3. Do this while i...
Use a `do`, `while` loop to print `The number is [i]` while i is less than 20. 


# 3. Program-multiplechoice
### Switch if... 

#### 1. Color Analyzer
Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

#### 2. Grading
Create a switch statement that prints different comments depending on a grade.

#### 3. Fruits
Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

#### 4. Percentage Complete. 
* If percentageComplete is below 30, print "Still a long way to go". 
* If the percentageComplete is between 30 and 50, print "Slowly getting there". 
* If percentageComplete is between 51 and 80, print "You can do it!". 
* If percentageComplete is between 81 and 99, print "This is the last push!".
* If percentageComplete is 100, print "You're there. Well done!". 

#### 5. Differences
* When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.

loops-for

# 4.Loops-for

# Programming Basics: For Loops

These exercises are designed for practising "for" loops. Print all your results to the console.

1. **Addition.** 
Write a program to add up the numbers 1 to 20.

2. **There are i bottles of beer on the wall.** 
Write a program that will output, "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall" up until there are five bottles. 

3. **The odd/even reporter.**
Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

4. **Multiplication Tables.**
Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
**Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

5. **Fizz Buzz**
Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

6. **Sum of Multiples**
Write a program to add the multiples of 3 and 5 under 1000.

**Bonus** 

7. Write programs that produce the following outputs: 
>100 200 300 400 500 600 700 800 900 1000
>
>0 2 4 6 8 10
>
>3 6 9 12 15
>
>9 8 7 6 5 4 3 2 1 0
>
>1 1 1 2 2 2 3 3 3 4 4 4
>
>0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

8. **isPalindrome.**
Write a program to check whether a word is a palindrome or not. 
Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

