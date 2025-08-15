---
layout: post
title:  "'Hacking' an original Bose Sounddock"
date:   2021-01-20 21:00:00 +0100
categories: blog
hero_image: /blog_images/a_page_heros/bose.jpg
hero_darken: true
image: /blog_images/a_page_heros/bose.jpg

---
I somehow ended up with this original Bose Sounddock. Its only means of audio input is via a 30-pin iPod dock connector. Notwithstanding that this connector is now _really_ obsolete, the 30-pin dock connector had come off. From my trawling of the internet, this is a fairly common problem.

Now, it was fairly lucky that when this connector came off, it didn't rip off the copper footprint on the PCB. So I was able to use my Hakko FX-951 iron and re-solder it back on (thanks, Flux!). I dug out my old *(pink)* iPod nano, and sure enough, the sounddock works again!
![Original dock board with 30-pin connector and volume controls](/blog_images/bose/DockBoard.jpg "This is the original dock board. It has the 30-pin dock on it, as well as the volume controls. I am getting rid of this."){: style="max-width:300px;" }

But that's boring...
--------------------
Turns out it's quite a decent little speaker! People love to give hate to Bose - Sometimes it's warranted, sometimes people are just idiots. In this instance, The speaker isn't bad, and it didn't cost me anything! I want to do away with the dock connector, and be able to use it with anything - which means I want a 3.5mm Jack socket for the audio input. You can buy adapters, but that's ugly and lazy.

The sounddock only turns on when an iPod is docked (and conversely, off when there is no iPod). This adds a bit of challenge to the hack, but not too much. Thankfully by now, the pin-out of the 30-pin dock is known. The dock board that I repaired also has the volume buttons. This is connected via a ribbon cable to the DSP mainboard. After removing the EMC Shielding Can (couldn't help myself, don't judge me!), we can see that this thing is not just a basic speaker. 
![Bose mainboard — bottom side (DSP)](/blog_images/bose/MainboardDSP.jpg "This is the 'Bottom' side of the mainboard. That's the DSP. The IOR SOIC is a MOSFET."){: style="max-width:300px;" }

The main board is not the amplifier though, by the way. It has a [Freescale (well, NXP now) SCF5249LAG120](https://www.nxp.com/docs/en/data-sheet/SCF5249EC.pdf) on it, which is a ColdFire Digital Signal Processor (DSP) Microprocessor. So this IC is what Bose are using to provide the DSP (e.g. Equalisation, Compression etc.) for this speaker. 

An [AKM 5381](https://hirokun.jp/AKM5381.pdf) 24-bit Stereo Analog to Digital Converter (ADC) is used to capture the iPod audio for the DSP, and an [AKM4384](https://pdf.datasheet.live/18f5688f/akm.com/AK4384.pdf) 24-bit Digital to Analogue Converter (DAC) is used to convert the DSP's output to stereo outputs for the Amplifier board. There's also a [Spansion (again, was bought by Cypress, and then Cypress bought by Infineon) S29AL008J](https://www.infineon.com/row/public/documents/10/49/infineon-s29al008j-8-mbit-1m-x-8-bit-512k-x-16-bit-3-v-boot-sector-flash-datasheet-en.pdf) 8Mbit Boot Flash, which is what the DSP will boot from.

This DSP will also be doing some system housekeeping functions as well. For example, this item originally came with an IR remote control, which had volume controls, next track, previous track and play/pause buttons - the IR receiver connects to the DSP board via the Amp board. The DSP will handle the receiving of the IR commands, and will also convert any track control inputs into signals to the iPod.

![Bose mainboard — top side](/blog_images/bose/Mainboard.jpg "This is the 'Top' side of the mainboard. Top Left: Ribbon to Amp Board, Top Right: Ribbon from Dock Board. Within the EMC can is the Spansion Flash. Bottom: Power input — looks like a 4-pin Molex Mini Fit Jr."){: style="max-width:300px;" }

With a bit of patience, I was able to reverse-engineer the schematic on the dock board. This meant, that armed with the pin-out of the 30-pin connector, I could work out what the signals on the ribbon cable were, and, the schematic of the volume buttons. It was only *after* this that I discovered a [very useful Bose Service Manual](https://elektrotanya.com/bose_sounddock.pdf/download.html) that covers upgrading from FireWire charging to USB charging. It has a very useful schematic diagram in there of the dock board - Gah! Never mind, it allowed me to double-check that I was right at least! With this, I wanted to now make sure I could run this thing with 3.5mm jack source and control the volume, without the dock board. I decided to salvage ribbon connector off the dock board, and make a breakout for it.

![Breakout board prototype](/blog_images/bose/BreakoutBoard.jpg "With this, I can figure out what I need to do."){: style="max-width:300px;" }

<> Write about signals and stuff <>

I managed to find some nice points to tap into for the Left, Right, GND, Volume Down, and Volume Up

![Audio and volume tap-in](/blog_images/bose/AudioTapIn.jpg "Here is where the Audio Input is tapped into the iPod input signals."){: style="max-width:300px;" }

![Audio and volume tap-in](/blog_images/bose/VolumeTapIn.jpg "Here is where the Volume signals are tapped in."){: style="max-width:300px;" }





