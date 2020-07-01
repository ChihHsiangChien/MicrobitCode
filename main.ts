bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
    connected = 1
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        if (parseFloat(uartData) == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
        }
        if (parseFloat(uartData) == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                `)
        }
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
let uartData = ""
let connected = 0
bluetooth.startUartService()
