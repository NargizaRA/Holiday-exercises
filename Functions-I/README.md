# 1.Function Scope

#### 1. Print Exponential Values
* Write a function that accepts two numbers and validate that they are numbers. 

After that, the function should print _y_ exponential values starting from _x_.

* For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
* function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.

#### 2. Fruits
* Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 

#### 3. Multiply a Number by Itself
* Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
* Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

# 2.Function Return

* 1.The following function returns true if the parameter age is greater than 18.

    Otherwise returns false:

* 2.Write a function min(a,b) which returns the least of two numbers a and b.

    For instance:
    ```js
        min(2, 5) == 2
        min(3, -1) == -1
        min(1, 1) == 1
    ``` 
* 3.Write a function pow(x,n) that returns x in power n. Or, in other words,        multiplies x by itself n times and returns the result.
    ```js
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
    ``` 

# 3. BMI Calculator as Function
Let's revisit our BMI Calculator exercise and change the code so it uses functions.

- Navigate your way back to your BMI Calculator GitHub exercise repo
- Create a **new branch** for this new version of the code so the original one stays untouched and work in the new branch
- Instead of having global variables and doing the calculations in the global scope, create two functions:
  1. **calculateBMI** takes three arguments: a `name` string, a `weight` number and a `height` number. It returns a string with the name and BMI number
  2. **whoIsBiggest** takes four arguments: two `name` strings and two `bmi` numbers. It returns the name string of the bigger person

**Bonus**
- Rewrite the **whoIsBiggest** function to take six arguments: `Person 1 name`, `Person 2 name`, `Person 1 weight`, `Person 2 weight`, `Person 1 height`, `Person 2 height`
- The **whoIsBiggest** function should use the **calculateBMI** function to calculate the BMI for both people, before comparing them and returning the name of the person with the bigger BMI (that means that in the global scope only the **whoIsBiggest** function is called)