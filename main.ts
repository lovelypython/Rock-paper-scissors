radio.onReceivedNumber(function (receivedNumber) {
    对方数据 = receivedNumber
})
function 三秒倒计时 () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
}
// 石头
input.onButtonPressed(Button.A, function () {
    自己数据 = 1
    radio.sendNumber(1)
})
// 布
input.onButtonPressed(Button.AB, function () {
    自己数据 = 3
    radio.sendNumber(3)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "ANewMicrobit") {
        三秒倒计时()
        radio.sendString("start")
    }
    if (receivedString == "start") {
        if (对方数据 != 0) {
            if (自己数据 != 0) {
                if (自己数据 == 1) {
                    if (对方数据 == 3) {
                    	
                    } else if (false) {
                    	
                    } else {
                    	
                    }
                } else if (自己数据 == 2) {
                	
                } else {
                	
                }
            } else {
            	
            }
        } else {
        	
        }
    }
})
// 剪刀
input.onButtonPressed(Button.B, function () {
    自己数据 = 2
    radio.sendNumber(2)
})
let 自己数据 = 0
let 对方数据 = 0
radio.setGroup(145)
radio.sendString("ANewMicrobit")
