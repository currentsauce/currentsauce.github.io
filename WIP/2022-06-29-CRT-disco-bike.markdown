---
layout: post
title:  "Canal & River Trust Disco Pride Bike"
date:   2022-06-29 21:00:00 +0100
categories: blog
hero_image: /blog_images/a_page_heros/discobike.jpg
hero_darken: true
image: /blog_images/a_page_heros/discobike.jpg

---

The Canal and River Trust participates in LGBTQ+ Pride Parades all over the country, and they wanted to up their game. They already had an Ice Cream Bike, which they used at various events, and they wanted to be able to  transform it into a Disco Bike for whenever they go to pride parades. The idea being that the freezer unit is swapped with an enclosure of the same size, which is a self contained, self powered Public Address (PA) system, capable of playing music loudly. I did this work for them voluntarily, and I'm really pleased with how it turned out. In this blog post, I will explain how it came to life!

![Original bike](/blog_images/discobike/originalbike.png "I don't have an photo of the bike with the freezer unit, but is was like this."){: style="max-width:500px;" }

## Requirements
Firstly and most importantly, The goals for this project are:
### Must Haves:
- Have speakers mounted within the enclosure, facing the outside
- Create sound from both left and right of the bike
- Be loud!
- ...And be decent sound quality
- Enclosure has artwork, so not interfere with the overall appearance of that
- Self powered from an internal battery
- ...which can power the unit for 2 hours
- All be self contained within the freezer-sized enclosure
- Be built within a budget of £500

### Nice to Have:
- Incorporate LED lighting for extra "wow"
- Built in battery charging capability
- Easy way of determining the battery level

## The Plan

The enclosure was made by the manufacturer of the bike, and has some nice Canal & River Trust branding with a snazzy LGBTQ+ flair! Externally, the dimensions are `H: 680mm, W: 540mm, L: 870mm`.

![Enclosure Dimensions](/blog_images/discobike/dimensions.png "Very basic sketch of the dimensions of the enclosure being worked on"){: style="max-width:500px;" }

The first thing to considder is how it is powered, as this will dictate a lot of the system. It needs to be operate for at aleast 2 hours, so this will require a hefty battery. I decided to use a deep-cycle leisure battery that is intended for use in motor-homes and caravans, due to it being able to sustain large loads over a prolonged period of time, and the battery chemistry generally being able to handle deep-discharges. In comparison, a standard car battery is not suitable here; they are designed to give a very short burst of current to the starter of a car, and then more or less immediately get recharged by the alternator - not long use, and not deep-discharges. In addition, leisure batteries come in much larger capacities than car batteries, at the expense of a larger size.

I settled on a `NUMAX DC25MF` 105Ah Sealed Leisure Battery. This is a NCC Class B battery, meaning that it can handle deep discharges well, since it is capable of at least 200 discharges to 50%. 

![Leisure Battery](/blog_images/discobike/battery.png "NUMAX DC25MF 105Ah Sealed Leisure Battery, and dimensions"){: style="max-width:500px;" }

Since we now know that we are dealing with a 12V system, next is to decide on the main audio components. The car audio market was the easy choice here, since:
- It is designed for 12V systems
- There is a vast selection of parts available
- Audio quality is key in this market
- Thanks to the target market, loudness is also catered for
- Panel mount, which is very install friendly

In car audio, you can either power the speakers using the built in amplifier of a head-unit, or, you can have separate amplifiers for loud systems - this is what I am going to use in this project, separate amplifiers. Since amplifiers are available in 4-channel types (front and rear), I decided to exploit this to be able to install 4 speakers into the system, to achieve the "loudness" requirement. 

### Simplistic overview of car audio speakers
At the basic end of the scale, you have just one speaker per channel, which is an all-range driver, i.e. doing the bass, mids and high frequencies. Typically, it excels in neither.
At the mid range, each channel will have two drivers - a speaker doing the bass and mid range frequencies, and a separate tweeter doing the high frequencies. Bookshelf speakers have a similar approach.
At the high end of the scale, you have the same components as the previous (mid), however, a high-pass filter is used to prevent the speaker from attempting to produce any low frequencies - which allows it to produce better sound without bass encumbering it. To reproduce the low frequencies (bass), a separately amplified bass sub-woofer is used. Usually, this is only one, since low frequencies are not directional and there generally isn't a concept of "stereo" with low frequencies.
...This list is not fully exhaustive by the way! But it is a good general overview of the most common implementations of car audio.

