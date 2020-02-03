//-------------------------------------------//
//-----------------MAIN-------------------//
//-------------------------------------------//
$(document).ready(function () {
    alert("Please note this site is still under construction and not all features may be available.")

    $('.blurbWords').each(function () {
        let blurb = $(this);
        if (blurb.css("visibility") === "hidden") {
            setTimeout(function () {
                blurb.css("visibility", "visible");
            }, blurb.index() * 100)
        }
    });
});
$("#logo").click(function () {
    $("#main").html(
        '<div class="mainpic">' +
        '<h1 class="title"><span class="blurbWords">I</span><span class="blurbWords">\'</span><span class="blurbWords">m</span> <span class="blurbWords">J</span><span class="blurbWords">.</span><span class="blurbWords">W</span><span class="blurbWords">.</span> <span class="blurbWords">H</span><span class="blurbWords">e</span><span class="blurbWords">s</span><span class="blurbWords">t</span><span class="blurbWords">e</span><span class="blurbWords">r</span><span class="blurbWords">,</span> <span class="blurbWords">a</span> <br><span class="blurbWords">d</span><span class="blurbWords">e</span><span class="blurbWords">s</span><span class="blurbWords">i</span><span class="blurbWords">g</span><span class="blurbWords">n</span><span class="blurbWords">e</span><span class="blurbWords">r</span> <span class="blurbWords">a</span><span class="blurbWords">n</span><span class="blurbWords">d</span> <span class="blurbWords">s</span><span class="blurbWords">o</span><span class="blurbWords">f</span><span class="blurbWords">t</span><span class="blurbWords">w</span><span class="blurbWords">a</span><span class="blurbWords">r</span><span class="blurbWords">e</span> <span class="blurbWords">d</span><span class="blurbWords">e</span><span class="blurbWords">v</span><span class="blurbWords">e</span><span class="blurbWords">l</span><span class="blurbWords">o</span><span class="blurbWords">p</span><span class="blurbWords">e</span><span class="blurbWords">r</span> <br> <span class="blurbWords">b</span><span class="blurbWords">a</span><span class="blurbWords">s</span><span class="blurbWords">e</span><span class="blurbWords">d</span> <span class="blurbWords">i</span><span class="blurbWords">n</span> <span class="blurbWords">S</span><span class="blurbWords">a</span><span class="blurbWords">n</span> <span class="blurbWords">A</span><span class="blurbWords">n</span><span class="blurbWords">t</span><span class="blurbWords">o</span><span class="blurbWords">n</span><span class="blurbWords">i</span><span class="blurbWords">o</span><span class="blurbWords">,</span> <span class="blurbWords">T</span><span class="blurbWords">e</span><span class="blurbWords">x</span><span class="blurbWords">a</span><span class="blurbWords">s</span><span class="blurbWords">.</span></h1>' +
        '</div>'
    );
    $('.blurbWords').each(function () {
        let blurb = $(this);
        if (blurb.css("visibility") === "hidden") {
            setTimeout(function () {
                blurb.css("visibility", "visible");
            }, blurb.index() * 100)
        }
    });
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
            '<p>Disney World with my family.</p>'
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
        "<img class='projectPic' src='img/portfolio/candyMonster.png' alt=''>" +
        "<div class='circleContainer'> " +
        "<img src='img/portfolio/024-left-arrow.svg' alt='' id='candyMonster-capstone' class='arrow'> " +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<img src='img/portfolio/025-right-arrow.svg' alt='' id='candyMonster-lofiWeatherMap' class='arrow'> " +
        "</div>" +
        "<h1 class='contentTitle'>Candy Monster</h1>" +
        "<div class='content'>" +
        "<div class='contentDesc'>" +
        "<p>A choose your own adventure game with a Halloween theme.</p>" +
        "</div>" +
        "<video class='picture' controls='controls'  src='img/portfolio/candyMonsterClip.mov'></video>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='lofiWeatherMap'>" +
        "<img class='projectPic' src='img/portfolio/lofi.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<img src='img/portfolio/024-left-arrow.svg' alt='' id='lofiWeatherMap-candyMonster' class='arrow'> " +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<img src='img/portfolio/025-right-arrow.svg' alt='' id='lofiWeatherMap-milHub' class='arrow'> " +
        "</div>" +
        "<h1 class='contentTitle'>Lofi Weather Map</h1>" +
        "<div class='content'>" +
        "<div class='contentDesc'>" +
        "<p>Weather Map is a Javascript driven application\n" +
        "that forecast the weather anywhere in the\n" +
        "world in a 3 day format(Current day and the\n" +
        "two days preceding) With the use of Jquery\n" +
        "getting request from Dark Sky Api and Mapbox\n" +
        "Api we are able to get both Databases\n" +
        "to asynchronously get information to display\n" +
        "realtime information to users.</p>" +
        "</div>" +
        "<img class='picture' src='img/portfolio/map.png' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='milHub'>" +
        "<img class='projectPic' src='img/portfolio/milHub.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<img src='img/portfolio/024-left-arrow.svg' alt='' id='milHub-lofiWeatherMap' class='arrow'> " +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<img src='img/portfolio/025-right-arrow.svg' alt='' id='milHub-socialApe' class='arrow'> " +
        "</div>" +
        "<h1 class='contentTitle'>Milhub</h1>" +
        "<div class='content'>" +
        "<div class='contentDesc'>" +
        "<p>Third place winner and crowd favorite at Geekdoms Veteran Code-a-thon. Milhub is a search engine where companies that are military and GI Bill friendly can advertise themselves and members can leave reviews for future users. </p>" +
        "<div class='awards'>" +
        "<img src='img/svg/026-badge.svg' alt='' style='height: 60px'>" +
        "<img src='img/svg/027-award.svg' alt='' style='height: 60px'>" +
        "</div>" +
        "</div>" +
        "<video class='picture' controls='controls'  src='img/portfolio/milhubClip.mov'></video>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='socialApe'>" +
        "<img class='projectPic' src='img/portfolio/ape.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<img src='img/portfolio/024-left-arrow.svg' alt='' id='socialApe-milHub' class='arrow'> " +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<img src='img/portfolio/025-right-arrow.svg' alt='' id='socialApe-spaceBountyHunter' class='arrow'> " +
        "</div>" +
        "<h1 class='contentTitle'>Social Ape</h1>" +
        "<div class='content'>" +
        "<div class='contentDesc'>" +
        "<p>Created a full stack, fully-featured social media application using React, Firebase, Redux, Express, and Material-UI. During this solo project I learned how to create a backend REST API server with Node.js and Express, user login and authentication, image uploads, notifications, cloud functions, and deploying to Firebase.</p>" +
        "</div>" +
        "<video class='picture' controls='controls'  src='img/portfolio/socialapeClip.mov'></video>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='spaceBountyHunter'>" +
        "<img class='projectPic' src='img/portfolio/bountyhunter.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<img src='img/portfolio/024-left-arrow.svg' alt='' id='spaceBountyHunter-socialApe' class='arrow'> " +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<img src='img/portfolio/025-right-arrow.svg' alt='' id='spaceBountyHunter-designPortfolio' class='arrow'> " +
        "</div>" +
        "<h1 class='contentTitle'>Space Bounty Hunter</h1>" +
        "<div class='content'>" +
        "<div class='contentDesc'>" +
        "<p>A space themed RPG reminiscent of the old school RPG's.</p>" +
        "</div>" +
        "<img class='picture' src='img/portfolio/sbh.png' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='designPortfolio'>" +
        "<img class='projectPic' src='img/logo.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<img src='img/portfolio/024-left-arrow.svg' alt='' id='designPortfolio-spaceBountyHunter' class='arrow'> " +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<img src='img/portfolio/025-right-arrow.svg' alt='' id='designPortfolio-adlister' class='arrow'> " +
        "</div>" +
        "<h1 class='contentTitle'>Design Projects</h1>" +
        "<div class='content'>" +
        "<div class='contentDesc'>" +
        "</div>" +
        "<img src='' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='adlister'>" +
        "<img class='projectPic' src='img/logo.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<img src='img/portfolio/024-left-arrow.svg' alt='' id='adlister-designPortfolio' class='arrow'> " +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<img src='img/portfolio/025-right-arrow.svg' alt='' id='adlister-capstone' class='arrow'> " +
        "</div>" +
        "<h1 class='contentTitle'>Ad Lister</h1>" +
        "<div class='content'>" +
        "<div class='contentDesc'>" +
        "</div>" +
        "<img src='' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='capstone'>" +
        "<img class='projectPic' src='img/logo.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<img src='img/portfolio/024-left-arrow.svg' alt='' id='capstone-adlister' class='arrow'> " +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<img src='img/portfolio/025-right-arrow.svg' alt='' id='capstone-candyMonster' class='arrow'> " +
        "</div>" +
        "<h1 class='contentTitle'>Capstone</h1>" +
        "<div class='content'>" +
        "<div class='contentDesc'>" +
        "</div>" +
        "<img src='' alt=''>" +
        "</div>" +
        "</div>"
    );
    $("#candyMonster").fadeIn("slow");
    $("#candyMonster-capstone").click(function () {
        $("#candyMonster").fadeOut("slow");
        $("#capstone").fadeIn("slow");
    });
    $("#candyMonster-lofiWeatherMap").click(function () {
        $("#candyMonster").fadeOut("slow");
        $("#lofiWeatherMap").fadeIn("slow");
    });
    $("#lofiWeatherMap-candyMonster").click(function () {
        $("#lofiWeatherMap").fadeOut("slow");
        $("#candyMonster").fadeIn("slow");
    });
    $("#lofiWeatherMap-milHub").click(function () {
        $("#lofiWeatherMap").fadeOut("slow");
        $("#milHub").fadeIn("slow");
    });
    $("#milHub-lofiWeatherMap").click(function () {
        $("#milHub").fadeOut("slow");
        $("#lofiWeatherMap").fadeIn("slow");
    });
    $("#milHub-socialApe").click(function () {
        $("#milHub").fadeOut("slow");
        $("#socialApe").fadeIn("slow");
    });
    $("#socialApe-milHub").click(function () {
        $("#socialApe").fadeOut("slow");
        $("#milHub").fadeIn("slow");
    });
    $("#socialApe-spaceBountyHunter").click(function () {
        $("#socialApe").fadeOut("slow");
        $("#spaceBountyHunter").fadeIn("slow");
    });
    $("#spaceBountyHunter-socialApe").click(function () {
        $("#spaceBountyHunter").fadeOut("slow");
        $("#socialApe").fadeIn("slow");
    });
    $("#spaceBountyHunter-designPortfolio").click(function () {
        $("#spaceBountyHunter").fadeOut("slow");
        $("#designPortfolio").fadeIn("slow");
    });
    $("#designPortfolio-spaceBountyHunter").click(function () {
        $("#designPortfolio").fadeOut("slow");
        $("#spaceBountyHunter").fadeIn("slow");
    });
    $("#designPortfolio-adlister").click(function () {
        $("#designPortfolio").fadeOut("slow");
        $("#adlister").fadeIn("slow");
    });
    $("#adlister-designPortfolio").click(function () {
        $("#adlister").fadeOut("slow");
        $("#designPortfolio").fadeIn("slow");
    });
    $("#adlister-capstone").click(function () {
        $("#adlister").fadeOut("slow");
        $("#capstone").fadeIn("slow");
    });
    $("#capstone-adlister").click(function () {
        $("#capstone").fadeOut("slow");
        $("#adlister").fadeIn("slow");
    });
    $("#capstone-candyMonster").click(function () {
        $("#capstone").fadeOut("slow");
        $("#candyMonster").fadeIn("slow");
    });
});
//-------------------------------------------//
//-----------------SKILLS-------------------//
//-------------------------------------------//
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
    setInterval(changeWord, 2000);
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
    $('#main').html(
        '<h1 class="contact" data-text="Contact Me:">Contact Me:</h1>' +
        '<ul>' +
        '<li>' +
        '<a href="mailto:jameshester88@gmail.com" target="_blank"><img src="img/svg/005-envelope.svg" alt="" class="icon email"></a>' +
        '</li>' +
        '<li>' +
        '<a href="https://www.linkedin.com/in/jw-hester/" target="_blank"><img src="img/svg/iconmonstr-linkedin-1.svg" alt="" class="icon linkedin"></a>' +
        '</li>' +
        '<li>' +
        '<a href="https://github.com/jwhester" target="_blank"><img src="img/svg/002-github-1.svg" alt="" class="icon github"></a></li>' +
        '</ul>'
    )

});




