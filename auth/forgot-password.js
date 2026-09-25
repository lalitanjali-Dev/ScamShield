import {
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { auth } from "./firebase-config.js";


const resetForm =
    document.getElementById("resetForm");

const resetError =
    document.getElementById("resetError");


resetForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value.trim();


    /* ================= SEND RESET EMAIL ================= */

    try {

       const actionCodeSettings = {
    url: "https://lalitanjali-dev.github.io/ScamShield/auth/reset-password.html",
    handleCodeInApp: true
};

await sendPasswordResetEmail(
    auth,
    email,
    actionCodeSettings
);


        /* ================= SUCCESS MESSAGE ================= */

        /* ================= SUCCESS MESSAGE ================= */

resetError.className = "reset-success";

resetError.innerHTML = `

    <span class="success-icon">
        ✓
    </span>

    <div>

        <strong>
            Reset Link Sent
        </strong>

        <p>
            A password reset link has been sent to
            your email address. Please check your inbox.
        </p>

    </div>

`;


/* ================= HIDE FORM ================= */

resetForm.style.display = "none";


    } catch (error) {

        console.error(error);


        /* ================= ERROR ================= */

        resetError.className =
            "login-error";

        resetError.style.borderColor =
            "#ff4d6d";

        resetError.style.color =
            "#ff4d6d";


        if (error.code === "auth/invalid-email") {

            resetError.innerHTML = `

                <span class="error-icon">
                    ✕
                </span>

                <div>

                    <strong>
                        Invalid Email
                    </strong>

                    <p>
                        Please enter a valid email address.
                    </p>

                </div>

            `;

        }

        else {

            resetError.innerHTML = `

                <span class="error-icon">
                    ✕
                </span>

                <div>

                    <strong>
                        Reset Failed
                    </strong>

                    <p>
                        Please check the email address
                        and try again.
                    </p>

                </div>

            `;

        }

    }

});
