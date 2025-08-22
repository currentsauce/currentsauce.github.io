---
layout: post
title:  "Canal & River Trust Disco Bike"
date:   2022-06-29 21:00:00 +0100
categories: blog
hero_image: /blog_images/a_page_heros/discobike.jpg
hero_darken: true
image: /blog_images/a_page_heros/discobike.jpg

---

The Canal and River Trust participates in LGBTQ+ Pride Parades all over the country, and they wanted to up their game. They already had an Ice Cream Bike, which they used at various events, and they wanted to be able to  transform it into a Disco Bike for whenever they go to pride parades. The idea being that the freezer unit is swapped with an enclosure of the same size, which is a self contained, self powered Public Address (PA) system, capable of playing music loudly.

![Original bike](/blog_images/discobike/originalbike.png "I don't have an photo of the bike with the freezer unit, but is was like this."){: style="max-width:500px;" }

## Requirements
The goals for this project are:
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

