# 5 Ways to make your website look Cooler

What you will need-

*   a computer running Windows, Linux or MacOs
*   Basic knowledge of HTML, CSS and Javascript

### Abstract

Websites have become the Swiss Army knife of the digital era. They're globally used by brands and companies, but also for personal use. You can [create your own website](https://www.wikihow.com/Make-a-Website) learning [HTML](https://www.w3schools.com/html/default.asp), [CSS](https://www.w3schools.com/css/default.asp) and [JavaScript](https://www.w3schools.com/js/default.asp), buying your own server (My dad bought me a server), buying a [Domain Name](https://www.godaddy.com/en-in) (website name) and then configuring [Apache](https://ubuntu.com/tutorials/install-and-configure-apache#1-overview) or [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04) on your server. Now, you may want your website to look fancy, so here are some code snippets to make your Website cooler.

1. ### Add smooth scrolling
When you scroll a HTML page, it may look weird, fast, or
unresponsive to your scrolling By just adding this line of code to your CSS, your HTML page will scroll smoother. Additionally,
anchor-links like `:::html <a href="#Hyperlink">Click me Anchor Link</a><aside>Some content here......</aside><p id="Hyperlink">Here's the Anchor Link&lt;p&gt;                  element</p>` will automatically give a smooth scrolling effect, almost like you're manually scrolling down to a certain HTML element. So here's the CSS code for smooth scrolling:
```css
html{
    scroll-behavior:smooth;
}
```
2. ### Animations
If you've seen my website (you obviously have)
you might've noticed that there are animations in it.
Animations are actually pretty easy to implement in CSS.
All that you have to do is use the `@Keyframes` rule and
implement it in an element. Here's my sample `@Keyframes` rule:-
```css
@keyframes fadein{
    0%{
        /*
        Your starting properties go here: like
        */
        opacity:0;
        transform:scale(0.5);
    }
    100%{
        /*
        Your ending properties go here: like
        */
        opacity:1;
        transform:scale(1);
    }
}

```
Now, all you have to do is implement it in an element using the shorthand
`animation` property or using the `animation-name:/*insert animation-name*/;`,
`animation-duration:/*insert animation-duration*/;`, `animation-timing-function:/*insert timing function*/;`
and `animation-delay:/*insert animation-delay*/;` properties.
Here's an example of how i've used it:-
```css
button:hover{
    animation:fadein 1.5s ease-in-out;
}
```
<style>
@keyframes fadein{
    0%{
        /*
        Your starting properties go here: like
        */
        opacity:0;
        transform:scale(0.5);
    }
    100%{
        /*
        Your ending properties go here: like
        */
        opacity:1;
        transform:scale(1);
    }
}
.animista:hover{
    animation:fadein 1.5s ease-in-out;
}
</style>
<button class="animista nk">
Click or Hover me
</button>

3. ### Custom cursor
Custom Cursors are pretty cool to make.
If you like my website's cursor, here's the code.

#### Customization

 <label for="color">Color of Cursor</label>
<input type="color" value="#fff" name="color" />
 <label for="color">Y Offset (vertical distance between the balls and the cursor) </label>
<input type="range" id="yOffset" name="yOffset" min="-30" max="30" />
 <label for="color">X Offset (horizontal distance between the balls and the cursor)</label>
<input type="range" id="xOffset" name="xOffset" min="-30" max="30" />
 <label for="zipTime">Zip Time (time it takes for the balls stay put)</label>
<input type="range" id="zipTime" name="zipTime" min="0.8" max="0.1" />

<div class="js highlight"><pre><span></span><code><span class="kd">const</span><span class="w"> </span><span class="nx">style</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;style&#39;</span><span class="p">);</span>
<span class="nx">style</span><span class="p">.</span><span class="nx">textContent</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="sb">`</span>
<span class="sb">.circle {</span>
<span class="sb">    height: 24px;</span>
<span class="sb">    width: 24px;</span>
<span class="sb">    border-radius: 50%;</span>
<span class="sb">    position: fixed;</span>
<span class="sb">    background-color:#FFFFFF;</span>
<span class="sb">    top: 0;</span>
<span class="sb">    left: 0;</span>
<span class="sb">    pointer-events: none;</span>
<span class="sb">    z-index: 99999999;</span>
<span class="sb">}`</span><span class="p">;</span>
<span class="nb">document</span><span class="p">.</span><span class="nx">head</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">style</span><span class="p">);</span>
<span class="k">for</span><span class="w"> </span><span class="p">(</span><span class="kd">let</span><span class="w"> </span><span class="nx">i</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">0</span><span class="p">;</span><span class="w"> </span><span class="nx">i</span><span class="w"> </span><span class="o">&lt;</span><span class="w"> </span><span class="mf">49</span><span class="p">;</span><span class="w"> </span><span class="nx">i</span><span class="o">++</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="kd">const</span><span class="w"> </span><span class="nx">circle</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span>
<span class="w">    </span><span class="nx">circle</span><span class="p">.</span><span class="nx">className</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="s1">&#39;circle&#39;</span><span class="p">;</span>
<span class="w">    </span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">circle</span><span class="p">,</span><span class="w"> </span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
<span class="p">}</span>

