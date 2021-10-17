
  function countdown(){
    var countDownDate = new Date("Oct 16, 2021 23:59:59").getTime();
                                
    var x = setInterval(function() {
                                
        var now = new Date().getTime();
                                    
        var distance = countDownDate - now;
                                    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                                    
        document.getElementById("countfashion").innerHTML = "TERMINA EN  " + "<span class='count-numbers' style='display:flex; justify-content: center; align-items: center; width: 25px; height: 25px; border-radius: 100%; background-color:#EB7085; margin-right: 3px; margin-left: 6px; font-weight: bold;'>" + days + "</span>" + "DIAS " + "<span class='count-numbers' style='display:flex; justify-content: center; align-items: center; width: 25px; height: 25px; border-radius: 100%; background-color:#EB7085; margin-right: 3px; margin-left: 6px; font-weight: bold;'>" + hours + "</span>" + "HRS " + "<span class='count-numbers' style='display:flex; justify-content: center; align-items: center; width: 25px; height: 25px; border-radius: 100%; background-color:#EB7085; margin-right: 3px; margin-left: 6px; font-weight: bold;'>" + minutes+ "</span>"  + "MIN " + "<span class='count-numbers' style='display:flex; justify-content: center; align-items: center; width: 25px; height: 25px; border-radius: 100%; background-color:#EB7085; margin-right: 3px; margin-left: 6px; font-weight: bold;'>" + seconds + "</span>" + "SEG";

        document.getElementById("countfashion").style.fontSize = "35px"
        document.getElementById("countfashion").style.display = "flex"
        document.getElementById("countfashion").style.justifyContent = "center"
        document.getElementById("countfashion").style.alignItems = "center"
                                    
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countfashion").innerHTML = "00d 00h 00m 00s";
            window.location.href = "/wendy.html";
        }

    }, 1000);
}

countdown();
