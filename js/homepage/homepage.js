/* =====================================================
 * theme switch toggle
 * =====================================================*/

// wrapped to prevent leaks
document.addEventListener("DOMContentLoaded", function() {

    // swap function for navigation + burger menu
    // (media queries hiding them was giving issues with 
    // the direct var-> id -> src swaps)
    function swapSrc(id, src) {
    var el = document.getElementById(id);
    if (el) el.src = src;
    }

    // center icons var
    var topuhead = document.getElementById("topuhead");
    var aboutme = document.getElementById("about-me-img");
    var github = document.getElementById("github-img");
    var edu = document.getElementById("education-img");
    var exp = document.getElementById("experience-img");
    var skills = document.getElementById("skills-img");
    var changelog = document.getElementById("changelog-img");
    var sitebuild = document.getElementById("sitebuild-img");
    var guestbook = document.getElementById("guestbook");

    // other pieces var
    var frame = document.getElementById("frame");
    var dialoguebox = document.getElementById("dialoguebg");
    var miniham = document.getElementById("minihana");
    var hana = document.getElementById("hana");

    // on click function that switches between light/dark modes
    topuhead.onclick = function(){
        document.documentElement.classList.toggle("glorp-mode");
        
        // replaces assets based on light/dark modes
        if(document.documentElement.classList.contains("glorp-mode"))
        {
            swapSrc("fav", "../../assets/media/sitewide/favicon_glorp.png")
            
            swapSrc("nav-home", "../../assets/media/glorp/glorpuhead.PNG");
            swapSrc("nav-abtme", "../../assets/media/glorp/icons/angelglorp.png");
            swapSrc("nav-git", "../../assets/media/glorp/icons/glorp1.png");
            swapSrc("nav-edu", "../../assets/media/glorp/icons/shootingstar.png");
            swapSrc("nav-exp", "../../assets/media/glorp/icons/glorpship.png");
            swapSrc("nav-skills", "../../assets/media/glorp/icons/moon.png");
            swapSrc("nav-chnglg", "../../assets/media/glorp/icons/glorpnotepad.png");
            swapSrc("nav-build", "../../assets/media/glorp/icons/shrinkray.png");
            swapSrc("nav-gb", "../../assets/media/glorp/icons/cownap.png");

            swapSrc("burg-home", "../../assets/media/glorp/glorpuhead.PNG");
            swapSrc("burg-abtme", "../../assets/media/glorp/icons/angelglorp.png");
            swapSrc("burg-git", "../../assets/media/glorp/icons/glorp1.png");
            swapSrc("burg-edu", "../../assets/media/glorp/icons/shootingstar.png");
            swapSrc("burg-exp", "../../assets/media/glorp/icons/glorpship.png");
            swapSrc("burg-skills", "../../assets/media/glorp/icons/moon.png");
            swapSrc("burg-chnglg", "../../assets/media/glorp/icons/glorpnotepad.png");
            swapSrc("burg-build", "../../assets/media/glorp/icons/shrinkray.png");
            swapSrc("burg-gb", "../../assets/media/glorp/icons/cownap.png");

            topuhead.src = "../../assets/media/glorp/glorpuhead.PNG";
            aboutme.src = "../../assets/media/glorp/icons/angelglorp.png";
            github.src = "../../assets/media/glorp/icons/glorp1.png";
            edu.src = "../../assets/media/glorp/icons/shootingstar.png";
            exp.src = "../../assets/media/glorp/icons/glorpship.png";
            skills.src = "../../assets/media/glorp/icons/moon.png";
            changelog.src = "../../assets/media/glorp/icons/glorpnotepad.png";
            sitebuild.src = "../../assets/media/glorp/icons/shrinkray.png";
            guestbook.src = "../../assets/media/glorp/icons/cownap.png";

            frame.src = "../../assets/media/glorp/centerframeglorp.png";
            dialoguebox.src = "../../assets/media/glorp/dialogueboxglorp.png";
            miniham.src = "../../assets/media/glorp/hanaminigreen.png";

            hana.src = "../../assets/media/glorp/hanagreenp.png";
        }
        else
        {
            swapSrc("fav", "../../assets/media/sitewide/favicon.png")

            swapSrc("nav-home", "../../assets/media/angel/topuhead.PNG");
            swapSrc("nav-abtme", "../../assets/media/angel/icons/heartwing.png");
            swapSrc("nav-git", "../../assets/media/angel/icons/gemheart1.png");
            swapSrc("nav-edu", "../../assets/media/angel/icons/starhalo.png");
            swapSrc("nav-exp", "../../assets/media/angel/icons/heartcloud.png");
            swapSrc("nav-skills", "../../assets/media/angel/icons/sun.png");
            swapSrc("nav-chnglg", "../../assets/media/angel/icons/topunotepad.png");
            swapSrc("nav-build", "../../assets/media/angel/icons/magicwand.png");
            swapSrc("nav-gb", "../../assets/media/angel/icons/tofuangel.png");

            swapSrc("burg-home", "../../assets/media/angel/topuhead.PNG");
            swapSrc("burg-abtme", "../../assets/media/angel/icons/heartwing.png");
            swapSrc("burg-git", "../../assets/media/angel/icons/gemheart1.png");
            swapSrc("burg-edu", "../../assets/media/angel/icons/starhalo.png");
            swapSrc("burg-exp", "../../assets/media/angel/icons/heartcloud.png");
            swapSrc("burg-skills", "../../assets/media/angel/icons/sun.png");
            swapSrc("burg-chnglg", "../../assets/media/angel/icons/topunotepad.png");
            swapSrc("burg-build", "../../assets/media/angel/icons/magicwand.png");
            swapSrc("burg-gb", "../../assets/media/angel/icons/tofuangel.png");

            topuhead.src = "../../assets/media/angel/topuhead.PNG";
            aboutme.src = "../../assets/media/angel/icons/heartwing.png";
            github.src = "../../assets/media/angel/icons/gemheart1.png";
            edu.src = "../../assets/media/angel/icons/starhalo.png";
            exp.src = "../../assets/media/angel/icons/heartcloud.png";
            skills.src = "../../assets/media/angel/icons/sun.png";
            changelog.src = "../../assets/media/angel/icons/topunotepad.png";
            sitebuild.src = "../../assets/media/angel/icons/magicwand.png";
            guestbook.src = "../../assets/media/angel/icons/tofuangel.png";

            frame.src = "../../assets/media/angel/centerframe.png";
            dialoguebox.src = "../../assets/media/angel/dialoguebox.png";
            miniham.src = "../../assets/media/angel/hanaminipink.png";

            hana.src = "../../assets/media/angel/hanapinkp.png";
        }
    }
});

/* =====================================================
 * icon buttons
 * =====================================================*/
const githubLink = document.getElementById("github-img");

githubLink.addEventListener('click', () => {
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