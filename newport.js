window.onload = function () {
  console.log("coundown started...");

  let seconds = 10;
  const btn = document.getElementById("profilebtn");

  const countdown = setInterval(function () {
    seconds--;
    if (btn) {
      btn.innerText = "Profile(" + seconds + "s)";
    }
    if (seconds <= 0) {
      clearInterval(countdown);
      console.log("Redirecting now...");
      window.location.href = "main.html";
    }
  }, 1000);
};
