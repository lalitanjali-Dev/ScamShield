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

const typeButtons = document.querySelectorAll(".type-btn");
const inputTypes = document.querySelectorAll(".input-type");

const senderEmail = document.getElementById("senderEmail");
const emailSubject = document.getElementById("emailSubject");
const emailBody = document.getElementById("emailBody");

const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");

const urlInput = document.getElementById("urlInput");

const analyzeAgainBtn =
    document.getElementById("analyzeAgainBtn");


/* ================= CURRENT TYPE ================= */

let currentType = "message";


/* ================= CHARACTER COUNT ================= */

if (messageInput) {

    messageInput.addEventListener("input", function () {

        const count = messageInput.value.length;

        characterCount.textContent =
            count + " characters";

    });

}


/* ================= TYPE SELECTION ================= */

typeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        typeButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentType = button.dataset.type;

        inputTypes.forEach(function (section) {

            section.classList.add("hidden");

        });

        const selectedSection =
            document.getElementById(
                currentType + "Analyzer"
            );

        if (selectedSection) {
            selectedSection.classList.remove("hidden");
        }

        /* Hide old result */

        result.classList.add("hidden");

    });

});


/* ================= IMAGE PREVIEW ================= */

if (imageInput) {

    imageInput.addEventListener("change", function () {

        const file = imageInput.files[0];

        if (!file) {
            imagePreview.innerHTML = "";
            return;
        }

        if (!file.type.startsWith("image/")) {

            alert("Please select an image file.");

            imageInput.value = "";

            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            imagePreview.innerHTML = `
                <img src="${event.target.result}" alt="Uploaded screenshot">
            `;

        };

        reader.readAsDataURL(file);

    });

}


/* ================================================= */
/* =============== TEXT ANALYZER =================== */
/* ================================================= */

function analyzeText(text) {

    const message = text.toLowerCase().trim();

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


    return {
        score: score,
        reasons: reasons
    };

}


/* ================================================= */
/* ================ URL ANALYZER =================== */
/* ================================================= */

function analyzeURL(url) {

    let score = 0;

    let reasons = [];

    const originalURL = url.trim();

    let parsedURL;


    /* Add protocol if missing */

    let urlForParsing = originalURL;

    if (
        !urlForParsing.startsWith("http://") &&
        !urlForParsing.startsWith("https://")
    ) {

        urlForParsing = "https://" + urlForParsing;

    }


    try {

        parsedURL = new URL(urlForParsing);

    }

    catch (error) {

        return {
            score: 60,
            reasons: [
                "The entered URL format appears invalid or unusual."
            ]
        };

    }


    /* ================= HTTP ================= */

    if (parsedURL.protocol === "http:") {

        score += 15;

        reasons.push(
            "The URL does not use HTTPS."
        );

    }


    /* ================= IP ADDRESS ================= */

    const ipPattern =
        /^(?:\d{1,3}\.){3}\d{1,3}$/;

    if (
        ipPattern.test(parsedURL.hostname)
    ) {

        score += 25;

        reasons.push(
            "The URL uses an IP address instead of a normal domain name."
        );

    }


    /* ================= USERNAME IN URL ================= */

    if (parsedURL.username) {

        score += 20;

        reasons.push(
            "The URL contains embedded username information."
        );

    }


    /* ================= PUNYCODE ================= */

    if (
        parsedURL.hostname.includes("xn--")
    ) {

        score += 25;

        reasons.push(
            "The domain contains encoded characters that may be difficult to verify."
        );

    }


    /* ================= SHORTENED LINKS ================= */

    const shorteners = [
        "bit.ly",
        "tinyurl.com",
        "t.co",
        "shorturl.at",
        "goo.gl"
    ];

    if (
        shorteners.includes(
            parsedURL.hostname.toLowerCase()
        )
    ) {

        score += 15;

        reasons.push(
            "The URL uses a link-shortening service."
        );

    }


    /* ================= SUSPICIOUS WORDS ================= */

    const suspiciousWords = [
        "login",
        "verify",
        "verification",
        "account",
        "secure",
        "update",
        "claim",
        "prize",
        "winner",
        "payment",
        "refund",
        "urgent",
        "wallet",
        "kyc"
    ];


    const urlText =
        originalURL.toLowerCase();


    let foundSuspiciousWord = false;


    suspiciousWords.forEach(function (word) {

        if (urlText.includes(word)) {
            foundSuspiciousWord = true;
        }

    });


    if (foundSuspiciousWord) {

        score += 15;

        reasons.push(
            "The URL contains words commonly associated with account or payment actions."
        );

    }


    /* ================= LONG URL ================= */

    if (originalURL.length > 120) {

        score += 10;

        reasons.push(
            "The URL is unusually long."
        );

    }


    /* ================= MANY SUBDOMAINS ================= */

    const domainParts =
        parsedURL.hostname.split(".");

    if (domainParts.length >= 4) {

        score += 10;

        reasons.push(
            "The domain contains multiple subdomains."
        );

    }


    /* ================= LIMIT ================= */

    if (score > 100) {
        score = 100;
    }


    if (reasons.length === 0) {

        reasons.push(
            "No obvious suspicious URL indicators were detected."
        );

    }


    return {
        score: score,
        reasons: reasons
    };

}


