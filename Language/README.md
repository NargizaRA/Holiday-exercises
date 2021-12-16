# 1. Language-boolean

### True or False? 

#### 1. What type? 
* Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
**Questions: Comment your answers in the js file.** 
* Is there a difference? Why/why not? 
* Which comparison operator should we generally use? Why?
* What would happen if we were to use `=`?

#### 2. Not
* Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.

#### 3. Short Circuit
Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

```javascript
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
```

# 2. Language-number

### Strings and Numbers

#### 1. Concatenation. 
* Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
```javascript
let introSentence = "hello, my name is Fran and I am";
let age = 25;
```

**Expected Output**: 
```javascript
"hello, my name is Fran and I am 25"
```
* In this case, what is the `+` operator doing? Comment your answer in the js file.

#### 2. Converting 
* Create a variable with the value of "1005". Convert it to a number.
* Create a variable with the value of "10.05". Convert it to a number. 


# 3. Language-math

### Math

**Perform Mathematical Tasks with JavaScript. Remember: you must use the `Math` functions and print all results to the console!**

### 1. Minimum and maximum

### a. Lowest Number

Print out the lowest number between -1 and 4.

### b. Highest Number

Print out the highest number between -1 and 4.

### 2. Rounding

### a. Round up

Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.

### b. Round down

Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

### 3. Dice Roll!

Print a random integer between 1 and 6.

# 4. Operators-arithmetic

### Programming Basics: Arithmetic Operators
 
These tasks are aimed at making you more comfortable with solving math problems using JS. **Print each of your results to the console.**

**Basic Arithmetic Problems**

Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold? 

Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?

**Percentage**

Q3. Calculate the percentage of 17/30. Expected output: number%

**Geometry Formulas** 

Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.

Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

Q6. Calculate the area of a square. Each side is 5cm.

Q7. Calculate the area of an [right-angled triangle](https://en.wikipedia.org/wiki/Right_triangle). Assume the length of the sides are 3cm, 4cm, 5cm.

Q8. Calculate the volume of a cube. Length of each side is 9cm.

**Consumer Formula**

Q9. Calculate the three bills including tips:
€22.35 + 10% tip
€26.67 + 15% tip
€35.92 + 20% tip

**Average** 

Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
What is Noemy's average hours worked per day?

Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
Expected output: Score in the sixth test: --.

Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
Expected output: James needs a minimum of --% to get an 80% average.

# 5. Operators-comparison

### Programming Basics: Comparison Operators

These exercises are aimed at making you familiar with the comparison operators. **Print all your checks to the console.**

0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.

1. Check whether apples and oranges are equal.

2. Check whether apples and oranges are *not* equal.

3. Check whether apples is greater than oranges.

4. Check whether apples is less than or equal to oranges.

5. Check whether oranges is greater than apples.

6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.

7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.

8. Check whether mangoes, apples and oranges are equal.

9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.

10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.

11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.