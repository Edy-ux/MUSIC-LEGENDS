

const element = document.querySelector(".app");
// const fullScreen = elem.requestFullscreen

const openFullScreen = () => {
    // If no element is in full-screen
    if (IsFullScreenCurrently()) {
        GoInFullscreen()
    } else {
        GoOutFullscreen()
    }
}

function GoInFullscreen() {
    if (element.requestFullscreen)
        // element.requestFullscreen(); or
        element.requestFullscreen({ navigationUI: "show" })
   
}

//exit fullScren
function GoOutFullscreen() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else if (document.msExitFullscreen)
        document.msExitFullscreen();
}

function IsFullScreenCurrently() {
    var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;

    if (full_screen_element === null)
        return true;
    else
        return false;
}

