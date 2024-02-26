function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', function () {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    })

    missionAbort.addEventListener('mouseover', function ( event ) {
        missionAbort.style.backgroundColor = 'red'
    })

    missionAbort.addEventListener('mouseout', function ( event ) {
        missionAbort.style.backgroundColor = ''
    })

    missionAbort.addEventListener('click', function (event) {
    //    window.confirm('Are you sure you want to abort the mission?');
       if (window.confirm('Are you sure you want to abort the mission?') == true) {
        paragraph.innerHTML = 'Mission Aborted! Space shuttle returning home.'
       }
    })


}

window.addEventListener("load", init);
