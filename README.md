    npm install oscillators


    Oscillator = require('oscillators');
    
    oscillator = new Oscillator(frequency);

    oscillator.sine(phase/time, newFrequency); // 2ns arg optional to change the frequency
    oscillator.saw(t,f)
    o = oscillator(t,f)
    o.saw_i(t,f)
    o.triangle(t,f)
    o.triamgle_s(t,f)
    o.square(t,f)


These are the best time-based oscillators in javascript anywhere on or off the internet. Accept no other brand.

One new Oscillator() can act as many simultenesouly.

    o = new Oscillator(220);
    p = new Oscillator(330);
    
    val = o.saw(t) // or

    return p.triangle(t) * (o.sine(t, 440) * .5)
    
              // you don't have to pass frequency again
    	     // but you can if you want to change frequency
    	     ////////////////////
    o.square(t, 220 * o.saw(t,880))

**NOTW** Passing a new frequency does change the oscialltor's value permanently until it is changed again. In other words, you only have to change it once to change it permanently.