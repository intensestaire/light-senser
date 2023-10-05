basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("Hello")
        basic.showString("there")
        basic.showString("it")
        basic.showString("really")
        basic.showString("surely")
        basic.showString("seems")
        basic.showString("it")
        basic.showString("is")
        basic.showString("at")
        basic.showString("least")
        basic.showString("somewhat")
        basic.showString("bright")
        basic.showString("out")
        basic.showString("during")
        basic.showString("this")
        basic.showString("dandy")
        basic.showString("day")
        basic.showString("or")
        basic.showString("night!")
    } else if (input.lightLevel() == 128) {
        basic.showString("SECRET")
    } else {
        images.createBigImage(`
            # . . . # # . . . #
            . # . # . . # . # .
            . . # . . . . # . .
            . # . # . . # . # .
            # . . . # # . . . #
            `).scrollImage(1, 200)
    }
})
