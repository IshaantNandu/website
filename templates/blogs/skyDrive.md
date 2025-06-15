<style>
    .schem{
        max-width:500px;
    }
</style>
<br>
<h1 style="color:black;font-size:1px;"> Diy Distortion pedal</h1>

# Simplest DIY distortion and overdrive pedal- SkyDrive
**Hi**, I'm back with a new tech invention- the '*SkyDrive*' pedal. She's a simple distortion/overdrive pedal with a wide range of sounds but has a minimalist circuit compared to the [Boss DS1](https://www.electrosmash.com/boss-ds1-analysis) or [ProCo Rat](https://www.electrosmash.com/proco-rat). So let's dive in!

## Bill of materials

These are the components you will need to build SkyDrive- you can but them from [DigiKey](https://www.digikey.com/) or from your local electronics store. The 47μf capacitors can be replaced with capacitors who's values are around 10μf viz. 10μf,47μf,20μf.and the IN5822's can be replaced by a good germanium diode like the IN60, but the '5822 is cheaper and more common. It's best to buy extra components because you may want to modify the circuit and sometimes when components don't work properly, you can easily swap them and keep on rocking. You will also need to know how to read a schematic which is explained in <a target=_blank href="https://www.circuitbasics.com/how-to-read-schematics/"> <a href="https://learn.sparkfun.com/tutorials/how-to-read-a-schematic/all">this guide.</a></a>

- [IC LM386 ~1x~](https://www.digikey.com/en/products/detail/texas-instruments/LM386MX-1-NOPB/212680)
- [47 μf capacitors ~3x~](https://www.digikey.com/en/products/detail/nichicon/UCS2D470MHD1TO/3128716)
- [1kΩ resistor ~1x~](https://www.digikey.com/en/products/detail/te-connectivity-passive-product/YR1B1K0CC/2390772)
- [Diode- IN4001 ~2x~](https://www.digikey.com/en/products/detail/diodes-incorporated/1N4001G-T/128568)
- [Schottky Diode- IN5822 ~2x~](https://www.digikey.com/en/products/detail/vishay-general-semiconductor-diodes-division/1N5822-E3-54/1023526?s=N4IgTCBcDaIJYDsCsAOMEC6BfIA)
- [Red LED ~2x~](https://www.digikey.com/en/products/detail/würth-elektronik/151051RS11000/4490012)
- [10 kΩ Potentiometer ~1x~](https://www.digikey.com/en/products/detail/tt-electronics-bi/P120PK-Y25BR10K/5957454)
- [Dupont wire ~30x~](https://www.digikey.com/en/products/detail/adafruit-industries-llc/1957/6827090)
- [Breadboard ~1x~](https://www.digikey.com/en/products/detail/digikey/DKS-BBOARD6-5/16633819)
- [9v battery ~1x~](https://www.digikey.com/en/products/detail/duracell-industrial-operations-inc/9V/21259959)
- [0.1μf capacitor ~2x~](https://www.digikey.com/en/products/detail/panasonic-electronic-components/ECQ-E4104KF/56567)
  
## Understanding the circuit {#understand}

So let's get started building the circuit!
Distortion and overdrive pedals are just a sound wave boosted and edges clipped like shown in the image below 
![Distortion on an oscilloscope](https://www.researchgate.net/profile/Jorge-Pinochet/publication/354337359/figure/fig5/AS:11431281110693870@1672691818289/Distortion-in-the-waveform-displayed-by-the-oscilloscope.jpg)
A simple overdrive is this circuit -  
![Schematic1](/static/images/simpleDriveClippingSchematic.png){.schem}  
Every diode has it's own properties called *`Forward Voltage`*,which simply means the minimum voltage required for a diode to start conducting. 
So Germanium diodes and the IN5822 Schottky Diode have an average forward voltage of $0.3v$, Silicon diodes like the IN4001 have an average forward voltage of $0.6v$ while red and orange *LED's* an average forward voltage of $1v$.
So, the lesser forward voltage, the more fuzzier and harsher clipping. 
The input is clipped and then sent to the output.
The diodes short(connect) the peaks of the audio signal to ground, forcing the audio to clip at it's peeks. 
Now that you know the basics, let's actually undertand  her.
### Circuit analysis
#### Schematic 1 
![Schematic 1 ](/static/images/schem1dist.png){.schem}
This one is pretty simple. A capacitor is connected between the input and output. This helps the signal pass as it blocks any unwanted DC voltage but allows the changing signal(portrayed as AC voltage) pass like in the image below. ![Capacitor blocks DC but allows AC voltage.](/static/images/capBlockDc.png){.schem}
#### Schematic 2
![Schematic 2](/static/images/schem2dist.png){.schem}
This is where the magic happens. 
Over here, the input is fed into a special chip called an *opamp*, in this case we're using the [LM386](https://www.ti.com/product/LM386) chip as it's specially designed for audio applications, although other pedals use some other opamps. 
The way this opamp works (other opamps require a different circuit) is that with just with the power pins- $VCC$ or +9v (pin on a battery) connected to pin 6, and $GND$ or 0v (- pin on a battery) connected to pin 4, the output will be $\begin{aligned}  V_{OUT}(volume) = 20 \times |V_{IN}^+(pin 3) - V_{IN}^-(pin 2)|  \end{aligned}$  In this configuration, pin 2 or $V_{IN}^-$ is connected to ground, so the output can be simplified to $\begin{aligned} V_{OUT}(volume) = 20 \times |V^{+ input}(pin 3)| \end{aligned}$ <br> basically making the guitar 20 times louder. 

## Schematic 3 
![Schematic 3](/static/images/schemdist3.png){.schem}
This is the most fun part- choosing clipping diodes. Some are like chocolate, while others are like coffee or vanilla. Like [stated above,](#understand)