Since I want to accomplish the requirement of "decent sound quality" and "loudness", I decided to go the the "high end" approach, i.e. I want to have four amplified channels producing the mids & highs, and then one amplified channel for a subwoofer.

So to produce the mids and highs, a mid range speaker is coupled with a high-frequency tweeter speaker, and a suitable cross-over circuit is used to provide the tweeter with a high-pass filtered signal. These two speakers are separate, but thankfully in the car audio market, coaxial speakers exist - these are speakers with tweeters mounted in the middle, which makes installation easier. These seemed like the best choice for a clean installation.

When chosing the speakers, it was a difficult balance between finding speakers that are suitably sized for the loudness requirement, that could be installed in such a way that it did not interfere with the graphics on the enclosure. I made a 2D model of the enclosure faces in Microsoft Visio (don't judge, I have to use it aaaallll the time at work) to be able to play around with different speaker options. The design that I settled on is shown below:

![Visio Plan](/blog_images/discobike/VisioPlan.png "2D Plan of the Disco Bike Enclosure, to select the most appropriate speakers."){: style="max-width:500px;" }

The mid-high coaxial speakers used here are oval! The graphics on the enclosure had some empty space that I wanted to use, and these oval speakers utilised this space the best versus round speakers, since I did not want the speakers to interfere with the graphics on there. The speakers chosen here are In Phase XTC69.3 6x9" speakers, technically they're 3-way triaxial, as there are two different tweeters in there, nice! Each speaker has a peak power handling of 260W. Since these four speakers will have the low frequencies cut, they should be capable of being loud.

For the subwoofer, a JBL Stage 810 8" Subwoofer was chosen. This has a peak power handling of 800W at 4ohms, and a frequency response of 38Hz to 200Hz. Most importantly, JBL publishes the Thiele-Small Parameters for this speaker, which means that I am able to design the subwoofer enclosure properly using speaker modelling software.

To power the four triaxial speakers, a Juice JA1504 was chosen. This is a four channel amplifier with a peak power of 1500W, which is 375W per channel - this is higher than the peak power handling of the speakers, don't worry, I account for this later! This amplifier has a built-in high pass filter (HPF) for all four channels, which is important, since I want to cut lower frequencies that are handled by the subwoofer.

To power the subwoofer, a Juice JA902 was chosen. This is a two channel amplifier with a peak power of 900W. This amplifier is bridgeable, meaning I can have both channels drive the single subwoofer as one channel. This amplifier has a built-in low pass filter (LPF), meaning that I can cut all the high frequencies handled by the other speakers, i.e so it functions as a subwoofer.

![Parts](/blog_images/discobike/parts.jpg "Pile of parts, lets finish designing and start making this thing!"){: style="max-width:500px;" }

You may have spotted some extra items in that image, theres a controller for RGB LED strips there which has a sound-to-light mode. The plan is to put the RGB LED strips on the vertices of the enclosure. Theres also a suitable battery charger there too, which will be permanently fitted within the enclosure so that it is easy to recharge it.

Next thing is to get an idea of how the inside will be constructed. The bottom needs an enclosure for the subwoofer - the width is fixed by the enclosure, and the height will be fixed by the height of the triaxial speakers. There is a little bit of flexibility in the depth, however enough size needs to be reserved for the battery. As well as the subwoofer enclosure, the triaxial speakers also need an enclosure too - this is quite important, the enclosure that speakers are in make a tremendous difference to both the quality and loudness of a speaker. (In fact, it was interesting when looking at the reviews of these speakers - most of the reviews said that they were very good, especially for the price. Some reviews said that they were terrible - I can only imagine that it is the enclosure of the door that they are fitted to (for car use) that is letting them down). I used SketchUp to come up with a plan for the internals, which was being built with MDF sheets.

![SketchUp Plan](/blog_images/discobike/sketchup_plan.png "Using SketchUp to come up with a plan for the inside construction."){: style="max-width:500px;" }

With this design plan, I now needed to design the subwoofer enclosure. I used [WinISD by Linearteam](http://www.linearteam.org/), this was the first time using this, so was a learning experience for me. By entering the Thiele-Small Parameters that JBL published, I was able to model the subwoofer enclosure. I settled on making the enclosure 50m<sup>3</sup> with a tuning frequency of 35Hz. I found that having two bass ports gave the best performance, and WinISD informed me that their length should be 7.24cm long. Through this simulation, I noticed that the subwoofer was working particularly well below the tuning frequency of 35Hz. Conventionally, this would be a good thing, a subwoofer that can go really low is usually sought after. However, the end use of this is outdoors in an already loud environment, and so the low frequencies would be lost here, and would not add a huge amount of benefit. Most importantly, bass reproduction is quite power hungry, and I do not want to waste power where it can be avoided. For this reason, I decided to use a HPF to cut out frequencies below ≈33Hz - more on this later! 

With the HPF added into WinISD, this resulted in a working bandwidth of ≈31Hz to ≈59Hz for the subwoofer (-3dB Point).

![WinISD Transfer Function Magnitude](/blog_images/discobike/TransferMag.png "Transfer Function Magnitude from WinISD Lower -3dB point is ≈31Hz and upper -3dB point is ≈59Hz."){: style="max-width:500px;" }

Other key parameters that were considdered in this subwoofer design were Sound Pressure Level (SPL), Cone Excursion, Port Air Velocity and Port Gain.

SPL is a measure of loudness:
![WinISD SPL](/blog_images/discobike/SPL.png "The SPL had a peak at 35Hz (since that's the frequency it is tuned to), and then had a uniform SPL from ≈50Hz to ≈126Hz."){: style="max-width:500px;" }

Cone excursion is how much the speaker cone moves; too much excursion risks damaging the speaker. The detail in speaker design is getting the most out of the least amount of excursion. I sound like a speaker expert here, and i'm not! I'm just trying my best to make this subwoofer not suck.
![WinISD Cone Excursion](/blog_images/discobike/ConeExcursion.png "The maximum cone excursion is 9.75mm at 34.5Hz. This is above the limits of the speaker (red line). Therefore, the overall power delivered to the subwoofer speaker will need to be limited through gain limiting."){: style="max-width:500px;" }

Port Air Velocity shows how much air is being pushed and sucked out of the bass port. When this is too high, you get "Chuffing", which is undesirable noise caused by the sheer amount of air being moved. It is best to keep this below 18m/s. My simulations showed that this was exceeded at the tuning frequency of 35Hz at 35m/s, but rapidly reduced to below 18m/s by 36.8Hz. Since I couldn't improve this, I decided to hope for the best when I build it, and adjust the HPF if needed.  
![WinISD Air Velocity](/blog_images/discobike/AirVelocity.png "Quite an abrupt peak at the tuning frequency. I wasn't able to curtail this very much unfortunately. But it is a rapid drop after the tuning frequency."){: style="max-width:500px;" }

*...By the way, when I did this work, my Windows laptop was out of action (Dell can go to Hell). So I ended up using WinISD on my Mac using [CrossOver by Code Weavers](https://www.codeweavers.com/crossover). Worked really well!*

I adapted my SketchUp drawing to make the enclosure 50m<sup>3</sup>, and started building it. 

![Subwoofer Build photo 1](/blog_images/discobike/SubEnclosure1.jpg "Build has started! You might be thinking "woah, that's a lot of wood glue", and you're right! But, I do not want any air leaks in this subwoofer at all, since that would ruin its performance drastically. Note that the bass port wasn't created yet."){: style="max-width:500px;" }

![Subwoofer Build photo 2](/blog_images/discobike/SubEnclosure2.jpg "Subwoofer enclosure finished."){: style="max-width:500px;" }

I then created the enclosures for the triaxial speakers, and added the RGB LED strips to the edges. The LED strips were self adhesive (supposidly 3M adhesive, if that can be trusted), but I was taking no chances here, so I also used clear [Sticks Like Sh\*t Adhesive](https://trade.evo-stik.co.uk/products/sticks-sht-adhesive) *(at the time of writing, this is still called "Sticks Like Sh\*t, however when I see it in the stores, it has been renamed to simply "Sticks Like"...)*.

![Speakers and LEDs](/blog_images/discobike/SpeakersAndLEDs.jpg "Triaxial speakers fitted, and the LEDs being put on the edges. Can you tell that I built this in my Kitchen?"){: style="max-width:500px;" }

I deviated away from the original plan with the mounting of the amplifiers, and decided to stack them recessed a little bit into the gap between the triaxial speaker enclosures. I also made a place for the battery to sit so that is is not loose.

To drive the RGB LED strips, I just used some generic controller box that I got from AliExpress. It has built in patterns and two sound-to-light functions using a built in microphone. Importantly here, the controller has a potentiometer to adjust the sensitivity, which is important, since the sound that the microphone will pick up will no doubt be very loud inside the enclosure! 

![Speakers Interior](/blog_images/discobike/Inside1.jpg "Here you can see the cabinets for the triaxial speakers. Also, the Amplifiers are mounted too. Still at wire-spaghetti stage here..."){: style="max-width:500px;" }

![LEDs Fitted](/blog_images/discobike/LEDsFitted.jpg "RGB LED Strips mounted now. Excuse the pink gaffer tape while the Sticks Like Sh*t Dries!"){: style="max-width:500px;" }

I'm quite keen on keeping wiring neat and tidy, so at this point, decided to neaten up the wiring. Also, I removed the potentiometer from the LED Controller PCB and extended it on some wire so that the sensitivity can be adjusted easily - you'll see how later on...

![LEDs Fitted](/blog_images/discobike/Inside2.jpg "Wire-spaghetti becoming controlled now :)"){: style="max-width:500px;" }

With the majority of items now fitted, it is coming to the finishing touches-stage. As previously mentioned, I want the input signal to go through a HPF to remove the super low frequencies that are not neccesary. Cutting these very low frequencies would not be noticable, and would save on power, with bass being power hungry. Since I was pushed for time here, and did not want to reinvent the wheel, I looked to the interent for some inspiration. Thankfully, I came accross this [Infrasonic Filter by Elliott Sound Products](https://sound-au.com/project99.htm). The main project itself is for a -3dB point at 18Hz, however I wanted this to be about 35Hz. Thankfully, the -3dB frequency is adjusted by changing the value of capacitors C1 to C6, and the project page details the value of capacitor for different -3dB frequencies. So, using 82nF for C1 to C6 should give me a -3dB point of 33.2Hz, which is close enough.

I love using LTspice whenever I can, so I decided to simulate this Infrasonic Filter, using the 82nF capacitors. The project page lists some reccomended opamps, and so I had a look in my parts bins _(my partner calls it parts hoarding...)_ and I had some of the reccomended [Texas Instruments OPA2134](https://www.ti.com/product/OPA2134)! Nice! So I decided to simulate with this. Thankfully TI provide the SPICE library for this part, so it was not diffucult to import the SPICE model into LTspice.

![LTSpice Schematic](/blog_images/discobike/LTspiceSch.png "Simulation Schematic of the Infrasonic Filter. The ref. designators match the ESP project too."){: style="max-width:500px;" }

It seems that most of the time when I am using LTspice, I am running transient simulations (time-domain simulations), so this simulation was a great opportunity to use LTspice for AC analysis (frequency-domain simulations). I set the simulation up to analyse the attenuation of the output with respect to the input signal, over a frequency range of 0Hz to 1kHz. What I found, was that the -3dB point was ≈33.7Hz; not too far off the stated value of 33.2Hz! So this Infrasonic Filter should be the ideal HPF for my needs here. (I did also double-check that there was no attenuation above 1kHz too).

![LTSpice Simulation](/blog_images/discobike/LTspiceSch.png "AC Simulation of the Infrasonic Filter. -3dB cut-off frequency of ≈33.7Hz confirmed."){: style="max-width:500px;" }

Now I needed to turn this design into a reality. Usually for one-off boards like this, I turn to stripboard/veroboard, but I decided to be more professional and design a PCB for two reasons: 1. I wanted the traces to be as short and neat as possible, so that the real thing matches the simulation (I was concerned of stray capacitance / inductance from the stripboard having a negative effect), and 2. I wanted it to look professional! I designed the Schematic and Layout using KiCad.

![KiCad Schematic](/blog_images/discobike/kicad_sch.png "Schematic diagram of the Infrasonic Filter in KiCad."){: style="max-width:500px;" }

Since I was pushed for time at this point (I was in the middle of moving house while doign this - this bike enclosure box was literally the last thing left in the house!), I did not have time to wait for PCBs to be manufactured, so I decided to go old-school and etch the PCB myself, since I already had the tools and equipment - this means that I had to design it as a 1-layer board. I managed to do the layout with only 3 jumpers needed, which I was really pleased about.

![KiCad Layout](/blog_images/discobike/kicad_pcb.png "PCB Design in KiCad. The red top-layer traces will be jumpers."){: style="max-width:500px;" }