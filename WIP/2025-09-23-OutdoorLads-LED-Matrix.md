ODL LED Matrix

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

![Truss DJ Booth](/blog_images/odl_led_matrix/DJ_Truss_Booth.png "This is the DJ Booth that is being worked with. It's so boring isn't it!!"){: style="max-width:500px;" }

As with most designs that are physical, I did some simple 2D modelling using Microsoft Visio (I always feel some shame in using Visio! I use it all the time at work and I can use it really well). I did this so that I can get a visual indication of what the LED matrix will look like. As mentioned, I want the pixels (I'm going to refer to the LEDs as Pixels in when in the context of the Matrix) to be spaced such that pixel density doesn’t look too "empty", so that the effects look good. Another key aspect here, is that the physical build will have a structural frame, and due to the matrix being foldable, there will be frame in the middle, two frames in fact - one from each side. I don't want the frame to add any extra spacing between the pixels on both sides, I want the pixel spacing to be uniform across the whole matrix. So, the 2D models allows me to identify the spacing between the frame join, which governs the minimum spacing.

### Design 1

The first design is based around addressable LEDs that are in a string - a bit like Christmas lights. They are 5mm RGB LEDs soldered to a PCB that has the addressable controller, epoxy encapsulated in a mount (I use the word mount loosely, it's a friction fit mount). These were my first design since I've used these type of addressable LEDs before in a project that I did to make some Pac-Man prop boards.

The good thing about these, is that I can space the pixels however I please, to both get the right pixel density, and also fit within the panel size evenly. The down side with , is that they are very deep, so the panels needs to be able to accommodate their depth. 

### Design 2

The first design is good and allows flexibility in pixel density, however it is too damn thick! This makes it difficult to store and transport, plus makes it more clumsy. My second design is with a thinner design, using addressable LED strips - you're probably familiar with these types of things, they are LEDs etc. mounted to a flexible PCB, and usually come with a self-adhesive back, and they can be found in water-resistant versions where they are covered in a flexible encapsulation.



### Design 3

