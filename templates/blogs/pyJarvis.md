# DIY Python Jarvis AI

Tired of _'free'_ api's for Text-To-Speech and Speech-To-Text that hardly let you use them? Tired of Paying you hard-earned developer cash for 404 api's which don't even exist? Tired of **ALL** the tutorials using [Google APIs](https://cloud.google.com/text-to-speech?hl=en)?

### DON'T WORRY I GOTCHA

Yeah. So y'all might me knowing about Python, My 2nd favourite language which you can install from [here](https://www.python.org/downloads/). I recommend you learn basics of python-3 before reading this blog. You can check out my other Python blogs too.

### Prerequisites

We're using a popular Text-To-Speech wrapper called [pyttsx3](https://pyttsx3.readthedocs.io/en/latest/) and a speech recognition program called [SpeechRecognition](https://github.com/Uberi/speech_recognition#readme) which you can install by opening Command Prompt(Windows), or Terminal (Linux, MacOS) , typing

`:::bash pip install pyttsx3 SpeechRecognition`

and pressing ENTER(return on Macbooks). On MacOS and go to Terminal and type

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 
brew install portaudio espeak
``` 
For Ubuntu/Debian based linux, go to terminal and type 
```bash
sudo apt update && sudo apt install espeak ffmpeg libespeak1
``` 
then, press enter.
Then, run 
```bash
espeak Hello 
```
in `terminal` or `Command prompt` to verify your install by 
checking if you can hear a voice saying _'Hello'_
Pyttxs3 is a fairly simple to use if you have some basic knowledge of Python 3.
There's some simple boilerplate to it. 
```python
import pyttxs3
engine=pyttxs3.init()
engine.say("Some text to be spoken...")
engine.runAndWait()
```
`:::python import pyttxs3 ` and `:::python engine=pyttxs3.init()`
import and create the text to speech engine. 
`:::python engine.say("Some text to be spoken...")` Tells the model 
to say the text but won't work until `:::python engine.runAndWait()` is called. 

So Here's the code-
```python
import pyttsx3
import speech_recognition as sr
from datetime import datetime
engine = pyttsx3.init()
engine.say("Hello Master, How can i help You")
engine.runAndWait()

now = datetime.now()
current_time = now.strftime("%H:%M:%S")

def takecommand():
    command = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listning....")
        command.adjust_for_ambient_noise(source)
        command.pause_thresold = 1
        audio = command.listen(source)

        try:
            print("Recognizing....")
            query = command.recognize_google(audio,language="en-in")
            print("You said", query)
            if 'current time ' in query:
                engine = pyttsx3.init()
                engine.say(current_time)
                engine.runAndWait()
        except Exception as Error:
            print("error",Error)
   
takecommand()
```
***
After you run it, it will say something, then if you say _'Current Time Please'_, it will tell you the time. 

Thank you. I hope you liked my blog.