<span class="kd">const</span><span class="w"> </span><span class="nx">coords</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">x</span><span class="o">:</span><span class="w"> </span><span class="mf">0</span><span class="p">,</span><span class="w"> </span><span class="nx">y</span><span class="o">:</span><span class="w"> </span><span class="mf">0</span><span class="w"> </span><span class="p">};</span>
<span class="kd">const</span><span class="w"> </span><span class="nx">circles</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nb">document</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s2">&quot;.circle&quot;</span><span class="p">);</span>


<span class="nx">circles</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="w"> </span><span class="p">(</span><span class="nx">circle</span><span class="p">,</span><span class="w"> </span><span class="nx">index</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">circle</span><span class="p">.</span><span class="nx">x</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">0</span><span class="p">;</span>
<span class="w">  </span><span class="nx">circle</span><span class="p">.</span><span class="nx">y</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">0</span><span class="p">;</span>
<span class="p">})</span>

<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;mousemove&quot;</span><span class="p">,</span><span class="w"> </span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">coords</span><span class="p">.</span><span class="nx">x</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">e</span><span class="p">.</span><span class="nx">clientX</span><span class="p">;</span>
<span class="w">  </span><span class="nx">coords</span><span class="p">.</span><span class="nx">y</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">e</span><span class="p">.</span><span class="nx">clientY</span><span class="p">;</span>
<span class="p">});</span>

<span class="kd">function</span><span class="w"> </span><span class="nx">animateCircles</span><span class="p">()</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="kd">let</span><span class="w"> </span><span class="nx">x</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">coords</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
<span class="w">  </span><span class="kd">let</span><span class="w"> </span><span class="nx">y</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">coords</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>

<span class="w">  </span><span class="nx">circles</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="w"> </span><span class="p">(</span><span class="nx">circle</span><span class="p">,</span><span class="w"> </span><span class="nx">index</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nx">circle</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">left</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">x</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="nx">xOffset</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="s2">&quot;px&quot;</span><span class="p">;</span>
<span class="w">    </span><span class="nx">circle</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">y</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="nx">yOffset</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="s2">&quot;px&quot;</span><span class="p">;</span>

<span class="w">    </span><span class="c1">// Use transform for scaling</span>
<span class="w">    </span><span class="nx">circle</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">transform</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="sb">`scale(</span><span class="si">${</span><span class="p">(</span><span class="nx">circles</span><span class="p">.</span><span class="nx">length</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="nx">index</span><span class="p">)</span><span class="w"> </span><span class="o">/</span><span class="w"> </span><span class="nx">circles</span><span class="p">.</span><span class="nx">length</span><span class="si">}</span><span class="sb">)`</span><span class="p">;</span>

<span class="w">    </span><span class="nx">circle</span><span class="p">.</span><span class="nx">x</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">x</span><span class="p">;</span>
<span class="w">    </span><span class="nx">circle</span><span class="p">.</span><span class="nx">y</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">y</span><span class="p">;</span>

<span class="w">    </span><span class="kd">const</span><span class="w"> </span><span class="nx">nextCircle</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">circles</span><span class="p">[</span><span class="nx">index</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="mf">1</span><span class="p">]</span><span class="w"> </span><span class="o">||</span><span class="w"> </span><span class="nx">circles</span><span class="p">[</span><span class="mf">0</span><span class="p">];</span>
<span class="w">    </span><span class="nx">x</span><span class="w"> </span><span class="o">+=</span><span class="w"> </span><span class="p">(</span><span class="nx">nextCircle</span><span class="p">.</span><span class="nx">x</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="nx">x</span><span class="p">)</span><span class="w"> </span><span class="o">*</span><span class="w"> </span><span class="nx">zipTime</span><span class="p">;</span>
<span class="w">    </span><span class="nx">y</span><span class="w"> </span><span class="o">+=</span><span class="w"> </span><span class="p">(</span><span class="nx">nextCircle</span><span class="p">.</span><span class="nx">y</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="nx">y</span><span class="p">)</span><span class="w"> </span><span class="o">*</span><span class="w"> </span><span class="nx">zipTime</span><span class="p">;</span>
<span class="w">  </span><span class="p">});</span>

<span class="w">  </span><span class="nx">requestAnimationFrame</span><span class="p">(</span><span class="nx">animateCircles</span><span class="p">);</span>
<span class="p">}</span>

<span class="nx">animateCircles</span><span class="p">();</span>
</code></pre></div>
<script>

const colorInput = document.querySelector("input[type=color]");
const codeBlockElement = document.querySelectorAll('pre')[3];

colorInput.addEventListener('change', function() {
    console.assert("Ditro");
    const codeBlock = codeBlockElement.innerHTML;
    const color = colorInput.value;
    codeBlockElement.innerHTML = codeBlock.replace('#FFFFFF', color);
});

</script>
