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

if (topuhead) {
        // on click function that switches between light/dark modes
        topuhead.onclick = function(){
            document.documentElement.classList.toggle("glorp-mode");

            // replaces assets based on light/dark modes
            if(document.documentElement.classList.contains("glorp-mode"))
            {            
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

                if (topuhead) topuhead.src = "../../assets/media/glorp/glorpuhead.PNG";
                if (aboutme) aboutme.src = "../../assets/media/glorp/icons/angelglorp.png";
                if (github) github.src = "../../assets/media/glorp/icons/glorp1.png";
                if (edu) edu.src = "../../assets/media/glorp/icons/shootingstar.png";
                if (exp) exp.src = "../../assets/media/glorp/icons/glorpship.png";
                if (skills) skills.src = "../../assets/media/glorp/icons/moon.png";
                if (changelog) changelog.src = "../../assets/media/glorp/icons/glorpnotepad.png";
                if (sitebuild) sitebuild.src = "../../assets/media/glorp/icons/shrinkray.png";
                if (guestbook) guestbook.src = "../../assets/media/glorp/icons/cownap.png";

                if (frame) frame.src = "../../assets/media/glorp/centerframeglorp.png";
                if (dialoguebox) dialoguebox.src = "../../assets/media/glorp/dialogueboxglorp.png";
                if (miniham) miniham.src = "../../assets/media/glorp/hanaminigreen.png";

                if (hana) hana.src = "../../assets/media/glorp/hanagreenp.png";
            }
            else
            {
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

                if (topuhead) topuhead.src = "../../assets/media/angel/topuhead.PNG";
                if (aboutme) aboutme.src = "../../assets/media/angel/icons/heartwing.png";
                if (github) github.src = "../../assets/media/angel/icons/gemheart1.png";
                if (edu) edu.src = "../../assets/media/angel/icons/starhalo.png";
                if (exp) exp.src = "../../assets/media/angel/icons/heartcloud.png";
                if (skills) skills.src = "../../assets/media/angel/icons/sun.png";
                if (changelog) changelog.src = "../../assets/media/angel/icons/topunotepad.png";
                if (sitebuild) sitebuild.src = "../../assets/media/angel/icons/magicwand.png";
                if (guestbook) guestbook.src = "../../assets/media/angel/icons/tofuangel.png";

                if (frame) frame.src = "../../assets/media/angel/centerframe.png";
                if (dialoguebox) dialoguebox.src = "../../assets/media/angel/dialoguebox.png";
                if (miniham) miniham.src = "../../assets/media/angel/hanaminipink.png";

                if (hana) hana.src = "../../assets/media/angel/hanapinkp.png";
            }
        }
    }
});

/* =====================================================
 * icon buttons
 * =====================================================*/

// --- MODALS ---
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-butt]');
const overlay = document.getElementById('overlay');

const dialogueText = document.getElementById('welcome');
const scrambleText = document.getElementById('scramble');
const warningText = document.getElementById('warning');
const welcomeText = dialogueText ? dialogueText.textContent : '';


// dialogue text for each modal
const dialogue = {
    '#abt-modal' : 'Hana\'s Room is under construction still!',
    '#edu-modal' : 'Go Titans!',
    '#changelog-modal' : 'Hanatopia\'s history (Hanatopia wasn\'t built in a day)!',
    '#build-modal' : 'Please don\'t take my assets :(',
    '#guestbook-modal' : 'Feel free to drop a message!',
};


function openModal(modal) {
    if(modal == null) 
        return;

    // finds any current active modal and removes it before the new one opens
    document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));

    modal.classList.add('active');
    overlay.classList.add('active');

    if (modal.id == 'abt-modal') {
        document.body.classList.add('abt-modal-open');
    } else if (modal.id == 'edu-modal') {
        document.body.classList.add('edu-modal-open');
    } else if (modal.id == 'changelog-modal') {
        document.body.classList.add('changelog-modal-open');
    } else if (modal.id == 'guestbook-modal') {
        document.body.classList.add('guestbook-modal-open');
    }

    scrambleText.style.visibility = 'hidden';
    warningText.style.visibility = 'hidden';

    // matches modal key with corresponding dialogue text
    const key = Object.keys(dialogue).find(k => modal.matches(k));
    if (key)
        dialogueText.textContent = dialogue[key];

}

function closeModal(modal) {
    if(modal == null) 
        return;

    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('abt-modal-open', 'edu-modal-open', 'changelog-modal-open',
                                    'guestbook-modal-open');
    scrambleText.style.visibility = 'visible';
    warningText.style.visibility = 'visible';

    dialogueText.textContent = welcomeText;
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

// --- GITHUB ---
const githubLink = document.getElementById("github-img");

if (githubLink) {
    githubLink.addEventListener('click', () => {
        window.open('https://github.com/hxnadoan', '_blank');
    });
}

// --- EXPERIENCE ---
const experienceLink = document.getElementById("experience-img");

if (experienceLink) {
    experienceLink.addEventListener('click', () => {
        window.open("experience.html", '_self');
    });
}

// --- SKILLS ---
const skillsLink = document.getElementById("skills-img");

if (skillsLink) {
    skillsLink.addEventListener('click', () => {
        window.open("skills.html", '_self');
    });
}

// --- SITEBUILD ---
const sitebuildLink = document.getElementById("sitebuild-img");

if (sitebuildLink) {
    sitebuildLink.addEventListener('click', () => {
        window.open("sitebuild.html", '_self');
    });
}

// -- GUESTBOOK ---
const guestbookLink = document.getElementById("guestbook");

if (guestbookLink) {
    guestbookLink.addEventListener('click', () => {
        window.open('https://hanatopia.atabook.org/', '_self');
    });
}

/* =====================================================
 * scrambled text
 * =====================================================*/
var text = document.getElementById("scramble");

if (text) {
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

    startScramble();
}



/* =====================================================
 * mmm burger
 * =====================================================*/
const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');

if (burgerBtn && burgerMenu)
{
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    })
}

