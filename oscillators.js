var OZ = module.exports
var tau = Math.PI * 2

OZ.sine = sine;
OZ.saw = saw;
OZ.saw_i = saw_i;
OZ.triangle = triangle;
OZ.triangle_s = triangle_s;
OZ.square = square;
OZ.sig = sig
OZ.sq = square
OZ.tri = triangle

function sine(t, f) {

    return Math.sin(t * tau * f);

};

function saw(t, f) {

    var n = ((t % (1 / f)) * f) % 1; // n = [0 -> 1]

    return -1 + (2 * n)

};

function saw_i(t, f) {

    var n = ((t % (1 / f)) * f) % 1; // n = [0 -> 1]

    return 1 - (2 * n)

};

function triangle(t, f) {

    var n = ((t % (1 / f)) * f) % 1; // n = [0 -> 1]

    return n < 0.5 ? -1 + (2 * (2 * n)) : 1 - (2 * (2 * n))

};

function triangle_s(t, f) {

    var n = ((t % (1 / f)) * f) % 1; // n = [0 -> 1]

    var s = Math.abs(Math.sin(t));

    return n < s ? -1 + (2 * (2 * (n / s))) : 1 - (2 * (2 * (n / s)))

};

function square(t, f) {

    return ((t % (1 / f)) * f) % 1 > 0.5 ? 1 : -1;

};

function sig(t, f){
  return 1 / (1 + Math.pow(Math.E, (t * Math.PI * 2 * f) % 12))
}

