// A basic script for randomized values, useful for sliders
interval = .5;
base = Math.floor(time/interval);
seedRandom(base,true);
random(1,8) // choose random values
/* For the "random()" function remember the following
random(10), will create random values from 0 to 10
random (1, 10), will create random values from 1 to 10
random ([1, 2, 3]), will create a random value from 1, 2, and 3 */