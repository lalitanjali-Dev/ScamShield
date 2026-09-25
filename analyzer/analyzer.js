/* ================= ELEMENTS ================= */

const messageInput = document.getElementById("message");
const analyzeBtn = document.getElementById("analyzeBtn");
const clearBtn = document.getElementById("clearBtn");

const result = document.getElementById("result");
const riskLevel = document.getElementById("riskLevel");
const riskScore = document.getElementById("riskScore");
const progressBar = document.getElementById("progressBar");
const reasonsList = document.getElementById("reasons");
const recommendation = document.getElementById("recommendation");
const characterCount = document.getElementById("characterCount");


/* ================= CHARACTER COUNT ================= */

messageInput.addEventListener("input", function () {

    const count = messageInput.value.length;

    characterCount.textContent = count + " characters";

});


/* ================= ANALYZE MESSAGE ================= */

analyzeBtn.addEventListener("click", function () {

    const message = messageInput.value.toLowerCase().trim();


    /* EMPTY MESSAGE */

    if (message === "") {

        alert("Please enter a suspicious message first.");

        return;
    }


    let score = 0;

    let reasons = [];


    /* ================= FINANCIAL LANGUAGE ================= */

    if (
        message.includes("money") ||
        message.includes("₹") ||
        message.includes("rs.") ||
        message.includes("rupees") ||
        message.includes("cash") ||
        message.includes("payment") ||
        message.includes("bank") ||
        message.includes("transaction")
    ) {

        score += 15;

        reasons.push(
            "Financial or payment-related language detected."
        );

    }


    /* ================= PRIZE / REWARD ================= */

    if (
        message.includes("won") ||
        message.includes("winner") ||
        message.includes("prize") ||
        message.includes("lottery") ||
        message.includes("reward") ||
        message.includes("congratulations") ||
        message.includes("lakh")
    ) {

        score += 25;

        reasons.push(
            "Prize or reward-related language detected."
        );

    }


    /* ================= URGENCY ================= */

    if (
        message.includes("urgent") ||
        message.includes("immediately") ||
        message.includes("act now") ||
        message.includes("limited time") ||
        message.includes("expires") ||
        message.includes("within 24 hours") ||
        message.includes("today only") ||
        message.includes("last chance")
    ) {

        score += 20;

        reasons.push(
            "Urgency or pressure tactics detected."
        );

    }


    /* ================= OTP / PASSWORD ================= */

    if (
        message.includes("otp") ||
        message.includes("password") ||
        message.includes("pin") ||
        message.includes("cvv") ||
        message.includes("verification code") ||
        message.includes("security code")
    ) {

        score += 25;

        reasons.push(
            "Sensitive credential request detected."
        );

    }


    /* ================= SUSPICIOUS LINK ================= */

    if (
        message.includes("http") ||
        message.includes("www.") ||
        message.includes("click") ||
        message.includes("link") ||
        message.includes("bit.ly") ||
        message.includes("tinyurl")
    ) {

        score += 15;

        reasons.push(
            "Suspicious link or click request detected."
        );

    }


    /* ================= JOB SCAM ================= */

    if (
        message.includes("job offer") ||
        message.includes("work from home") ||
        message.includes("registration fee") ||
        message.includes("job vacancy") ||
        message.includes("earn money") ||
        message.includes("joining fee") ||
        message.includes("training fee")
    ) {

        score += 20;

        reasons.push(
            "Possible fake job or employment scam detected."
        );

    }


    /* ================= KYC / ACCOUNT ================= */

    if (
        message.includes("kyc") ||
        message.includes("account blocked") ||
        message.includes("account will be blocked") ||
        message.includes("update your account") ||
        message.includes("account needs verification") ||
        message.includes("verify your account") ||
        message.includes("verify your details") ||
        message.includes("update your details") ||
        message.includes("account verification")
    ) {

        score += 30;

        reasons.push(
            "Possible KYC or account verification scam detected."
        );

    }


    /* ================= BANK / OFFICIAL IMPERSONATION ================= */

    if (
        message.includes("bank official") ||
        message.includes("bank employee") ||
        message.includes("customer care") ||
        message.includes("customer support") ||
        message.includes("rbi") ||
        message.includes("police officer") ||
        message.includes("government officer") ||
        message.includes("income tax")
    ) {

        score += 20;

        reasons.push(
            "Possible impersonation of an official or trusted organization detected."
        );

    }


    /* ================= THREATS ================= */

    if (
        message.includes("legal action") ||
        message.includes("police complaint") ||
        message.includes("you will be arrested") ||
        message.includes("arrest") ||
        message.includes("penalty") ||
        message.includes("account will be closed") ||
        message.includes("account will be suspended")
    ) {

        score += 25;

        reasons.push(
            "Threatening or fear-based language detected."
        );

    }


    /* ================= UPI / QR SCAM ================= */

    if (
        message.includes("upi") ||
        message.includes("qr code") ||
        message.includes("scan this qr") ||
        message.includes("upi pin") ||
        message.includes("collect request")
    ) {

        score += 20;

        reasons.push(
            "UPI or QR payment-related scam indicator detected."
        );

    }


    /* ================= PERSONAL INFORMATION ================= */

    if (
        message.includes("aadhaar") ||
        message.includes("aadhar") ||
        message.includes("pan card") ||
        message.includes("date of birth") ||
        message.includes("card number") ||
        message.includes("account number") ||
        message.includes("personal details")
    ) {

        score += 20;

        reasons.push(
            "Request for sensitive personal information detected."
        );

    }


    /* ================= INVESTMENT SCAM ================= */

    if (
        message.includes("investment") ||
        message.includes("guaranteed returns") ||
        message.includes("double your money") ||
        message.includes("crypto") ||
        message.includes("trading profit") ||
        message.includes("high returns")
    ) {

        score += 25;

        reasons.push(
            "Possible investment or financial fraud language detected."
        );

    }


    /* ================= REMOTE ACCESS SCAM ================= */

    if (
        message.includes("anydesk") ||
        message.includes("teamviewer") ||
        message.includes("remote access") ||
        message.includes("screen sharing") ||
        message.includes("share your screen")
    ) {

        score += 30;

        reasons.push(
            "Remote access or screen-sharing request detected."
        );

    }


    /* ================= DELIVERY SCAM ================= */

    if (
        message.includes("parcel") ||
        message.includes("delivery") ||
        message.includes("courier") ||
        message.includes("customs fee") ||
        message.includes("delivery charge")
    ) {

        score += 15;

        reasons.push(
            "Possible fake delivery or courier scam detected."
        );

    }


    /* ================= LIMIT SCORE ================= */

    if (score > 100) {
        score = 100;
    }


    /* ================= NO INDICATORS ================= */

    if (reasons.length === 0) {

        reasons.push(
            "No obvious scam indicators were detected."
        );

    }


    /* ================= RISK LEVEL ================= */

    let level;
    let advice;


    if (score >= 70) {

        level = "HIGH RISK";

        advice =
            "Do not click links, send money, or share OTPs, passwords, PINs or banking information. Verify the message using the organization's official website or official contact number.";

    }

    else if (score >= 40) {

        level = "MEDIUM RISK";

        advice =
            "Be careful. Independently verify the sender and information before taking action. Do not share sensitive information until you confirm the message is genuine.";

    }

    else {

        level = "LOW RISK";

        advice =
            "No major warning signs were detected. However, this does not guarantee that the message is safe. Always verify unexpected messages before taking action.";

    }


    /* ================= SHOW RESULT ================= */

    result.classList.remove("hidden");

    riskLevel.textContent = level;

    riskScore.textContent = score;

    progressBar.style.width = score + "%";


    /* ================= REMOVE OLD COLORS ================= */

    riskLevel.classList.remove(
        "low",
        "medium",
        "high"
    );

    document
        .querySelector(".score-box")
        .classList.remove(
            "low",
            "medium",
            "high"
        );

    progressBar.classList.remove(
        "low",
        "medium",
        "high"
    );


    /* ================= APPLY RISK COLOR ================= */

    if (score >= 70) {

        riskLevel.classList.add("high");

        document
            .querySelector(".score-box")
            .classList.add("high");

        progressBar.classList.add("high");

    }

    else if (score >= 40) {

        riskLevel.classList.add("medium");

        document
            .querySelector(".score-box")
            .classList.add("medium");

        progressBar.classList.add("medium");

    }

    else {

        riskLevel.classList.add("low");

        document
            .querySelector(".score-box")
            .classList.add("low");

        progressBar.classList.add("low");

    }


    /* ================= DISPLAY REASONS ================= */

    reasonsList.innerHTML = "";


    reasons.forEach(function (reason) {

        const li =
            document.createElement("li");

        li.textContent = reason;

        reasonsList.appendChild(li);

    });


    /* ================= DISPLAY ADVICE ================= */

    recommendation.textContent = advice;


    /* ================= SCROLL TO RESULT ================= */

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* ================= CLEAR ================= */

clearBtn.addEventListener("click", function () {

    messageInput.value = "";

    characterCount.textContent =
        "0 characters";

    result.classList.add("hidden");

    riskScore.textContent =
        "0";

    progressBar.style.width =
        "0%";

    reasonsList.innerHTML = "";

});