---
layout: post
title:  "LTspice PWM Signal Generator"
date:   2021-06-16 21:00:00 +0100
categories: blog
hero_image: /blog_images/a_page_heros/PWM.jpg
hero_darken: true
image: /blog_images/a_page_heros/PWM.jpg

---
This is a fairly simple post, but useful nontheless. I was designing a constant current source for a string of Luxeon LEDs, and the driver that I was using can take a PWM signal to control the dimming. I was simulating in LTspice, and needed a way to create a PWM signal.

The solution is baiscally a sawtooth wave, and a comparator (which is actually performed by a Schmitt trigger, with no Schmitting at all, i.e. no hysteresis). It has been parameterised, and packaged up into a component that can be dragged into a circuit.

![Main circuit of the PWM generator](/blog_images/ltspice_pwm/MainCircuit.jpg "This is the main circuit of the PWM generator"){: style="max-width:500px;" }

![Example usage of the packaged PWM component](/blog_images/ltspice_pwm/ExampleCircuit.jpg "Example usage of the packaged PWM component."){: style="max-width:500px;" }

![Three PWM signals generated](/blog_images/ltspice_pwm/PWM.jpg "Three different PWM signals generated from the three components from previous image."){: style="max-width:500px;" }

Check it out on [GitHub](https://github.com/currentsauce/LTspice_PWM_Source).
