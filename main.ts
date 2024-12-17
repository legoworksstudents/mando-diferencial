joystickbit.initJoystickBit()
radio.setGroup(4)
basic.showNumber(4)
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendNumber(3)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(5)
    }
})
