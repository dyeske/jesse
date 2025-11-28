basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    for (let index = 0; index <= 255; index++) {
        basic.pause(10)
        led.setBrightness(index)
    }
    led.setBrightness(0)
})
