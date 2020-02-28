function Scaling(direction,IDname) {

    var resizers = document.getElementsByClassName("ResizerResizingBar");

    for (let i = 0; i < resizers.length; i++) {
        if (resizers[i].classList.contains(IDname)) {
            var resizer = resizers[i];
        }
    }

    console.log(resizer)

    resizer.addEventListener("mousedown", function(e) {
        window.addEventListener("mouseup", StopResize)
        window.addEventListener("mousemove", resize)
    });

    function resize(e) {

        var resizers = document.getElementsByClassName(IDname);

        for (let i = 0; i < resizers.length; i++) {
            if (resizers[i].classList.contains("ResizerResizingBar")) {
                var resizer = resizers[i];
            }
            if (resizers[i].classList.contains("ResizerMainScreen")) {
                var mainScreen = resizers[i];
            }
            if (resizers[i].classList.contains("ResizerSecondaryScreen")) {
                var secondaryScreen = resizers[i];
            }
        }

        if (direction == "WE") {
            mainScreen.style.width = (e.pageX - (resizer.offsetWidth / 2)) - mainScreen.offsetLeft + "px";
            secondaryScreen.style.width = secondaryScreen.parentNode.offsetWidth - mainScreen.offsetWidth - resizer.offsetWidth + "px";
        }
        // else if (direction == "NS") {
        //     if (e.pageY > 200 && e.pageY < window.innerHeight - 150) {
        //         bottomScreen.style.height = window.innerHeight - e.pageY - 5 + "px";
        //     }
        // }
    }

    function StopResize() {
        window.removeEventListener("mousemove", resize);
    }
}