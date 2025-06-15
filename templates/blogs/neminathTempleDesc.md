<style>
    @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap'); 
    .writ {
        width: clamp(300px, 80%, 600px);
        margin: auto;
        font-family: Special Elite, serif;
        animation: none;
        transition:none;
      }
      p.writ::first-letter {
        float: left;
        width: 0.7em;
        font-size: 400%;
        line-height: 80%;
      }
      p.writ {
        background-image: linear-gradient(to right, var(--tomato),var(--lemon));
        background-clip: text;
        -moz-background-clip: text;
        color: transparent;
      }
</style>

![A pic of the temple](../../static/images/Neminath.jpg)

<button onclick="setalltext()">Skip animation?</button>
<br>
<p id=demo class=writ></p>

<script defer>
    var i = 0;
    var stop = false;
    var speed = [25, 30, 50, 35, 45, 65, 75, 85, 70, 60];
    const txt =
        "I stepped on the stone steps of the steep Girnar Hill, me panting and huffing. " +
        "I was parched in the blistering humid sun. I managed to continue the massive climb after drinking a " +
        "few sips of Himalayan Water. 'Aaaah' I sighed as I sipped the mineral-rich " +
        "liquid. Just fifty more steps to go. I managed to pull my self up and then walked towards a " +
        "great golden gate. I looked behind to see breathtaking views of the immense greenery. Sweat " +
        "trickled down my forehead. I promptly walked into the gate. Thousands of devotees stood there, " +
        "performing pujas, selling flowers, asking people to give charity and doing other things. There were many tiny " +
        "shrines, peaceful meditation centres, large sermon halls, common food canteens in the vast complex, " +
        "but in the centre stood the magnificent Nemināth  Temple. It was a tall one with many elegant carvings on the sides. " +
        "As I stepped into the massive gates, I was greeted with a ceiling full of paintings of heavenly " +
        "Devas, the achievements of Parasnath Bhagwan, and the different dimensions in Jain mythology. I bowed down to " +
        "the carved lions on the threshold. I was amazed by the 13-foot idol of Nemināth Bhagwan. I put a vermillion " +
        "paste on my ring finger and applied it on a smaller version of the idol. I recited a small mantra three times " +
        "and bowed down to the serene idol. Then I walked away, a better man as the divine " +
        "experience had enlightened my spirituality and touched my soul.";
    function speedch(array) {
        return array[Math.floor(Math.random() * array.length)];
      }
      function typeWriter() {
        if (stop == false) {
          if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            var x = speedch(speed);
            setTimeout(typeWriter, x);
            console.log(speedch(speed));
          }
        }
      }
      function setalltext() {
        stop = true;
        document.getElementById("demo").innerHTML = txt;
      }
      window.addEventListener("load", function () {
        typeWriter();
      });
</script>
