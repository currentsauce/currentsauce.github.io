---
layout: post
title:  "OutdoorLads LED Matrix for DJ Booth"
date:   2025-09-23 21:00:00 +0100
categories: blog
hero_image: /blog_images/a_page_heros/discobike.jpg
hero_darken: true
image: /blog_images/a_page_heros/discobike.jpg

---

## Background

[OutdoorLads](www.outdoorlads.com) are a UK group for gay and bisexual men to #getoutmore in the great outdoors, which I'm a member of. We regularly have "BIG Events", where we have an evening disco - usually themed! OutdoorLads has its own equipment for this, but it was over 10 years old and was due for a refresh. Since I seem to have inadvertently become known for knowing lots about tech, I was asked to take the lead on this. The whole refresh is a whole other story, so in a nutshell - with a very thorough spreadsheet we ended up with an absolutely awesome setup that is louder and better sounding than the old system, and much lighter too! And most importantly, within budget.

Part of this new setup was a new DJ Booth, which is a truss system - It's very light weight and is really easy to set up, but it looks so boring! I wasn't happy with this, and with my love for LEDs and visuals, I knew exactly what I wanted to to.

## The Idea

The front of the DJ booth, in my mind, was SCREAMING for a LED Matrix facade to make it really pop. As expected, there were no accessories for the DJ Booth, and if you want one of these, they're usually made bespoke, and are quite expensive!

So this is where James makes one bespoke, and lucky for OutdoorLads, the parts aren't expensive and my labour of love is free. 

Since all the equipment is moved around from venue to venue, the LED Matrix also needs to be transportable - this means not occupying a great deal of space, and be rugged. The design direction I went down, was to have a foldable LED Matrix, that folds in half a bit like a laptop. When open, it fills the entire front of the DJ booth, and when closed, the LEDs are protected inside, and some claps keep it shut.

## Requirements

Before detailing the design and build, the following requirements are what I had identified for this project:

1. Must fill the whole front of the DJ Booth, and be able to be securely attached
2. Must be able to fold up to aid in transportation and storage
3. Must be rugged to withstand transportation and drunk people
4. Must be easy to setup by non tech-savvy people
5. Must have a decent pixel density (bit of a wishy-washy requirement)
6. Must have a selection of kick-ass visualisation effects
7. LEDs must be RGB, and be as big as possible
8. LEDs must be able to be driven rapidly to sustain a video-quality refresh rate
9. Total cost of parts must be below £300

I've already used addressable LEDs before in the past - they're awesome! So using them for this project was a decision I had already made. There's various different types available - I wasn't going to bog myself down with one particular type, instead, I decided to look at what different addressable LED packages are available, i.e. the physical LEDs. I'd then chose the addressable LED type based on what is available in the package I want.

## Designing Foldable Frame and LEDs

First thing is to get an idea of how this LED Matrix will be constructed. It needs to open out to fill the entire front, and have the LEDs mounted in such a way that they are sturdy and look good from the front, and hide away/protect the wiring and electronics of the LEDs. The Truss DJ Booth that this is being designed for is shown below:

![Truss DJ Booth](/blog_images/odl_led_matrix/DJ_Truss_Booth.png "This is the DJ Booth that is being worked with. It's so boring isn't it!! The dimensions we are concerned with here are the dimensions of the front part of the truss, which is W: 1210mm H: 1150mm - shown by the dotted line. The dimensions of the sides are irrelevant."){: style="max-width:500px;" }

