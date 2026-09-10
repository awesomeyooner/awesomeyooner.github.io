const jsonData = 
[
    {
        "header": "Tiny Thinker",
        "path": "assets/projects/personal/tinythinker",
        "github": "https://github.com/awesomeyooner/Tiny-Thinker",
        "date": "Feb 2026",
        "description": 
        `
            4-Layer PCB designed in KiCAD and assembled by JLCPCB. 
            This board is focused around the STM32F446RCT6, 
                with an onboard 5V regulator, 
                Power Multiplexer for handling multiple power inputs, 
                USB C, 
                Power LED indicator, 
                and 2 2x20 Headers for breaking out the pins.
        `,
    },
    {
        "header": "Polar One",
        "path": "assets/projects/personal/polar-one",
        "github": "https://github.com/awesomeyooner/Polar-One",
        "date": "June 2026",
        "description": 
        `
            ROS 2 controlled RC car using a Jetson Nano with Docker communicating with a Tiny
            Thinker over USB for low level control. Joystick control is with a Nintendo Switch also
            running Docker.
        `,
    },
    {
        "header": "Tiny Spectrum",
        "path": "assets/projects/personal/tiny-spectrum",
        "github": "https://github.com/awesomeyooner/Tiny-Spectrum",
        "date": "August 2026",
        "description": 
        `
            Small little lamp that uses an 8x8 grid of WS2812B addressable LEDs. This uses a Tiny Thinker
            STM32 board for the logic and USB-C PD (12V) power input. It features a slide potentiometer for
            adjusting the brightness, with a joystick and LCD for changing LED states, like rainbow or white.
            I implemented HSV to RGB colorspace transforms for cycling colors of the rainbow. It also has a missile-style
            power switch, which I personally love because it's so satisfying.
        `,
    }
]

/*

{
    "header": "My Project",
    "path": "assets/projects/my-project",
    "github": "https://github.com",
    "date": "Month 2026",
    "description": 
    `
        Blah blah blah
    `,
},

*/