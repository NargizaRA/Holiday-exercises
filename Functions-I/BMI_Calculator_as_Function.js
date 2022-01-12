function calculateBMI(weight, height) {
  const bmi = weight / (height ** 2)
  return bmi.toFixed(2)
}

function whoIsBiggest(name1, name2, bmi1, bmi2) {
  if(bmi1 > bmi2) {
    console.log(`${name1} is bigger`)
    return name1
  }
  console.log(`${name2} is bigger`)
  return name2
}

function whoIsBiggest1(name1, name2, weight1, weight2, height1, height2) {
  const bmi1 = calculateBMI(name1, weight1, height1)
  const bmi2 = calculateBMI(name2, weight2, height2)
  
  if(bmi1 > bmi2) {
    console.log(`${name1} is bigger`)
    return name1
  }
  console.log(`${name2} is bigger`)
  return name2
}
