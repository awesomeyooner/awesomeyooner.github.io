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
        "header": "PSD-17 Devboard",
        "path": "assets/projects/personal/psd17-devboard",
        "github": "https://github.com/awesomeyooner/PSD-17DB",
        "date": "Sept 2026",
        "description": 
        `
            4-Layer PCB designed in KiCAD and assembled by JLCPCB. 
            
            This board's main focus is two DRV8874 DC motor drivers
            to control each phase of a NEMA17 Stepper Motor for Field Oriented Control.
            I've also added things such as 
            - Inrush current protection
            - Input voltage sensing
            - 4x WS2812B RGB LEDs
            - CAN2.0B Transceiver
            - SPI EEPROM
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
    },
    {
        "header": "AS5047P Devboard",
        "path": "assets/projects/personal/as5047-devboard",
        "github": "https://github.com/awesomeyooner/AS5047-Devboard",
        "date": "Feb 2026",
        "description": 
        `
            Basic development board that breaks out the SPI lines of an AS5047P magnetic encoder. This has the same outline as a NEMA17
            stepper motor. I designed this board to be used with a future project, PSD17, which aims to implement Field Oriented Control on NEMA17
            stepper motors. This is a very basic PCB, and was designed using KiCAD. They were manufactured by JLCPCB. 
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