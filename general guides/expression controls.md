# Expression Controls

Expression controls give graphic designers the ability to manipulate layers using a script to automate actions that would otherwise require several actions to be executed manually (for example, setting multiple keyframes or assigning the position of keyframes to a expression controller).

Expression controls are a variant of JavaScript, so if you have any familiarity with the language it would be of use.

This entire repo consists of expression controls that can be found here. This guide merely explains how to apply these expression controls:
1. begin by clicking "alt + shift + =" once you have selected the parameter in the layer you wish to modify
2. this will open a text dialogue immediately below the parameter, usually with an identifier

```JavaScript
// these are a few examples of what you would see when you first enter an expression control
transform.scale // when modifying the scale parameter
thisComp.layer("Layer 1") // this is a layer selector
```
3. enter your expression control and exit the text dialogue by clicking anywhere else
