# Oscillators

Oscillators // pass the time // and oh how often

Useful for DSP, and with Audio Javascript modules such as
* [baudio](https://github.com/substack/baudio)
* [webaudio](https://github.com/NHQ/webaudio)

```
npm install oscillators
```

# usage

## osc.sine
creates sine waves
## osc.saw
creates saw waves
## osc.square
creates square waves
## osc.triangle
creates triangle waves
## osc.saw_i
creates inverted saw waves
## osc.triangle_s
creates probably something silly

# example

```js
var  oz = require('oscillators')
,    frequency = 100000
function sineWave(time){ // given a time domain
  oz.sine(time, frequency)  // returns sinewave at given frequency 
}

```
talk to aliens

```js
var  oz = require('oscillators');

function sineWave(time){ // given a time domain
  oz.sine(time * os.sine(time, osc.sine(time, 10)), 440 * osc.square(time, 44 * osc.saw(time, 4)))  // no idea
}

```



