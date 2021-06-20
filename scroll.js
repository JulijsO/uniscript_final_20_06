var mainHeight = $(".main").height();
var mainContainerHeight = $(".main-container").height();
var scrollHeight = mainHeight - mainContainerHeight;
var onePercent = scrollHeight / 100;

var mainScroll = $(".main-container").scrollTop();
var scrollPercentage = mainScroll / onePercent;

var scrollIndex = 0;
var newScrollIndex = 0;

var scrollBarHeight = $(".chapter-container").height();
var dotHeight = $(".scroll-dot").height();
var actBarHeight = scrollBarHeight - dotHeight;
var scrollBarOnePercent = actBarHeight / 100;

// console.log(scrollPercentage);
// console.log(scrollHeight);

// console.log(scrollBarHeight);
// console.log(dotHeight);
// console.log(actBarHeight);

// console.log(mainHeight);




$(window).on("resize load", function () {
    mainHeight = $(".main").height();
    mainContainerHeight = $(".main-container").height();
    scrollHeight = mainHeight - mainContainerHeight;
    onePercent = scrollHeight / 100;
    // console.log(mainHeight);
    // console.log(mainContainerHeight);
    // console.log(onePercent);

    scrollBarHeight = $(".chapter-container").height();
    dotHeight = $(".scroll-dot").height();
    actBarHeight = scrollBarHeight - dotHeight;
    scrollBarOnePercent = actBarHeight / 100;

})


$(".main-container").on("scroll", function () {
    mainScroll = $(".main-container").scrollTop();
    scrollPercentage = mainScroll / onePercent;
    // console.log(scrollPercentage);

    var pointPosition = scrollPercentage * scrollBarOnePercent;
    // console.log(pointPosition);
    $(".scroll-dot").css("margin-top", pointPosition);

    if (scrollPercentage >= 0 && scrollPercentage <= 5) {
        newScrollIndex = 0;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 0;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement'>Hast du schonmal an der Bedeutung eines Buchstabens gezweifelt?</span>");

        }
    }

    if (scrollPercentage >= 5 && scrollPercentage <= 10) {
        newScrollIndex = 1;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 1;
            // console.log("add");
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement2'>Verstehst du wie Schrift funktioniert?</span>");
        }

    }

    if (scrollPercentage >= 10 && scrollPercentage <= 15) {
        newScrollIndex = 2;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 2;
            // console.log("add");
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement3'>Das ist Nonsens.</span>");

        }

    }

    if (scrollPercentage >= 15 && scrollPercentage <= 20) {
        newScrollIndex = 3;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 3;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement4'>Die Antworten liegen in der Geschichte Verborgen.</span>");
        }

    }

    if (scrollPercentage >= 20 && scrollPercentage <= 25) {
        newScrollIndex = 4;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 4;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement5'>Es spielt keine Rolle, wie ein Schriftzeichen aussieht.</span>");
        }

    }

        if (scrollPercentage >= 25 && scrollPercentage <= 30) {
        newScrollIndex = 5;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 5;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement6'>Wieso erkennst du am Zeichen fuer die Zahl Sechs nicht, welche Menge beschrieben wird?</span>");
        }

    }

        if (scrollPercentage >= 30 && scrollPercentage <= 35) {
        newScrollIndex = 6;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 6;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement7'>Was hat der die Buchstabenform eines As mit dem Laut aa zu tun?</span>");

        }
    }

    if (scrollPercentage >= 35 && scrollPercentage <= 40) {
        newScrollIndex = 7;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 7;
            // console.log("add");
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement8'>Stelle dir vor, du haettest diese Schrift in der Schule gelernt.</span>");
        }

    }

    if (scrollPercentage >= 40 && scrollPercentage <= 45) {
        newScrollIndex = 8;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 8;
            // console.log("add");
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement9'>Was unterscheidet diesen Satz von einem mit lateinischen Zeichen geschriebenen.</span>");

        }

    }

    if (scrollPercentage >= 45 && scrollPercentage <= 50) {
        newScrollIndex = 9;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 9;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement10'>Schriftzeichen sind das Resultat eines Spiels ohne Anfang und Ende.</span>");
        }

    }

    if (scrollPercentage >= 50 && scrollPercentage <= 55) {
        newScrollIndex = 10;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 10;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement11'>Es spielt keine Rolle, wie ein Schriftzeichen aussieht.</span>");
        }

    }

        if (scrollPercentage >= 55 && scrollPercentage <= 60) {
        newScrollIndex = 11;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 11;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement12'>Schriftzeichen zu betrachten, die man nicht lesen kann, ist eine eigentuemliche Erfahrung.</span>");
        }

    }

            if (scrollPercentage >= 60 && scrollPercentage <= 65) {
        newScrollIndex = 12;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 12;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement13'>Was ist ein menschliches Zeichen?</span>");
        }

    }

            if (scrollPercentage >= 65 && scrollPercentage <= 70) {
        newScrollIndex = 13
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 13;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement14'>Ich, der Computer, lese dir vor, was du siehst.</span>");
        }

    }

            if (scrollPercentage >= 70 && scrollPercentage <= 75) {
        newScrollIndex = 14;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 14;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement15'>Du siehst Sinn in Lauten, ich sehe Sinn in Nummern.</span>");
        }

    }

            if (scrollPercentage >= 75 && scrollPercentage <= 80) {
        newScrollIndex = 15;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 15;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement16'>Du kannst nicht lesen - aber du koenntest..</span>");
        }

    }

            if (scrollPercentage >= 80 && scrollPercentage <= 85) {
        newScrollIndex = 16;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 16;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement17'>Erfinde ein Zeichen, dass fuer eine Sache steht aber in der Form keinerlei Verbindung zu dieser hat.</span>");
        }

    }

            if (scrollPercentage >= 85 && scrollPercentage <= 90) {
        newScrollIndex = 17;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 17;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement18'>Schriftzeichen zu betrachten, die man nicht lesen kann, ist eine eigentuemliche Erfahrung.</span>");
        }

    }

            if (scrollPercentage >= 90 && scrollPercentage <= 95) {
        newScrollIndex = 18;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 18;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement19'>Versuche zu vergessen, dass Schrift Information transportiert</span>");
        }

    }

                if (scrollPercentage >= 95 && scrollPercentage <= 100) {
        newScrollIndex = 19;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 19;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement20'>Hast du verstanden?</span>");
        }
    }    




    // console.log(newScrollIndex);





})

var scrollBarHeight = $(".chapter-container").height();
var scrollBarOnePercent = scrollBarHeight / 100;


$(window).on("resize", function () {
    var scrollBarHeight = $(".chapter-container").height();
    var scrollBarOnePercent = scrollBarHeight / 100;
})



$(".main-container").on("scroll", function () {
    var pointPosition = scrollPercentage * scrollBarOnePercent;
    // console.log(scrollPercentage);
});