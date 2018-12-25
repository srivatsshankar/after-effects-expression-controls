// Simple but effective script for shifting keyframes forward
a = effect("Slider Control")("Slider");
b = time - (key(1).time + a);
valueAtTime(key(2).time + b); // change from positive to negative if you wish to move keyframes backward