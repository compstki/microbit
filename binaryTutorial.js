let challenge = 0
let userNumber = 0
let randomValue = 0
let rowBit = 0
let columnBit = 0
function makeBinValue2() {
    columnBit = 0
    rowBit = 4
    randomValue = Math.randomRange(0, 15)
    challenge = randomValue
    basic.pause(100)
    basic.clearScreen()
    for (let index3 = 0; index3 <= 3; index3++) {
        if (randomValue >= 2 ** (3 - index3)) {
            led.plot(index3 + 1, 0)
            randomValue = randomValue - 2 ** (3 - index3)
        } else {
            led.unplot(index3 + 1, 0)
        }
    }
}
input.onGesture(Gesture.Shake, function () {
    makeBinValue2()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.setBrightness(255)
    basic.showNumber(userNumber)
    if (userNumber == challenge) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        basic.showNumber(challenge)
    }
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    led.plot(columnBit, rowBit)
    if (columnBit == 4) {
        columnBit = 0
        rowBit = rowBit - 1
    } else {
        columnBit = columnBit + 1
    }
    userNumber = userNumber + 1
})
makeBinValue2()