/* ================================================= */
/* ================ EMAIL ANALYZER ================= */
/* ================================================= */

function analyzeEmail() {

    const sender =
        senderEmail.value.trim();

    const subject =
        emailSubject.value.trim();

    const body =
        emailBody.value.trim();


    if (
        sender === "" &&
        subject === "" &&
        body === ""
    ) {

        alert("Please enter email details first.");

        return null;

    }


    const combinedText =
        sender + " " +
        subject + " " +
        body;


    const textResult =
        analyzeText(combinedText);


    let score =
        textResult.score;

    let reasons =
        [...textResult.reasons];


    /* ================= EMAIL FORMAT ================= */

    if (sender !== "") {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(sender)) {

            score += 15;

            reasons.push(
                "The sender email address has an unusual or invalid format."
            );

        }

    }


    /* ================= SUSPICIOUS SENDER PATTERN ================= */

    if (sender !== "") {

        const senderDomain =
            sender.split("@")[1];

        if (senderDomain) {

            const numberCount =
                (senderDomain.match(/\d/g) || []).length;

            if (numberCount >= 3) {

                score += 10;

                reasons.push(
                    "The sender domain contains several numbers and should be verified carefully."
                );

            }

        }

    }


    /* ================= EMAIL SUBJECT ================= */

    const lowerSubject =
        subject.toLowerCase();


    if (
        lowerSubject.includes("urgent") ||
        lowerSubject.includes("immediately") ||
        lowerSubject.includes("action required") ||
        lowerSubject.includes("account blocked") ||
        lowerSubject.includes("verify")
    ) {

        score += 15;

        reasons.push(
            "The email subject uses urgency or account-action language."
        );

    }


    if (score > 100) {
        score = 100;
    }


    if (reasons.length === 0) {

        reasons.push(
            "No obvious scam indicators were detected in this email."
        );

    }


    return {
        score: score,
        reasons: reasons
    };

}


/* ================================================= */
/* =============== IMAGE OCR ======================= */
/* ================================================= */

async function analyzeImage() {

    const file =
        imageInput.files[0];


    if (!file) {

        alert(
            "Please upload a screenshot or image first."
        );

        return null;

    }


    if (
        typeof Tesseract === "undefined"
    ) {

        alert(
            "OCR library is not loaded. Please check your internet connection."
        );

        return null;

    }


    analyzeBtn.disabled = true;

    analyzeBtn.textContent =
        "🔄 Reading Image...";


    try {

        const resultOCR =
            await Tesseract.recognize(
                file,
                "eng",
                {
                    logger: function (info) {

                        if (
                            info.status ===
                            "recognizing text"
                        ) {

                            const percent =
                                Math.round(
                                    info.progress * 100
                                );

                            analyzeBtn.textContent =
                                "🔄 Reading " +
                                percent +
                                "%";

                        }

                    }
                }
            );


        const extractedText =
            resultOCR.data.text.trim();


        if (extractedText === "") {

            alert(
                "No readable text was found in this image."
            );

            return null;

        }


        const textResult =
            analyzeText(extractedText);


        return {
            score: textResult.score,
            reasons: textResult.reasons,
            extractedText: extractedText
        };

    }

    catch (error) {

        console.error(
            "OCR Error:",
            error
        );

        alert(
            "Unable to read the image. Please try another screenshot."
        );

        return null;

    }

    finally {

        analyzeBtn.disabled = false;

        analyzeBtn.textContent =
            "🔍 Analyze";

    }

}


/* ================================================= */
/* =============== SHOW RESULT ===================== */
/* ================================================= */

