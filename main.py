radio.set_group(2)

def on_forever():
    if joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        radio.send_number(0)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        radio.send_number(1)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        radio.send_number(2)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        radio.send_number(3)
    else:
        radio.send_number(4)
basic.forever(on_forever)
