

$(document).ready(function() {
    function skillSet() {
        // Iterate over each element w/ a class of
        // bar-info, storing the value of data-total
        // in a variable.  Using jQuery's CSS method,
        // dynamically update the width of each bar.
        $('.bar-info').each(function() {
            total = $(this).data("total");
            $(this).css("width", total + "%");
        });

        // Iterate over each element w/ the class percent.  Using
        // jQuery's $(this) will allow us to interact w/ each specific
        // object in the loop.  Then use jQuery's super awesome animate method
        // to implement a counter on each .percent element, which will "count"
        // up incrementally until it reaches the number inside the percent span,
        // aka it's "ceiling".
        $('.percent').each(function() {
            var $this = $(this);
            $({
                Counter: 10
            }).animate({
                Counter: $this.text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter) + "%");
                }
            });
        });
    };
    // Invoke our skillSet function inside a setTimeout,
    // to create a short delay before the animation begins.
    setTimeout(skillSet, 1000);



    (function() {
        $(".skills-prog li")
            .find(".skills-bar")
            .each(function(i) {
                $(this)
                    .find(".bar")
                    .delay(i * 150)
                    .animate(
                        {
                            width:
                                $(this)
                                    .parents()
                                    .attr("data-percent") + "%"
                        },
                        1000,
                        "linear",
                        function() {
                            return $(this).css({
                                "transition-duration": ".5s"
                            });
                        }
                    );
            });

        $(".skills-soft li")
            .find("svg")
            .each(function(i) {
                var c, cbar, circle, percent, r;
                circle = $(this).children(".cbar");
                r = circle.attr("r");
                c = Math.PI * (r * 2);
                percent = $(this)
                    .parent()
                    .data("percent");
                cbar = (100 - percent) / 100 * c;
                circle.css({
                    "stroke-dashoffset": c,
                    "stroke-dasharray": c
                });
                circle.delay(i * 150).animate(
                    {
                        strokeDashoffset: cbar
                    },
                    1000,
                    "linear",
                    function() {
                        return circle.css({
                            "transition-duration": ".3s"
                        });
                    }
                );
                $(this)
                    .siblings("small")
                    .prop("Counter", 0)
                    .delay(i * 150)
                    .animate(
                        {
                            Counter: percent
                        },
                        {
                            duration: 1000,
                            step: function(now) {
                                return $(this).text(Math.ceil(now) + "%");
                            }
                        }
                    );
            });
    }.call(this));



});


