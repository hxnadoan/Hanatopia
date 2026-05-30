/* =====================================================
 * theme switch toggle
 * =====================================================*/
var topuhead = document.getElementById("topuhead");

// on click function that switches between light/dark modes
topuhead.onclick = function(){
    document.documentElement.classList.toggle("glorp-mode");
    
    // replaces icon with glorpu for dark and topu for light
    if(document.documentElement.classList.contains("glorp-mode"))
    {
        topuhead.src = "../../assets/media/glorp/glorpuhead.PNG";
    }
    else
    {
        topuhead.src = "../../assets/media/angel/topuhead.PNG";
    }
}

/* =====================================================
 * icon buttons
 * =====================================================*/
const github = document.getElementById("github-img");

github.addEventListener('click', () => {
    window.open('https://github.com/hxnadoan', '_blank');
});

/* =====================================================
 * scrambled text
 * =====================================================*/
var text = document.getElementById("scramble");
let randomChars = "!@#$%&*()_+-<>";
let iterations = 0;
let originalText = text.textContent;
let interval = null;

function startScramble() {
    iterations = 0;

    // scrambling interval that retuns random characters
    // in place of original character index in string
    interval = setInterval(() => {
        text.textContent = originalText.split("").map((char, index) => {
            return randomChars.charAt(Math.floor(Math.random() 
            * randomChars.length));
        }).join("");

        if (iterations >= originalText.length) {
            iterations = 0;
        } else {
            iterations += 1/16; // speed
        }
    }, 90); // delay
}

// reveals original string
function stopScramble(){
    clearInterval(interval);
    interval = null;
    text.textContent = originalText;
}

// on hover reveals the message
text.addEventListener("mouseenter", stopScramble);
text.addEventListener("mouseleave", startScramble);


/* =====================================================
 * mmm burger
 * =====================================================*/
const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})