const beforeCalculator = `public class Calculator {
  public float add(float a, float b) {
    return a + b;
  }

  // duplicate with add method
  public float total(float a, float b) {
    return a + b;
  }

  public float subtract(float a, float b) {
    return a - b;
  } 

  public float multiply(float a, float b) {
    return a * b;
  }

  public float divide(float a, float b) {
    if (b == 0) throw new IllegalArgumentException("Cannot be divided by zero number")
    return a / b;
  }
}`

const afterCalculator = `public class Calculator {
  public float add(float a, float b) {
    return a + b;
  }

  public float subtract(float a, float b) {
    return a - b;
  } 

  public float multiply(float a, float b) {
    return a * b;
  }

  public float divide(float a, float b) {
    if (b == 0) throw new IllegalArgumentException("Cannot be divided by zero number")
    return a / b;
  }
}`

const duplicateCodeBefore = [
  {
    id: 1,
    class: 'Calculaotr',
    code: beforeCalculator
  },
]

const duplicateCodeAfter = [
  {
    id: 1,
    class: 'Calculator',
    code: afterCalculator
  },
]

export { duplicateCodeBefore, duplicateCodeAfter }