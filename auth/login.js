import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { auth } from "./firebase-config.js";


const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");


/* ================= LOGIN FORM ================= */

loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    /* ================= GET USER INPUT ================= */

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;


    /* ================= HIDE OLD ERROR ================= */

    loginError.classList.add("hidden");


    /* ================= FIREBASE LOGIN ================= */

    try {

        const userCredential =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );


        const user = userCredential.user;


        /* ================= SAVE LOGIN SESSION ================= */

        sessionStorage.setItem(
            "isLoggedIn",
            "true"
        );

        sessionStorage.setItem(
            "userName",
            user.displayName || "User"
        );

        sessionStorage.setItem(
            "userEmail",
            user.email
        );


        /* ================= SUCCESS MESSAGE ================= */

        showLoginSuccess();


        /* ================= GO TO HOME ================= */

        setTimeout(function () {

            window.location.href = "../index.html";

        }, 1500);


    } catch (error) {


        console.error(error);


        /* ================= LOGIN ERRORS ================= */

        if (
            error.code === "auth/invalid-credential" ||
            error.code === "auth/wrong-password" ||
            error.code === "auth/user-not-found"
        ) {

            showLoginError(
                "Invalid Credentials",
                "Please enter the correct email or password."
            );

        }

        else if (error.code === "auth/invalid-email") {

            showLoginError(
                "Invalid Email",
                "Please enter a valid email address."
            );

        }

        else {

            showLoginError(
                "Login Failed",
                "Something went wrong. Please try again."
            );

        }

    }

});


/* ================================================= */
/* ERROR MESSAGE */
/* ================================================= */

function showLoginError(title, message) {

    loginError.innerHTML = `

        <span class="error-icon">
            ✕
        </span>

        <div>

            <strong>
                ${title}
            </strong>

            <p>
                ${message}
            </p>

        </div>

    `;


    loginError.classList.remove("hidden");


    setTimeout(function () {

        loginError.classList.add("hidden");

    }, 5000);

}


/* ================================================= */
/* SUCCESS MESSAGE */
/* ================================================= */

function showLoginSuccess() {

    const successBox =
        document.createElement("div");


    successBox.className =
        "login-success";


    successBox.innerHTML = `

        <div class="success-check">
            ✓
        </div>

        <div>

            <strong>
                Login Successful
            </strong>

            <p>
                Welcome back to ScamShield!
            </p>

        </div>

    `;


    document.body.appendChild(successBox);


    setTimeout(function () {

        successBox.remove();

    }, 5000);

}


/* ================================================= */
/* PASSWORD SHOW / HIDE */
/* ================================================= */

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

        togglePassword.setAttribute(
            "aria-label",
            "Hide password"
        );

    }

    else {

        passwordInput.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );

    }

});