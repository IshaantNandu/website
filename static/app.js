const languages = [
  'c',
  'cs',
  'cpp',
  'crystal',
  'clojure',
  'coffeescript',
  'css',
  'd3',
  'dart',
  'forth',
  'fortran',
  'go',
  'haskell',
  'haxe',
  'html',
  'java',
  'js',
  'kotlin',
  'latex',
  'less',
  'lua',
  'md',
  'ocaml',
  'perl',
  'php',
  'pkl',
  'py',
  'r',
  'ruby',
  'rust',
  'sass',
  'scala',
  'solidity',
  'swift',
  'ts',
  'v',
  'vala',
  'wasm',
  'zig'
];
const languageSelector = languages.map(lang => `div.${lang}`).join(', ');
console.log('CSS Selector:', languageSelector);
document.querySelectorAll(languageSelector).forEach((element=>{
  console.log(`Processing element: ${element.tagName} with classes: ${Array.from(element.classList).join(', ')}`);
  const elementLanguage = languages.find(lang => element.classList.contains(lang));
  if (elementLanguage) {
      // Create image element
      const img = document.createElement('img');
      img.src = `https://skillicons.dev/icons?i=${elementLanguage}`;
      img.alt = `${elementLanguage} `;
      img.classList.add('skill-icon');
      img.classList.add('noanim');

      
      // Add image to the beginning of the element
      element.insertBefore(img, element.firstChild);
    }
  }));


//Modifies title and description of the page

let title=document.querySelectorAll(`h1`)[1].innerText;
document.title=title;
console.log(title);
let desc=document.createElement('meta');
desc.name='description';
desc.content=title;
document.head.appendChild(desc);

//Copy button for code blocks
document.querySelectorAll('pre').forEach((element)=>{
    var copyButton = document.createElement("span");
    copyButton.innerText = 'Copy';
    copyButton.classList.add("copy-button");
    element.appendChild(copyButton);
    copyButton.addEventListener("click", () => {
        // Hide the copy button temporarily
        copyButton.style.display = "none";

        // Create a range and select the text inside the <pre> tag
        const range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            // Copy the selected text to the clipboard
            document.execCommand("copy");

            // Alert the user that the text has been copied
            copyButton.innerText = "Copied!";
            setTimeout(function(){
                copyButton.innerText = "Copy";
            }, 2000);
        } catch (err) {
            console.error("Unable to copy text:", err);
        } finally {
            // Show the copy button again
            copyButton.style.display = "inline";

            // Deselect the text
            window.getSelection().removeAllRanges();
        }
    });
});

//Scroll animations
const objects = document.querySelectorAll('p:not(.noanim),a:not(.noanim),table:not(.noanim),div:not(.highlight,.codehilite,.circle),img:not(.noanim),tr:not(.noanim),td:not(.noanim), ul:not(.noanim),li:not(.noanim),ol:not(.noanim), dl:not(.noanim),dt:not(.noanim), h1:not(.noanim),h2:not(.noanim),h3:not(.noanim),h4:not(.noanim),h5:not(.noanim),h6:not(.noanim)');
objects.forEach((el)=>{
    el.classList.add('hideAnim');
});

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(
        (entry)=>{
            console.log(entry);
            if (entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
                
            }
        }
    );

});

objects.forEach((el)=>observer.observe(el));

//Keyboard css style for buttons and kbd
const kbd=document.querySelectorAll('kbd')
kbd.forEach((element)=>{
    let button = document.createElement('button');

  // Copy attributes
  for (const attr of element.attributes) {
    button.setAttribute(attr.name, attr.value);
  }

  // Copy inner HTML/content
  button.innerHTML = ElementInternals.innerHTML;

  // Replace the element in the DOM
  element.replaceWith(button);
})
//Actual button styling
buttons=document.querySelectorAll('button:not(.noanim):not(.nk),kbd:not(.noanim):not(.nk),input[type="button"]:not(.noanim):not(.nk),input[type="submit"]:not(.noanim):not(.nk)')
buttons.forEach(element=>{
    element.classList.add('kbc-button');
    element.classList.add('no-container');
})
/*
var fontSize = 2.5+'em'
document.documentElement.style.setProperty('--body', 'new-value');
document.documentElement.style.setProperty('--heading-size', 'new-value');*/
//Cursor Effect.
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#29d246", "#29d246", "#29d246", "#29d246",
  "#29d246", "#29d246", "#29d246", "#29d246"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    // Use transform for scaling
    circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();


