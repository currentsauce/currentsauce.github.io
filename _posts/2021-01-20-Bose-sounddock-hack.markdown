---
layout: post
title:  "'Hacking' an original Bose Sounddock"
date:   2021-01-20 21:00:00 +0100
categories: blog
hero_image: /blog_images/a_page_heros/bose.jpg
hero_darken: true
image: /blog_images/a_page_heros/bose.jpg

---
I somehow ended up with this original Bose Sounddock. Its only means of audio input is via a 30-pin iPod dock connector. Notwithstanding that this connector is now obsolete, the 30-pin dock connector had come off. From my trawling of the internet, this is a fairly common problem.

Now, it was fairly lucky that when this connector came off, it didn't rip off the copper footprint on the PCB. So I was able to use my trusty Hakko FX-951 iron and re-solder it back on (thanks, Flux!). I dug out my old *(pink)* iPod nano, and sure enough, the sounddock works again!

But that's boring
-----------------
I want to do away with the dock connector, and be able to use it with anything - that's right, install a trusty 3.5mm Jack.
So the problem is, the sounddock turns on when an iPod is docked (and conversely, off when there is no iPod). This adds a bit of challenge to the hack. Thankfully by now, the pin-out of the 30-pin dock is known. So here is where the tinkering happens.

{% include image.html 
SmallImg="/blog_images/bose/DockBoard.jpg" max-width="300px" 
LargeImg="/blog_images/bose/DockBoard.jpg" 
alt=""
caption="This is the original dock board. It has the 30-pin dock on it, as well as the volume controls. I am getting rid of this." 
%}

There is a ribbon connector on the dock board, and with a bit of patience, I was able to reverse-engineer the schematic on the dock board. This meant, that armed with the pin-out of the 30-pin connector, I could work out what the signals on the ribbon cable were, and, the schematic of the volume buttons. With the ribbon connector salvaged from the dock board, I was able to bodge together a breakout board for the trusty breadboard!

{% include image.html 
SmallImg="/blog_images/bose/BreakoutBoard.jpg" max-width="300px" 
LargeImg="/blog_images/bose/BreakoutBoard.jpg" 
alt=""
caption="With this, I can figure out what I need to do." 
%}




