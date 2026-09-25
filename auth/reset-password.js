import {
    verifyPasswordResetCode,
    confirmPasswordReset
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { auth } from "./firebase-config.js";


/* ================= GET ELEMENTS ================= */

const resetForm =
    document.getElementById("resetPasswordForm");

const resetError =
    document.getElementById("resetError");

const resetSuccess =
    document.getElementById("resetSuccess");

const accountEmail =
    document.getElementById("accountEmail");

const newPassword =
    document.getElementById("newPassword");

const confirmPassword =
    document.getElementById("confirmPassword");

const resetButton =
    document.getElementById("resetButton");

const toggleNewPassword =
    document.getElementById("toggleNewPassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


/* ================= GET RESET CODE ================= */

const urlParams =
    new URLSearchParams(window.location.search);

const mode =
    urlParams.get("mode");

const actionCode =
    urlParams.get("oobCode");


/* ================= CHECK RESET LINK ================= */

if (
    mode !== "resetPassword" ||
    !actionCode
) {

    showError(
        "Invalid Reset Link",
        "This password reset link is invalid or incomplete."
    );

}


/* ================= VERIFY RESET CODE ================= */

else {

    verifyPasswordResetCode(
        auth,
        actionCode
    )

    .then(function (email) {

        accountEmail.textContent = email;

    })

    .catch(function (error) {

        console.error(error);

        resetForm.style.display = "none";

        showError(
            "Link Expired",
            "This password reset link is invalid or has expired. Please request a new reset link."
        );

    });

}


/* ================= RESET PASSWORD ================= */

resetForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const password =
            newPassword.value;

        const confirm =
            confirmPassword.value;


        /* ================= PASSWORD MATCH ================= */

        if (password !== confirm) {

            showError(
                "Passwords Do Not Match",
                "Please enter the same password in both fields."
            );

            return;

        }


        /* ================= PASSWORD LENGTH ================= */

        if (password.length < 6) {

            showError(
                "Password Too Short",
                "Password must contain at least 6 characters."
            );

            return;

        }


        /* ================= RESET PASSWORD ================= */

        try {

            resetButton.disabled = true;

            resetButton.textContent =
                "Resetting Password...";


            await confirmPasswordReset(
                auth,
                actionCode,
                password
            );


            /* ================= HIDE FORM ================= */

            resetForm.style.display = "none";


            resetError.classList.add("hidden");


            /* ================= SHOW SUCCESS ================= */

            resetSuccess.classList.remove("hidden");


            /* ================= GO TO LOGIN ================= */

            setTimeout(function () {

                window.location.href =
                    "login.html";

            }, 2500);


        }

        catch (error) {

            console.error(error);

            resetButton.disabled = false;

            resetButton.textContent =
                "🔒 Reset Password";


            if (
                error.code ===
                "auth/weak-password"
            ) {

                showError(
                    "Weak Password",
                    "Please choose a stronger password."
                );

            }

            else if (
                error.code ===
                "auth/expired-action-code"
            ) {

                showError(
                    "Link Expired",
                    "This reset link has expired. Please request a new one."
                );

            }

            else if (
                error.code ===
                "auth/invalid-action-code"
            ) {

                showError(
                    "Invalid Reset Link",
                    "This reset link is invalid or has already been used."
                );

            }

            else {

                showError(
                    "Reset Failed",
                    "Something went wrong. Please request a new reset link."
                );

            }

        }

    }
);


/* ================= ERROR FUNCTION ================= */

function showError(title, message) {

    resetError.className =
        "login-error";


    resetError.innerHTML = `

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

}


/* ================= PASSWORD TOGGLE ================= */

toggleNewPassword.addEventListener(
    "click",
    function () {

        if (
            newPassword.type ===
            "password"
        ) {

            newPassword.type = "text";

            toggleNewPassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

        else {

            newPassword.type = "password";

            toggleNewPassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        }

    }
);


/* ================= CONFIRM PASSWORD TOGGLE ================= */

toggleConfirmPassword.addEventListener(
    "click",
    function () {

        if (
            confirmPassword.type ===
            "password"
        ) {

            confirmPassword.type = "text";

            toggleConfirmPassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

        else {

            confirmPassword.type = "password";

            toggleConfirmPassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        }

    }
);
