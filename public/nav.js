function navBar(){
    const html = `
            <ul>
                <li><a href="index">Home</a> </li>
                <li><a href="registration">Registration</a> </li>
                <li><a href="sample">Sample</a> </li>
                <li><a href="vacationPackages">Vacation Packages</a></li>
                <li><a href="contact"> Contact</a> </li>
                <li><a href="404"> 404 Page</a></li>
                <li id="timer"><a id="timeDisplay"></a></li>
            </ul>`
    document.getElementById("navbar").innerHTML = html;
}