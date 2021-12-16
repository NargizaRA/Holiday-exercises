# BMI Calculator as Function
Let's revisit our BMI Calculator exercise and change the code so it uses functions.

- Navigate your way back to your BMI Calculator GitHub exercise repo
- Create a **new branch** for this new version of the code so the original one stays untouched and work in the new branch
- Instead of having global variables and doing the calculations in the global scope, create two functions:
  1. **calculateBMI** takes three arguments: a `name` string, a `weight` number and a `height` number. It returns a string with the name and BMI number
  2. **whoIsBiggest** takes four arguments: two `name` strings and two `bmi` numbers. It returns the name string of the bigger person

**Bonus**
- Rewrite the **whoIsBiggest** function to take six arguments: `Person 1 name`, `Person 2 name`, `Person 1 weight`, `Person 2 weight`, `Person 1 height`, `Person 2 height`
- The **whoIsBiggest** function should use the **calculateBMI** function to calculate the BMI for both people, before comparing them and returning the name of the person with the bigger BMI (that means that in the global scope only the **whoIsBiggest** function is called)
