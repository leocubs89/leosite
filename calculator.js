class Claculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {}

  appendNumber(number) {
    if (number === '." && this.currentOperand.includes('.')) {
      return
    }
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-allClear]')
const previousOperandTextElement = document.querySelector(
  '[data-previousOperand]'
)
const currentOperandTextElement = document.querySelector(
  '[data-currentOperand]'
)

const calculator = new Claculator(
  previousOperandTextElement,
  currentOperandTextElement
)

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