function showResult(score, reasons, extraInfo = "") {

    let level;

    let advice;


    /* ================= RISK LEVEL ================= */

    if (score >= 70) {

        level = "HIGH RISK";

        advice =
            "Do not click links, send money, or share OTPs, passwords, PINs or banking information. Verify the information using the organization's official website or official contact number.";

    }

    else if (score >= 40) {

        level = "MEDIUM RISK";

        advice =
            "Be careful. Independently verify the sender and information before taking action. Do not share sensitive information until you confirm the message is genuine.";

    }

    else {

        level = "LOW RISK";

        advice =
            "No major warning signs were detected. However, this does not guarantee that the content is safe. Always verify unexpected messages before taking action.";

    }


    /* ================= SHOW RESULT ================= */

    result.classList.remove("hidden");

    riskLevel.textContent =
        level;

    riskScore.textContent =
        score;

    progressBar.style.width =
        score + "%";


    /* ================= REMOVE OLD COLORS ================= */

    riskLevel.classList.remove(
        "low",
        "medium",
        "high"
    );


    const scoreBox =
        document.querySelector(".score-box");


    if (scoreBox) {

        scoreBox.classList.remove(
            "low",
            "medium",
            "high"
        );

    }


    progressBar.classList.remove(
        "low",
        "medium",
        "high"
    );


    /* ================= APPLY COLOR ================= */

    if (score >= 70) {

        riskLevel.classList.add("high");

        if (scoreBox) {
            scoreBox.classList.add("high");
        }

        progressBar.classList.add("high");

    }

    else if (score >= 40) {

        riskLevel.classList.add("medium");

        if (scoreBox) {
            scoreBox.classList.add("medium");
        }

        progressBar.classList.add("medium");

    }

    else {

        riskLevel.classList.add("low");

        if (scoreBox) {
            scoreBox.classList.add("low");
        }

        progressBar.classList.add("low");

    }


    /* ================= DISPLAY REASONS ================= */

    reasonsList.innerHTML = "";


    reasons.forEach(function (reason) {

        const li =
            document.createElement("li");

        li.textContent =
            reason;

        reasonsList.appendChild(li);

    });


    /* ================= EXTRA INFO ================= */

    if (extraInfo !== "") {

        const li =
            document.createElement("li");

        li.textContent =
            extraInfo;

        reasonsList.appendChild(li);

    }


    /* ================= ADVICE ================= */

    recommendation.textContent =
        advice;


    /* ================= SAVE HISTORY ================= */

    saveHistory({
        type: currentType,
        score: score,
        level: level,
        reasons: reasons,
        analyzedAt:
            new Date().toLocaleString()
    });


    /* ================= SCROLL ================= */

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* ================================================= */
/* =============== SAVE HISTORY ==================== */
/* ================================================= */

function saveHistory(data) {

    let history =
        JSON.parse(
            localStorage.getItem(
                "analysisHistory"
            )
        ) || [];


    history.push(data);


    localStorage.setItem(
        "analysisHistory",
        JSON.stringify(history)
    );

}


/* ================================================= */
/* =============== ANALYZE BUTTON ================== */
/* ================================================= */

analyzeBtn.addEventListener(
    "click",
    async function () {

        let analysisResult = null;

        let extraInfo = "";


        /* ================= MESSAGE ================= */

        if (currentType === "message") {

            const message =
                messageInput.value
                    .trim();


            if (message === "") {

                alert(
                    "Please enter a suspicious message first."
                );

                return;

            }


            analysisResult =
                analyzeText(message);

        }


        /* ================= EMAIL ================= */

        else if (currentType === "email") {

            analysisResult =
                analyzeEmail();

        }


        /* ================= URL ================= */

        else if (currentType === "url") {

            const url =
                urlInput.value.trim();


            if (url === "") {

                alert(
                    "Please enter a URL first."
                );

                return;

            }


            analysisResult =
                analyzeURL(url);

        }


        /* ================= IMAGE ================= */

        else if (currentType === "image") {

            analysisResult =
                await analyzeImage();


            if (
                analysisResult &&
                analysisResult.extractedText
            ) {

                extraInfo =
                    "Text extracted from the uploaded image and analyzed successfully.";

            }

        }


        /* ================= FAILED ================= */

        if (!analysisResult) {
            return;
        }


        showResult(
            analysisResult.score,
            analysisResult.reasons,
            extraInfo
        );

    }
);


/* ================================================= */
/* ================= CLEAR ========================= */
/* ================================================= */

clearBtn.addEventListener(
    "click",
    function () {

        messageInput.value = "";

        characterCount.textContent =
            "0 characters";


        if (senderEmail) {
            senderEmail.value = "";
        }

        if (emailSubject) {
            emailSubject.value = "";
        }

        if (emailBody) {
            emailBody.value = "";
        }

        if (imageInput) {
            imageInput.value = "";
        }

        if (imagePreview) {
            imagePreview.innerHTML = "";
        }

        if (urlInput) {
            urlInput.value = "";
        }


        result.classList.add("hidden");

        riskScore.textContent =
            "0";

        riskLevel.textContent =
            "HIGH RISK";

        progressBar.style.width =
            "0%";

        reasonsList.innerHTML =
            "";

        recommendation.textContent =
            "";

    }
);


/* ================================================= */
/* =============== ANALYZE AGAIN =================== */
/* ================================================= */

if (analyzeAgainBtn) {

    analyzeAgainBtn.addEventListener(
        "click",
        function () {

            result.classList.add("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* ================================================= */
/* =============== LOAD OCR LIBRARY ================ */
/* ================================================= */

(function loadTesseract() {

    if (window.Tesseract) {
        return;
    }


    const script =
        document.createElement("script");

    script.src =
        "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";

    script.onload =
        function () {

            console.log(
                "Tesseract OCR loaded successfully."
            );

        };


    script.onerror =
        function () {

            console.error(
                "Unable to load Tesseract OCR."
            );

        };


    document.head.appendChild(script);

})();