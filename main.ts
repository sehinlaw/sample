basic.forever(function () {
    basic.showString("" + (input.lightLevel()))
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
