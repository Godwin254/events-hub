/********************
1. add effects on the browser
2. fire events
3. 

variables
**********************
*/

$(document).ready(function () {
  console.log("CONNECTED!");

  //invoke function
  home();
});

//animate main page elements
function home() {
  console.log("Home effects");
  let header = $(".banner .home .content > h1");
  let desc = $(".home .content > h6");
  let hbtn = $(".home .content > a input");

  hbtn.click(function (e) {
    e.preventDefault();

    console.log("Clicked home button");
  });

  hbtn.css({
    visibility: "hidden",
  });

  header.animate(
    {
      //fontSize: "3.8em",
      fontWeight: "bold"
    },
    1000,
    () => {
      console.log("h1 and h6 animated");

      hbtn.css({
        visibility: "visible",
      });
    }
  );
}
