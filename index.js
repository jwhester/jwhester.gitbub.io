//-------------------------------------------//
//-----------------MAIN-------------------//
//-------------------------------------------//
$("#logo").click(function () {
    $("#main").html(
        '<div class="mainpic">' +
        '<h1 class="title"><span>I\'m J.W. Hester,</span> <span>a designer and software developer</span><span>based in San Antonio, Texas.</span></h1>\n' +
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
        "<div class='circleContainer'> " +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "</div>" +
        "<h1>Candy Monster</h1>" +
        "<div class='content'>" +
        "<p>A choose your own adventure game with a Halloween theme.</p>" +
        "<img class='picture' src='img/portfolio/candy.png' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='lofiWeatherMap'>" +
        "<img src='img/portfolio/lofi.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "</div>" +
        "<h1>Lofi Weather Map</h1>" +
        "<div class='content'>" +
        "<p>Weather Map is a Javascript driven application\n" +
        "that forecast the weather anywhere in the\n" +
        "world in a 3 day format(Current day and the\n" +
        "two days preceding) With the use of Jquery\n" +
        "getting request from Dark Sky Api and Mapbox\n" +
        "Api we are able to get both Databases\n" +
        "to asynchronously get information to display\n" +
        "realtime information to users.</p>" +
        "<img class='picture' src='img/portfolio/map.png' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='milHub'>" +
        "<img src='img/portfolio/milHub.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "</div>" +
        "<h1>Milhub</h1>" +
        "<div class='content'>" +
        "<p>3rd place winner and crowd favorite at Geekdoms Veteran Code-a-thon. Milhub is a search engine where companies that are military and GI Bill friendly can advertise themselves and members can leave reviews for future users. </p>" +
        "<img class='picture' src='img/portfolio/milhubschools.png' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='socialApe'>" +
        "<img src='img/portfolio/ape.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "</div>" +
        "<h1>Social Ape</h1>" +
        "<div class='content'>" +
        "<p>Created a full stack, fully-featured social media application using React, Firebase, Redux, Express, and Material-UI. During this solo project I learned how to create a backend REST API server with Node.js and Express, user login and authentication, image uploads, notifications, cloud functions, and deploying to Firebase.</p>" +
        "<img src='' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='spaceBountyHunter'>" +
        "<img src='img/portfolio/bountyhunter.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "</div>" +
        "<h1>Space Bounty Hunter</h1>" +
        "<div class='content'>" +
        "<p>A space themed RPG reminiscent of the old school RPG's.</p>" +
        "<img class='picture' src='img/portfolio/sbh.png' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='designPortfolio'>" +
        "<img src='img/logo.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "</div>" +
        "<h1>Design Projects</h1>" +
        "<div class='content'>" +
        "<img src='' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='adlister'>" +
        "<img src='img/logo.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "<div class='circle'></div>" +
        "</div>" +
        "<h1>Ad Lister</h1>" +
        "<div class='content'>" +
        "<img src='' alt=''>" +
        "</div>" +
        "</div>" +
        "<div class='project' id='capstone'>" +
        "<img src='img/logo.png' alt=''>" +
        "<div class='circleContainer'>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle'></div>" +
        "<div class='circle active'></div>" +
        "</div>" +
        "<h1>Capstone</h1>" +
        "<div class='content'>" +
        "<img src='' alt=''>" +
        "</div>" +
        "</div>"
    );
    $("#candyMonster").fadeIn("slow").click(function () {
        $(this).fadeOut("slow");
        $("#lofiWeatherMap").fadeIn("slow");
    });
    $("#lofiWeatherMap").click(function () {
        $(this).fadeOut("slow");
        $("#milHub").fadeIn("slow");
    });
    $("#milHub").click(function () {
        $(this).fadeOut("slow");
        $("#socialApe").fadeIn("slow");
    });
    $("#socialApe").click(function () {
        $(this).fadeOut("slow");
        $("#spaceBountyHunter").fadeIn("slow");
    });
    $("#spaceBountyHunter").click(function () {
        $(this).fadeOut("slow");
        $("#designPortfolio").fadeIn("slow");
    });
    $("#designPortfolio").click(function () {
        $(this).fadeOut("slow");
        $("#adlister").fadeIn("slow");
    });
    $("#adlister").click(function () {
        $(this).fadeOut("slow");
        $("#capstone").fadeIn("slow");
    });
    $("#capstone").click(function () {
        $(this).fadeOut("slow");
        $("#candyMonster").fadeIn("slow");
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




