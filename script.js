class Calculator {
  $previousPreview
  $currentPreview

  // 생성자 함수 : 클래스가 생성될 때 실행되는 자동 실행 함수
  constructor($previousPreview, $currentPreview) {
    this.$previousPreview = $previousPreview
    this.$currentPreview = $currentPreview
  }

  onPressNumber(number) {
    // 벨리데이션: 데이터를 검진. 불필요한 것 막아주기
    // 소수점 입력시 현재 입력 받은 데이터가 없는 경우
    console.log(number)
    if(number === "." && this.$currentPreview.textContent.length < 1) {
      return
    }
    this.$currentPreview.textContent += number
  }

  onPressOperation(operation) {
    // 연산기호 입력시 현재 입력 받은 데이터가 없는 경우
    if(this.$currentPreview.textContent.length < 1) {
      return
    }

    this.$previousPreview.textContent = `${this.$currentPreview.textContent} ${operation}`
    this.$currentPreview.textContent = ''
  }
}

// 값 표시
const $previousPreview = document.querySelector('[data-previous-preview]')
const $currentPreview = document.querySelector('[data-current-preview]')

// 사칙 연산
const $plus = document.querySelector('[data-btn-plus]')
const $minus = document.querySelector('[data-btn-minus]')
const $multiply = document.querySelector('[data-btn-multiply]')
const $divide = document.querySelector('[data-btn-divide]')
const $equal = document.querySelector('[data-btn-equal]')

// 숫자, 연산
const $numbers = document.querySelectorAll('[data-btn-number]')
const $operations = document.querySelectorAll('[data-btn-operation]')

const cal = new Calculator($previousPreview, $currentPreview)

$numbers.forEach(($number) => {
  $number.addEventListener("click", (e) => {
    cal.onPressNumber(e.target.textContent)
  })
})

$operations.forEach(($operation) => {
  $operation.addEventListener("click", (e) => {
    switch ($operation) {
      case $plus:
        cal.onPressOperation("+")
        break;
      case $minus:
        cal.onPressOperation("-")
        break;
      case $multiply:
        cal.onPressOperation("*")
        break;
      case $divide:
        cal.onPressOperation("÷")
        break;
      case $equal:
        // cal.onPressOperation("=")
        break;
      default:
        break;
    }
  })
})
