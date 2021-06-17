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

{% include image.html 
SmallImg="/blog_images/ltspice_pwm/MainCircuit.jpg" max-width="300px" 
LargeImg="/blog_images/ltspice_pwm/MainCircuit.jpg" 
alt=""
caption="This is the main circuit of the PWM generator" 
%}

{% include image.html 
SmallImg="/blog_images/ltspice_pwm/ExampleCircuit.jpg" max-width="300px" 
LargeImg="/blog_images/ltspice_pwm/ExampleCircuit.jpg" 
alt=""
caption="Example usage of the packaged PWM component." 
%}

{% include image.html 
SmallImg="/blog_images/ltspice_pwm/PWM.jpg" max-width="300px" 
LargeImg="/blog_images/ltspice_pwm/PWM.jpg" 
alt=""
caption="Three different PWM signals generated from the three components from previous image." 
%}

