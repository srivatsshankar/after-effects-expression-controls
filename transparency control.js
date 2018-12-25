// A script to control the transparency depending on a slider
slide = thisComp.layer("Dot Contol").effect("Slider Control")("Slider")
if (slide >= 1 && slide <2 ) 100 else 0
// remember to substitute "Dot Control" with your layer