function startTime() 
{
    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var mts = today.getMonth() + 1;
    var y = today.getFullYear();
    if (m<10)
        {m = "0" + m}
    if (s<10)
        {s= "0" + s}
    document.getElementById('timeDisplay').innerHTML = h + ":" + m + ":" + s + "   " + mts + "." + d + "." + y;
    setTimeout(startTime, 1000);
}

function navBar(){
    const navhtml = `
            <ul>
                <li><a href="index">Home</a> </li>
                <li><a href="registration">Registration</a> </li>
                <li><a href="sample">Sample</a> </li>
                <li><a href="vacationPackages">Vacation Packages</a></li>
                <li><a href="contact"> Contact</a> </li>
                <li><a href="404"> 404 Page</a></li>
                <li id="timer"><a id="timeDisplay"></a></li>
            </ul>`
    document.getElementById("navbar").innerHTML = navhtml;
    startTime();
}

function footer(){
    const foothtml = `
        <div class="text-container">
            <ul>
                <li><a href="index">Home Page</a></li>
                <li><a href="vacationPackages">Vacation Packages</a></li>
                <li><a href="registration">Register/Login</a></li>
                <li><a href="contact">Contact Us</a></li>
            </ul>
        </div>
        <div class="social-media-icons">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-youtube"></a>
            <a href="#" class="fa fa-instagram"></a>
        </div>
        <div class="copyright">
            <img src="transparent_logo.png" alt="Travel experts logo" />
            <p>&copy; 2023 Travel Experts LTD. All rights reserved.</p>
        </div>`
    document.getElementsByClassName("containerFoot")[0].innerHTML = foothtml;
}