As with most designs that are physical, I did some simple 2D modelling using Microsoft Visio (I always feel some shame in using Visio! I use it all the time at work and I can use it really well). I did this so that I can get a visual indication of what the LED matrix will look like. As mentioned, I want the pixels (I'm going to refer to the LEDs as Pixels in when in the context of the Matrix) to be spaced such that pixel density doesn’t look too "empty", so that the effects look good. Another key aspect here, is that the physical build will have a structural frame, and due to the matrix being foldable, there will be frame in the middle, two frames in fact - one from each side. I don't want the frame to add any extra spacing between the pixels on both sides, I want the pixel spacing to be uniform across the whole matrix. So, the 2D models allows me to identify the spacing between the frame join, which governs the minimum spacing.

(By the way, all measurements are metric. mm unless otherwise stated).         

### Design A

The first design is based around addressable LEDs that are in a string - a bit like Christmas lights. They are 5mm RGB LEDs soldered to a PCB that has the addressable controller, epoxy encapsulated in a mount (I use the word mount loosely, it's a friction fit mount). These were my first design since I've used these type of addressable LEDs before in a project that I did to make some Pac-Man prop boards.

![Design A LEDs](/blog_images/odl_led_matrix/Design_A_LEDs.png "These are the addressable LED strings used for Design A. They're most common with the WS2811 protocol chipset, however I think other types are available. Not particularly bothered about this at this point though... "){: style="max-width:500px;" }

The good thing about these, is that I can space the pixels however I please, to both get the right pixel density, and also fit within the panel size evenly. The down side with , is that they are very deep, so the panels needs to be able to accommodate their depth. 

For this design, in order to be able to accommodate the depth of the LEDs, I chose to use 75mm by 32mm timber. I already was not happy with this design - the folded thickness is 150mm - that's 15cm! That's too big, clumsy, and heavy. Also, the frame causes a gap of 64mm between the two panels, and the best spreading I could design here was a inter-pixel distance of 58.9mm. This means that there will be a slightly bigger gap  between the LEDs at middle, which will be obvious. Not happy with this.

![Design A](/blog_images/odl_led_matrix/Design_A.png "This is the 2D Drawing of Design A."){: style="max-width:500px;" }

![Design A Side Detail](/blog_images/odl_led_matrix/Design_A_Side_Detail.png "Further detail on Design A, focussing on mounting the LEDs."){: style="max-width:500px;" }

|Thickness:|150mm|
|Inter-pixel Distance:|58.9mm|
|Frame Gap:|64mm|
|Resolution:|20 x 18|
|Total Number of Pixels:|360|
|Approx. Max. Power:|108W|

### Design B

The first design is good and allows flexibility in pixel density, however it is too damn thick! This makes it difficult to store and transport, plus makes it more clumsy. My second design is with a thinner design, using addressable LED strips - you're probably familiar with these types of things, they are LEDs etc. mounted to a flexible PCB, and usually come with a self-adhesive back, and they can be found in water-resistant versions where they are covered in a flexible encapsulation. These are really thin! So it means I can make the frame thinner than with Design A. The downside though, is that they have a fixed spacing between the pixels, so less flexibility when designing in to the frame.

![Design B LEDs](/blog_images/odl_led_matrix/Design_B_LEDs.png "These are the addressable LED strips for Design B. If you're eagle-eyed, you might have noticed this image actually shows Warm White/Cool White strips, but the form factor is the same, and is just for indication."){: style="max-width:500px;" }

30 LEDs/m ≈ 33mm between LED centres  
60 LEDs/m ≈ 17mm between LED centres  
144 LEDs/m ≈ 7mm between LED centres  

For this design, since the strips are thin - about 2.5mm, the frame can be much thinner than Design A. For Design B, I chose to use 25mm by 20mm timber. This results in a folded thickness of 50mm, i.e. 5cm - that's a third of the depth of Design A! So this is much thinner and lighter. With this timber, the frame causes a gap of 40mm between the two panels - this means that the only strip type that would work is the 30 LEDs/m type, with a distance of about 33mm between the pixels. This is annoying, since the pixel distance is closer than the frame gap of 40mm, so it would mean that there is a bigger gap between the pixels at the middle seam, something I really want to avoid. To make matters worse, it isn't possible to get the spacing the same in the vertical axis, and it would mean a vertical pixel spacing of 34.25mm. 

So, this design already has it's down sides despite being thin. And there's more... If one pixel fails in the future, it would be very difficult to replace a single pixel. The LED strips would have to be attached using the pre-applied self-adhesive tape. I have very little confidence that this would last, and fear that the panels would fall apart too easily, unless a clear perspex front was added on the front, adding to weight and cost, and making it even more difficult to replace a pixel. And then for the final negative point, I think the strips would look a bit cheap and amateur.

![Design B](/blog_images/odl_led_matrix/Design_B.png "This is the 2D Drawing of Design B."){: style="max-width:500px;" }

|Thickness:|50mm|
|Inter-pixel Distance:|H: 33mm, V: 34.25mm|
|Frame Gap:|40mm|
|Resolution:|34 x 34|
|Total Number of Pixels:|1156|
|Approx. Max. Power:|346.8W|

### Design C

Okay so we're not off to a good start with the first two designs! I thought I was a bit stumped, but there was something in the back of my mind - the Design A LEDs gave great flexibility with pixel spacing, and looked more professional, but it was the damn enclosure thing that they are encapsulated in that is causing the problems. If I could have those LED strings without the mounting encapsulation thing, that would probably be perfect. 

Well, after lots and lots of trawling of the internet, it turns out you can indeed get the Design A LEDs in their raw form, but they were hard to find! With these, the LED is bent 90° as though they are ready to go into the plastic mounting encapsulation thing, but I knew that I could bend the LEDs back to their original position, which would reduce their depth. Plus the lack of a mounting bezel on the LEDs means that the LEDs on the middle can butt up to the frame, to reduce the spacing caused by the middle of the frame. The addressable LEDs in this form factor use the WS2811 IC.

![Design C LEDs](/blog_images/odl_led_matrix/Design_C_LEDs.png "These are the addressable LED strings used for Design C. They're just like the Design A LEDs, but not encapsulated. "){: style="max-width:500px;" }

This design combined the positives of Design A with the Positives of Design B: 
- Less bulky design, 50mm thick when folded
- Individual LEDs that can be spaced however I want. Can avoid the visible gap of the middle, and the LEDs can be more easily replaced should one of them fail in the future.

With this design, when the LEDs are butt up to the edge of the frame in the middle, the horizontal pixel spacing is 48mm. While it is possible to make the rest of the pixels spaced the same, it meant that the outer edges had no pixel, and it looked odd. As a compromise, I made the pixel spacing 46.44mm, which allowed me to horizontally squeeze in 13 pixels in a single frame, with the middle pixels only being spaced by 1.56mm more, which I don't think will be noticeable. I was also able to fit 24 pixels in the vertical direction at the same pixel spacing of 46.44mm.

![Design C](/blog_images/odl_led_matrix/Design_C.png "This is the 2D Drawing of Design C."){: style="max-width:500px;" }

![Design C Side Detail](/blog_images/odl_led_matrix/Design_C_Side_Detail.png "Further detail on Design C, focussing on mounting the LEDs."){: style="max-width:500px;" }

|Thickness:|50mm|
|Inter-pixel Distance:|46.44|
|Frame Gap:|40mm|
|Resolution:|26 x 24|
|Total Number of Pixels:|624|
|Approx. Max. Power:|187.2W|

### Chosen Design

It's probably no surprise that Design C is the winner! To justify this...

Firstly, The LEDs for this design allow the frame to be a reasonable size, such that the frame is rigid yet not big and clunky. The smaller frame reduces the frame width in the middle, meaning the pixels can be reasonably dense. The reduced frame width means that the distance inter-pixel distance (between the pixel centres) in the middle of the panel are 48mm, while the rest of the pixels have an inter-pixel distance of 46.44mm. This means that there is only a marginal difference in pixel spacing at the middle, which shouldn't be noticeable. The pixels can be mounted in a panel of sheet wood, which has a more professional appearance than LED strips.

## Driving the Pixels

Now that the physical aspect of the design has been realised, albeit in 2D CAD, I now need to design a system for driving the pixels. As mentioned, I'm familiar with addressable LEDs, I've used them quite a lot in the past. But, I have always driven them in a single chain from one output on a microcontroller. This design has 624 pixels - it certainly isn't a crazy amount, like Design B was, but this is a significant amount of pixels and I want them to be able to refresh quickly to be able to display the effects nicely. 

And speaking of effects, where are these going to come from? Well, while doing my research for this project, I found the [Jinx! Application from live-leds.de](https://live-leds.de) - this is a super powerful piece of software for driving LED Matrices - it has a tonne of built in effects, plus you can create your own too using the existing effects as building blocks. And it is free! This seemed perfect. It does mean that the effects are created on-the-fly by a PC, with numerous connections/protocols available. So with this, I need to build some hardware that sits in between the PC and the LED Matrix.

So, I need to build hardware needs to receive the effects from the PC, process, and output the addressable LED signal with WS2811 protocol, and power all the pixels. So how to drive the pixels? My past use of addressable LEDs have always been quick projects with low pixel count, so I have got away with using an Arduino, but an Arduino can only really drive one output channel at a time. You could spread them out onto different channels, but there is not a massive performance change with this. Let's crunch some numbers:

It takes 30 μS to update one pixel, so with 624 pixels on one channel (i.e. all one continuous string), it takes 19 mS to update all pixels. That means that we would have a refresh rate of 53.4 fps. On the face of it, that is not too bad - to put it in perspective, the refresh rate of a typical LCD is 60 fps. There is a big **but** here though - this is assuming that the microcontroller is doing *nothing at all* other than  updating the pixels. This is simply not going to happen - the microcontroller is going to be receiving the live stream of data from the PC, processing it into a pixel map, and outputting with the WS2811 protocol. Plus this doesn't even consider any housekeeping functions that I will probably have too. So, the theoretical value of 53.4 fps isn't going to be realised with this approach, and this doesn't factor in the 16 MHz clock of an Arduino.

But not to fear, I had something in mind all along! Enter [Teensy 4.1!](https://www.pjrc.com/store/teensy41.html) I've been wanting to use a Teensy for a while, but never had a project that required this level of performance, so I was super excited that I finally had a use-case for one. The Teensy family of microcontroller boards are fantastic, They're a family of ready to go microcontroller modules similar to an Arduino Nano, but use really sweet microcontrollers. And if that wasn't already great, they are also Arduino Compatible, so you can develop your code in the same way as you would an Arduino. Although I *can* program microcontrollers in their native programming environment, i.e. in the Vendors IDE with Bare Metal code, I already have a fairly big task here that I am doing in my spare time, so I felt that it was an acceptable "cheat" to program in the Arduino environment to get this project finished without unnecessary complications. 

![Teensy 4.1](/blog_images/odl_led_matrix/Teensy_41.png "This is the Teensy 4.1 reference card, which comes as a card with the Teensy, nice! Image copyright of pjrc.com"){: style="max-width:500px;" }

So why the Teensy 4.1? Well, it has a wealth of features that are going to make this project as pain-free as possible. For a start, it uses a 32-bit ARM Cortex-M7 microcontroller from Freescale, at a whopping 600 MHz. This means that the processing of the data, protocol conversions and housekeeping is going to occupy a significantly less amount of time than it would on a 16 MHz Arduino. The USB is fairly clever too - should I chose to use UART over USB for the data link, I'm not actually limited by conventional USB to UART speeds - when using USB UART on a Teensy, although the data is UART, the data is at native USB speeds; the any baud rate specified is a dummy parameter, it will use native USB speeds. This means that a USB UART connection is actually a reasonable option here. It also has 10/100 Mbit Ethernet, which is needed if I chose to use ArtNET as the communications link from the PC. Another handy feature is an SD Card slot that uses a native communications - quite commonly SD cards are used with microcontrollers in SPI mode (which I have indeed done before), and this does not operate very fast when compared to operating an SD card in its native SD communications. So, should I chose to have some built in effects, I could store these effects on an SD Card, and not have to worry about the SD Card read operations occupying too much processor time.

All sounds good so far doesn't it! But I haven't got onto the what was the main reason for opting for the Teensy 4.1 - [OctoWS2811](https://www.pjrc.com/teensy/td_libs_OctoWS2811.html). By using some clever very use of DMA-based data transfers on the ARM Cortex-M7, the OctoWS2811 library, written by the Teensy's creator Paul Stoffregen, allows the Teensy to write to 8 WS2811 channels **simultaneously!** And, with minimal processing impact. This is just incredible - It means that I can spread the 624 pixels across 8 channels, and with the very high processor speed, the refresh rate will be super high, higher than I would need in fact.

The figure below shows a very simplistic overview of the system. The Teensy 4.1 will receive the data stream from Jinx! running on a Windows 10 tablet computer. I'm not concerned about the Windows 10 end-of-life since this tablet will be disabled from connecting to the internet (i.e. Wifi disabled in BIOS). The data stream will be delivered either via ArtNET over Ethernet, or via UART over USB - remember, the USB UART on a Teensy 4.1 runs at native USB speeds, not conventional UART speeds. The Teensy will then output eight WS2811 channels; four channels for each panel, meaning that each panel will have four groups of pixels. The Teensy is a 3.3V device, meaning that the GPIO ports can only output 3.3V level logic, whereas the WS2811 LEDs are 5V logic. This is no trouble, it just means that I will need to have 8 level converter channels to buffer the 3.3V logic to 5V logic. To be able to power the system, a suitably sized PSU will be needed - I'll cover that shortly!

![Simple System Diagram](/blog_images/odl_led_matrix/System_Diagram_Simple.png "A very simple system diagram of the core functionality."){: style="max-width:500px;" }

## Back to the Build

With the necessary design work done, now is the time to make this a reality! Since I already had the Design C 2D drawing, I just needed to do the woodwork. It is quite similar to a photo frame to be honest. It is constructed using 75mm by 32mm timber for the frame. The back is a sheet of 5mm plywood. In the design, the LED pixels are also mounted into a 5mm sheet, but I decided to down-size this to 3mm Plywood.

![Frame Detail](/blog_images/odl_led_matrix/Frame_Detail.png "Updated detail of the frame, made from 75mm by 32mm timber"){: style="max-width:500px;" }

To make the frame, my friends Pete and Phil of [Crazy9 Mobile Crazy Golf](https://www.crazy9.co.uk) very kindly let me use their Stockport Woodworking Studio (Pete helped me while Phil was busy making a Plinko Game for their mobile golf course!). We used a table saw to make the details needed for the mounting of the sheet wood. I also used the picture-frame idea and made the corners at 45° too. The final result is exactly what I had envisioned, really pleased with it. Marking out 624 holes and then drilling them was less fun though.

![The Frame](/blog_images/odl_led_matrix/Frame_No_LEDs.jpeg "The frame now exists! Don't judge it too much, this is only with the first primer paint layer."){: style="max-width:500px;" }

I thought that drilling 624 holes was hard work, I take it back, fitting 624 LEDs was a real chore. I spent time making sure that the cables were routed nice and neatly, it means that the cables are under less twisting and bending stress, improving reliability, considering this will be transported around frequently. It also makes it much easier to work with, since I will be routing data and power lines in addition to these LEDs. The holes were drilled at 8mm, which is the same size as the LEDs. I did a practice hole first to check how well the LEDs fit in the hole, and it turned out that they fit really well; there was a lot of friction to get the LEDs in the hole, so I had confidence that the friction fit was all that was needed to hold the LEDs in in place. There were only a couple that were a little questionable, so I put some hot glue on those just to be safe. Not needing to glue every single one in place was good for two reasons - firstly, it saved me a lot of time and mess, and secondly, from a maintenance perspective, should I need to change an LED if one fails, I don't have to de-glue them.

## Pixel Talk

Since the LEDs are in a string, it makes sense to wind the LEDs up and down - this makes the wiring simpler, and most importantly it keeps the distance between the LEDs the same distance. I don't want to make the distance between the LEDs any longer, since long wires are the enemy; the output of each WS2811 pixel is a buffered output, but long wires make the signal susceptible to signal degradation. Thankfully, the Jinx! software is able to handle pixels arranged in this snake-lines pattern. I planned to have the connectors at the bottom of each panel, so this means that the data signals will originate from the bottom, so this means that the snake-lines will run bottom to top, top to bottom etc., so the pixels will be in columns, not rows.

![LEDs Fitted](/blog_images/odl_led_matrix/LEDs_Fitted.jpeg "That's all 624 LEDs fitted. Glad that is over and done with. It's upside-down, by the way."){: style="max-width:500px;" }

Each panel will receive four data lines, meaning that the 13 columns of pixels need dividing up into channel groups. 13 isn't a nice number for that! The best way to do this would be to have 3 groups of 3 columns, and one group of 4 columns. I wish that I had made this realisation *before* putting the LEDs in, because doing it this way would mean that I have to break up the snake-lines to re-start at the bottom on the 4th, 8th, 12th etc. columns. Instead, with the way the LEDs are fitted, these columns are a flow down, not a flow up. Damn! So with the arrangement I have, the I need even number of columns in a group. The arrangement I went for is three groups of 4 columns, and one group of 1 column per panel. Overall, this means six channels with 96 pixels, and two channels with 24 pixels. A picture speaks a thousand words, so this is shown below:

![Pixel Arrangement](/blog_images/odl_led_matrix/Pixel_Arrangement.png "Pixel arrangement, showing the snake-lines pattern and channel groupings."){: style="max-width:500px;" }

With the start of each channel group starting at the bottom, I connected wires to the start pixel in each group, and routed the wires to the middle in an empty gap, in preparation for a connector to be fitted. I also prepared the power wires to an empty gap on the bottom right, in preparation for a connector. The daisy-chain of the LEDs carries both the data and power, but one thing you have to watch out for with a string of lights like this is voltage-drop on the cable. The individual LEDs are each interconnected with wire, which will have a very small amount of resistance. Current in a resistive element causes a potential difference - Volts - simple Ohm's Law. This means that over a length of cable, what started as 5V will gradually decrease. The voltage-drop is very small, but over a long length, this adds up, and it manifests itself as the start of the string being brighter than the end of the string. When a string is spread out over a long distance, it isn't too obvious, but when the pixels are clumped together in a matrix like this, it is very noticeable. This is avoided by having multiple sourced of power, not just at one end of the string. 

Since the string of pixels are broken up to form the channel groups, as a minimum, power needs to be routed to each channel group. This already assists with avoiding voltage-drop, since the long string is broken up, and each string is a shorter overall length. With each string only being 96 pixels in length, this was probably short enough that voltage-drop would not be a problem, but I was taking no chances here! I made it so that each string that had 96 pixels was powered at the start and the end. The two channels with 24 pixels were short enough that power was only applied to the start.  

![Pixels Grouped](/blog_images/odl_led_matrix/Pixels_Grouped.jpeg "The wiring has been done for the pixel groupings. Also power has been routed to multiple points to avoid voltage-drop."){: style="max-width:500px;" }

## Rear Connectors

When designing these panels, I am keeping maintainability in mind, i.e. making sure that future-me does not hate present me! The back panel fits into the recess of the frame, and so I need to make sure that the connectors can be detached from the panel easily - if the connectors cannot be detached then it will be really difficult to remove the back panel with the connectors still connected to the wiring. For the data connectors, I chose the Switchcraft EN3 connectors - they're a nice circular connector with a bayonet type attachment, and very conveniently, I had a pair of them in my box of miscellaneous connectors! The socket is a panel-mount type, which mounts on the rear and is affixed with a hex-nut. This is perfect as it means that should maintenance be needed, the hex-nut can be removed so that the connector stays with the wiring and the panel comes off completely.

![Switchcraft EN3](/blog_images/odl_led_matrix/Switchcraft_EN3.png "Switchcraft EN3 Plug and Panel-mount Socket."){: style="max-width:500px;" }

The only issue here, is that this panel-mount socket has a maximum panel thickness of 3mm, and my back panel is 5mm thick - damn! Well this was easily solved; I designed a panel in my favourite 3D CAD package, OnShape, which attaches to the back panel, and has an aperture for the socket that is 3mm in thickness. This is actually a better solution than mounting to the wood panel directly, because I am able to put the flat edge detail in, so that the connector cannot twist when mounted, which would strain the wires and connections within the panel. When I 3D printed this, I realised that there was actually a little more give in the mounting than is specified in the connector data-sheet, so I changed the panel to be 4mm thick. This means that the connector does not protrude as much, making it a little less susceptible to damage.

![Data Connector Panel](/blog_images/odl_led_matrix/Data_Connector_Panel.png "3D Design of the connector panel for the Switchcraft EN3 panel-mount socket in OnShape."){: style="max-width:500px;" }

For the power connectors, these need to be robust and be able to sustain the high current demands of the panels. Each pixel is a RGB LED, so three LEDs in one. When each panel has all LEDs driven at full brightness (i.e. white), the panel should consume 23.4 A. I'll be covering the power aspects of the design later in this post though. I had some familiarity with the XT type connectors, which are simple, robust, and are designed for high-current applications. I could have got away with using XT-30 connectors, which are rated for continuous current of 30 A, but I decided to go with the XT-60 connectors instead, which are rated for continuous current of 60A. It isn't the current rating that made me go for the XT-60, it is because it is bigger and is less fiddly to connect - makes it easier to set up.

![XT60 Connectors](/blog_images/odl_led_matrix/XT60_Connectors.png "XT60 Connectors used in this design."){: style="max-width:500px;" }

A male panel mount XT60 is used for the power input on the panels (Since power outlets should always be a socket, and inlets a pin). I decided to design a little mounting panel for the power connector, again, using OnShape and my 3D printer. This means that there is a bigger surface of attachment than if I just used a nut and washer. It also makes the overall appearance look more professional than the XT-60 poking out a square hole cut in the back panel.

![XT60 Connector Panel](/blog_images/odl_led_matrix/Power_Connector_Panel.png "This is the small panel for mounting the male XT-60 power inlet. "){: style="max-width:500px;" }

The image below shows the final result of the connector mounting. It is shown here with the cables connected. As you can see, I used heatshrink to finish off the power cable.

![Finished Rear Connectors](/blog_images/odl_led_matrix/Rear_Connectors.jpeg "The finished rear connectors. "){: style="max-width:500px;" }

## Driving the Pixels

With the panels built, it is now time to build a box that can drive them so we can have some pretty effects on this LED Matrix! In case you were wondering, I did test each channel group to make sure that all the LEDs were working!

### Pixel Power

The WS2811 strings I have are specified to use a maximum of 0.3 W per pixel when the Red, Green and Blue are at full brightness (i.e. full white). With 624 pixels, this will be 187.2 W. Also in the data, it specifies that the maximum current consumption of 60 mA (makes sense, 20 mA per R/G/B). Multiplied by 624, this is 37.44 A. Since they use 5V, the power is 37.44 A × 5 V = 187.2 W - the same value as before - phew, that's a relief, since I was dubious due to the data being on an AliExpress page! 

A pretty beefy 5V PSU is needed, and it needs to be de-rated. In a nutshell, I don't want the PSU to be operating close to its maximum specified power - this is very standard practice. It prevents the PSU overheating, and ensures reliability; operating a PSU at its maximum is a sure-fire way to reduce its lifespan. So, in worst case scenario (i.e. Pixels at their maximum) I only want the PSU to be operating at a maximum of 80% of its stated power, ideally lower. So, if 187.2 W is 80%, then 100% is 234 W, similarly, if 37.44 A is 80%, then 100% is 46.8A. I.e. the PSU needs to be at least 234 W / 37.5 A.

When I looked for a suitable PSU, chose a 300 W 60 A one, since the one below that is 200 W, which isn't high enough. This is good, since it means that the PSU is even more de-rated. So, when the panels are at their maximum power of 187.2 W, the PSU is at 62.4 % of its full capacity, so that's great, the PSU is never going to be under heavy load and it should mean a long life-span.

![PSU](/blog_images/odl_led_matrix/5V_PSU.png "The 5 V 60 A 300 W PSU chosen for this project. It's an un-branded generic one, but it'll never see significant demand."){: style="max-width:500px;" }

## Packaging It Up

The idea is to have a "control box", which houses the PSU and the Microcontroller board as an all-in-one centre for the Matrix Panels. The main factor governing the size of the control box is the size of the PSU. Now, I don't know if you have ever tried to look for a suitable enclosure for a project, but I find that it can be blooming difficult sometimes and time consuming! Are those internal dimensions? Are those external dimensions? Gah! I eventually settled on a Gewiss Surface Mounted Plastic Enclosure, part number GW44208. It has external dimensions of 254 × 200 x 98 mm, and internal dimensions of 240 × 190 × 90 mm. 

![Enclosure](/blog_images/odl_led_matrix/Enclosure.png "This is the enclosure I chose. Nice, isn't it? [sarcasm]"){: style="max-width:500px;" }

On the face of it, this is big enough for the PSU, however it has noggins (correct term?!) in the corners for the lid screws to go into - this means that the PSU cannot butt-up right to the edge. All is not lost though - I realised that I can cut a notch out of one of the  noggins, and modify the connector-end of the PSU enclosure to be able to accommodate the PSU, since it is below the screw depth. This is more clear in the following photo of the PSU mounted in the enclosure:

![PSU Mounted](/blog_images/odl_led_matrix/PSU_Mounted.jpeg "PSU mounted in the enclosure nicely. If you look carefully at the bottom left, you can see that I trimmed the top bit of the PSU enclosure off, and made a little notch in the main enclosure to make it fit."){: style="max-width:500px;" }

## Microcontroller Board

![Board Design](/blog_images/odl_led_matrix/Board_Design_Annotated.png "Design for the microcontroller board on Stripboard. Annotated for your convenience!"){: style="max-width:500px;" }