input.onButtonPressed(Button.A, function () {
    radio.sendString("hi mom")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("i'm hungry can you make dinner")
})
radio.setGroup(10)
