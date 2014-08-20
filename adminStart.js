var STARTVARIABLE;

$(document).delegate('#startPage', 'pagebeforeshow', function () {
    getStartVariable();

    $( "#flip-1" ).bind( "change", function(event, ui) {
        if($('#flip-1').value === "off") {
            stopRound();
        }   else {
            beginRound();
        }
    });

	});
function getStartVariable() {
    $.ajax({
        url: "http://charlottechuckers.com/beta/startVariable.php",
        type: "GET",
        dataType: "json",
        async: false,
        success: function (json) {
            STARTVARIABLE = json;
            console.log(STARTVARIABLE);
            if(json === "FALSE") {
                $("#flip-1").value("off");
            } else {
                $("#flip-1").value("on");
            }
        },
        error: function (xhr) {
        }
    });

}
function beginRound() {
    $.ajax({
        url: "http://charlottechuckers.com/beta/startRound.php",
        type: "GET",
        dataType: "json",
        data: {
            num : 1
        },
        async: false,
        success: function (json) {
            if(json)
            alert("Round is ready");
        },
        error: function (xhr) {
        }
    });

}
function stopRound() {
    $.ajax({
        url: "http://charlottechuckers.com/beta/stopRound.php",
        type: "POST",
        dataType: "json",
        data: {
            num : 0
        },
        async: false,
        success: function (json) {
            if(json)
                alert("Round is disabled");
        },
        error: function (xhr) {
        }
    });

}