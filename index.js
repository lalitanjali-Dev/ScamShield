/* =====================================================
   SCAMSHIELD HOME PAGE
   ===================================================== */


/* ================= GET ELEMENTS ================= */

const loggedHome =
    document.getElementById("loggedHome");

const publicHome =
    document.getElementById("publicHome");

const loggedUserName =
    document.getElementById("loggedUserName");

const loggedWelcomeName =
    document.getElementById("loggedWelcomeName");

const logoutBtn =
    document.getElementById("logoutBtn");


/* =====================================================
   DEFAULT STATE
   ===================================================== */

/*
   Whenever index.html is opened directly,
   Public Home is shown first.
*/

publicHome.style.display = "block";
loggedHome.style.display = "none";


/* =====================================================
   CHECK LOGIN
   ===================================================== */

const isLoggedIn =
    sessionStorage.getItem("isLoggedIn");

const userName =
    sessionStorage.getItem("userName");


/* =====================================================
   SHOW WELCOME HOME ONLY AFTER LOGIN
   ===================================================== */

if (
    isLoggedIn === "true" &&
    userName
) {

    publicHome.style.display = "none";

    loggedHome.style.display = "block";

    loggedUserName.textContent =
        userName;

    loggedWelcomeName.textContent =
        userName;
}


/* =====================================================
   LOGOUT
   ===================================================== */

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            sessionStorage.removeItem(
                "isLoggedIn"
            );

            sessionStorage.removeItem(
                "userName"
            );

            sessionStorage.removeItem(
                "userEmail"
            );

            window.location.href =
                "index.html";
        }
    );
}