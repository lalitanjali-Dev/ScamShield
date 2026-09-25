import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { auth } from "./firebase-config.js";


const signupForm = document.getElementById("signupForm");


signupForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    /* ================= GET USER INPUT ================= */

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    /* ================= PASSWORD CHECK ================= */

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    /* ================= CREATE FIREBASE ACCOUNT ================= */

    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );


        const user = userCredential.user;


        /* ================= SAVE USER NAME ================= */

        await updateProfile(user, {

            displayName: name

        });


        /* ================= SUCCESS MESSAGE ================= */

        const successBox =
            document.createElement("div");

        successBox.className =
            "account-success";

        successBox.innerHTML = `

            <div class="success-check">
                ✓
            </div>

            <div>

                <strong>
                    Account Created!
                </strong>

                <p>
                    Your ScamShield account is ready.
                </p>

            </div>

        `;


        document.body.appendChild(successBox);


        /* ================= GO TO LOGIN ================= */

        setTimeout(function () {

            window.location.href = "login.html";

        }, 1500);


    } catch (error) {


        /* ================= FIREBASE ERRORS ================= */

        if (error.code === "auth/email-already-in-use") {

            alert(
                "An account with this email already exists."
            );

        }

        else if (error.code === "auth/weak-password") {

            alert(
                "Password is too weak. Please use a stronger password."
            );

        }

        else if (error.code === "auth/invalid-email") {

            alert(
                "Please enter a valid email address."
            );

        }

        else {

            alert(
                "Account creation failed. Please try again."
            );

            console.error(error);

        }

    }

});