(function(){
    //console.log("CONNECTED!!");

    let disBtn = document.getElementById("disc");
    let signup = document.getElementById("signup");

    console.log(signup);

    disBtn.addEventListener('click',(e) => {
        e.preventDefault();

        console.log("CONNECTED!!");
        window.location.href = "./html/events.html";
    });
    //window.alert("Welcome to Events hub");

    //handles click on signup button
    signup.addEventListener('click', () => {
        //e.preventDefault();
        console.log("Sign up");
        window.location.href = "./html/signup.html";

    });

    //variables

    //dom-manpulation

    //http requests
})()//end anonymous function