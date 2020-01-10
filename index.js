//-------------------------------------------//
//-----------------MAIN-------------------//
//-------------------------------------------//
$("#logo").click(function () {
    $("#main").html(
        '<div class="mainpic">' +
        '<h1 class="title">I\'m J.W. Hester, a <br> designer and <br>software developer<br>based in San Antonio.</h1>\n' +
        '</div>'
    )
});
//-------------------------------------------//
//-----------------ABOUT-------------------//
//-------------------------------------------//
$("#about").click(function () {
    $("#main").html(
        "<div class='about'>" +
        "<div class='airforce'></div>" +
        "<div class='hike'></div>" +
        "<div class='disney'></div>" +
        "<div class='fight'></div>" +
        "</div>"
    );
    $(".airforce").mouseenter(function () {
        $(this).html(
            '<p>Air Force Veteran</p>'
        )
    }).mouseleave(function () {
        $(this).html("")
    });
    $(".hike").mouseenter(function () {
        $(this).html(
            '<p>I love hiking!</p>'
        )
    }).mouseleave(function () {
        $(this).html("")
    });
    $(".disney").mouseenter(function () {
        $(this).html(
            '<p>Disney World with my family</p>'
        )
    }).mouseleave(function () {
        $(this).html("")
    });
    $(".fight").mouseenter(function () {
        $(this).html(
            '<p>I\'m an amateur Muay Thai fighter.</p>'
        )
    }).mouseleave(function () {
        $(this).html("")
    });
});
//-------------------------------------------//
//-----------------PORTFOLIO-------------------//
//-------------------------------------------//
$("#portfolio").click(function () {
    $("#main").html(
        "<div id='portfolioMain'> " +
        "<div class='project' id='candyMonster'>" +
        "<img src='img/portfolio/candyMonster.png' alt=''>" +
        "</div>" +
        "<div class='project' id='lofiWeatherMap'>" +
        "<img src='img/portfolio/lofi.png' alt=''>" +
        "</div>" +
        "<div class='project' id='milHub'>" +
        "<img src='img/portfolio/milHub.png' alt=''>" +
        "</div>" +
        "<div class='project' id='socialApe'>" +
        "<img src='img/portfolio/ape.png' alt=''>" +
        "</div>" +
        "<div class='project' id='spaceBountyHunter'>" +
        "<img src='img/portfolio/bountyhunter.png' alt=''>" +
        "</div>" +
        "<div class='project' id='designPortfolio'></div>" +
        "<div class='project' id='adlister'></div>" +
        "<div class='project' id='capstone'></div>" +
        "</div>"
    );
    $("#candyMonster").fadeIn( "slow" ).click(function () {
        $(this).fadeOut("slow");
        $("#lofiWeatherMap").fadeIn( "slow" );
    });
    $("#lofiWeatherMap").click(function () {
        $(this).fadeOut("slow");
        $("#milHub").fadeIn( "slow" );
    });
    $("#milHub").click(function () {
        $(this).fadeOut("slow");
        $("#socialApe").fadeIn( "slow" );
    });
    $("#socialApe").click(function () {
        $(this).fadeOut("slow");
        $("#spaceBountyHunter").fadeIn( "slow" );
    });
    $("#spaceBountyHunter").click(function () {
        $(this).fadeOut("slow");
        $("#designPortfolio").fadeIn( "slow" );
    });
    $("#designPortfolio").click(function () {
        $(this).fadeOut("slow");
        $("#adlister").fadeIn( "slow" );
    });
    $("#adlister").click(function () {
        $(this).fadeOut("slow");
        $("#capstone").fadeIn( "slow" );
    });
    $("#capstone").click(function () {
        $(this).fadeOut("slow");
        $("#candyMonster").fadeIn( "slow" );
    });

//    carousel of images to scroll through for my portfolio at the top of the screen
//    click on image and it populates the bottom section with information
});
//-------------------------------------------//
//-----------------SKILLS-------------------//
//-------------------------------------------//$("#skills").click(function () {
$("#skills").click(function () {
    $("#main").html(
        '<div style="position: relative; margin: 40%">' +
        '<div class="text">' +
        '<p>I\'m fluent in</p>' +
        '<p>' +
        '<span class="word wisteria">HTML</span>' +
        '<span class="word belize">CSS</span>' +
        '<span class="word pomegranate">JavaScript</span>' +
        '<span class="word green">jQuery</span>' +
        '<span class="word midnight">Java</span>' +
        '<span class="word blue">MySQL</span>' +
        '</p>' +

        '</div>' +
        '</div>'
    );

let words = document.getElementsByClassName('word');
let wordArray = [];
let currentWord = 0;

words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    let cw = wordArray[currentWord];
    let nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 120);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 340 + (i * 120));
}

function splitLetters(word) {
    let content = word.innerHTML;
    word.innerHTML = '';
    let letters = [];
    for (let i = 0; i < content.length; i++) {
        let letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 3000);
});

//-------------------------------------------//
//-----------------RESUME-------------------//
//-------------------------------------------//
$("#resume").click(function () {
    $("#main").html(
        "<div class='resume'>" +
        "<img class='resumepic' src='img/resume.png' alt=''>" +
        "</div>"
    );
});
//-------------------------------------------//
//-----------------CONTACT-------------------//
//-------------------------------------------//
$("#contact").click(function () {
});




