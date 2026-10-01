# 🛡️ ScamShield

### Stay Safe. Detect Scams. Report Suspicious Activity.

**ScamShield** is a web-based cybersecurity awareness and scam detection project developed by **Lalitanjali**.

It helps users identify suspicious **messages, emails, images/screenshots, and URLs** by checking them for common scam warning signs. The project also provides information about common scam types, analysis history, scam reporting, user authentication, and cyber safety awareness.

---

## 👩‍💻 Developed By

**Lalitanjali**

B.Tech Computer Science Engineering

**GitHub:**
https://github.com/lalitanjali-dev

---

## 🌐 Live Demo

**ScamShield Website:**
https://lalitanjali-dev.github.io/ScamShield/

---

# 📌 About the Project

Online scams are becoming increasingly common through:

* SMS and text messages
* Emails
* Fake websites
* Fake job offers
* Payment requests
* OTP requests
* KYC messages
* Lottery and prize messages
* Investment offers
* Social media impersonation
* Courier and parcel scams
* Fake loan applications

Many users may not easily recognize the warning signs of a scam.

**ScamShield** provides a simple platform where users can submit suspicious content and receive an analysis based on predefined scam indicators.

The analyzer provides:

* **Risk Score**
* **Risk Level**
* **Warning Signs**
* **Safety Recommendation**

The project is designed mainly for **cybersecurity awareness and educational purposes**.

---

# 🎯 Project Objectives

The main objectives of ScamShield are:

1. Help users identify common online scam warning signs.
2. Provide a simple scam analysis platform.
3. Analyze suspicious messages.
4. Analyze suspicious emails.
5. Analyze suspicious images and screenshots.
6. Analyze suspicious URLs.
7. Educate users about different types of online scams.
8. Maintain analysis history in the browser.
9. Allow users to report suspicious activities.
10. Provide user authentication.
11. Promote safer online behavior.

---

# ✨ Main Features

ScamShield contains the following major features:

| Feature             | Purpose                                   |
| ------------------- | ----------------------------------------- |
| 🔍 Scam Analyzer    | Analyze suspicious content                |
| 📱 Message Analysis | Check suspicious text messages            |
| 📧 Email Analysis   | Check suspicious emails                   |
| 🖼️ Image Analysis  | Extract and analyze text from screenshots |
| 🔗 URL Analysis     | Check suspicious website URLs             |
| 📚 Scam Types       | Learn about common online scams           |
| 🔎 Scam Search      | Search for a particular scam type         |
| 🕘 Analysis History | View previous analyses                    |
| 🚨 Report Scam      | Report suspicious activities              |
| 🔐 Authentication   | Login and account creation                |
| 🛡️ Cyber Safety    | Learn safe online practices               |

---

# 🔍 1. Scam Analyzer

The **Scam Analyzer** is the main feature of ScamShield.

Users can analyze four types of content:

* 📱 Message
* 📧 Email
* 🖼️ Image / Screenshot
* 🔗 URL

After analysis, ScamShield displays:

* Risk Score
* Risk Level
* Warning Signs
* Safety Recommendation

---

# 📊 Risk Levels

ScamShield uses a score from **0 to 100**.

| Risk Score | Risk Level     |
| ---------- | -------------- |
| 0–39       | 🟢 LOW RISK    |
| 40–69      | 🟡 MEDIUM RISK |
| 70–100     | 🔴 HIGH RISK   |

The maximum score is limited to **100**.

### 🟢 LOW RISK

No major warning signs were detected.

However, a low score does **not guarantee that the content is completely safe**.

### 🟡 MEDIUM RISK

Some suspicious warning signs were detected.

Users should independently verify the sender and information before taking action.

### 🔴 HIGH RISK

Several strong scam warning signs were detected.

Users should avoid:

* Clicking suspicious links
* Sending money
* Sharing OTPs
* Sharing passwords
* Sharing PINs
* Sharing banking information

---

# 📱 2. Message Analysis

Users can enter a suspicious SMS or message into the analyzer.

ScamShield checks for warning signs such as:

* Urgent requests
* OTP requests
* Password requests
* PIN requests
* CVV requests
* Suspicious links
* Prize or lottery claims
* KYC requests
* Account verification requests
* Payment requests
* Fake job offers
* Investment promises
* Threats
* UPI requests
* Personal information requests
* Remote-access requests
* Delivery and courier requests

### Example

```text
URGENT! Congratulations, you have won ₹50,000 in a lottery.
Your account will be blocked today unless you verify your details.
Click the link and share your OTP and UPI PIN to receive the prize.
```

The analyzer detects multiple warning signs and can classify this type of content as **HIGH RISK**.

---

# 📧 3. Email Analysis

Users can analyze suspicious emails by providing information such as:

* Sender email address
* Email subject
* Email content

ScamShield checks the email for suspicious indicators such as:

* Invalid email format
* Suspicious subject words
* Urgent requests
* Prize claims
* Payment requests
* OTP or password requests
* Suspicious links
* Account verification requests
* KYC requests
* Threatening language
* Suspicious sender patterns

The sender, subject, and email body are considered together during analysis.

---

# 🖼️ 4. Image / Screenshot Analysis

Scam messages are sometimes received as screenshots instead of text.

ScamShield allows users to upload an image or screenshot containing suspicious text.

The project uses **OCR (Optical Character Recognition)** to extract readable text from the image.

The extracted text is then passed to the scam analysis system.

### Example

A user receives a screenshot saying:

```text
Congratulations!
You won ₹50,000.
Click the link and provide your OTP.
```

Instead of manually typing the message, the user can upload the screenshot.

ScamShield:

1. Reads the text from the image.
2. Extracts the detected text.
3. Checks the text for scam indicators.
4. Calculates the risk score.
5. Displays the risk level and warning signs.

---

# 🔗 5. URL Analysis

ScamShield can also analyze suspicious website URLs.

The URL analyzer checks for indicators such as:

* HTTP instead of HTTPS
* IP address used as hostname
* Username inside URL
* Punycode domains
* URL shorteners
* Suspicious words
* Very long URLs
* Complex hostnames

Suspicious words may include:

* `login`
* `verify`
* `verification`
* `account`
* `secure`
* `update`
* `claim`
* `prize`
* `winner`
* `payment`
* `refund`
* `urgent`
* `wallet`
* `kyc`

### Example

```text
http://example.com/login/verify-account
```

The analyzer checks the URL structure and displays the detected warning signs.

---

# 📚 6. Scam Types

The **Scam Types** section helps users understand common online scams.

ScamShield provides information about:

1. Phishing Scams
2. Payment Scams
3. Fake Job Scams
4. OTP Scams
5. Lottery & Prize Scams
6. KYC Scams
7. UPI & QR Code Scams
8. Digital Arrest Scams
9. Investment Scams
10. Courier & Parcel Scams
11. Fake Loan App Scams
12. Social Media & Impersonation Scams

Each section explains the scam category and common warning signs.

---

# 🔎 7. Scam Search

The Scam Types page includes a search feature.

Users can type a scam name into the search box.

For example:

```text
OTP
```

The page filters the scam cards and shows the matching scam type.

This makes it easier for users to quickly find information.

---

# 🕘 8. Analysis History

ScamShield provides an **Analysis History** feature.

After a message, email, image, or URL is analyzed, the analysis information can be stored in the browser.

The history can contain:

* Analysis type
* Risk score
* Risk level
* Warning signs
* Date and time of analysis

Users can open the **History** page to review previous analyses.

The history is stored using the browser's **localStorage**.

### Important

Clearing the browser's stored site data can remove the saved analysis history.

---

# 🚨 9. Report Scam

ScamShield provides a **Report Scam** feature.

Users can report suspicious activities by entering information such as:

* Scam type
* Source
* Description
* Contact information

After submitting a report, ScamShield generates a **Report ID**.

The report information is stored in the browser for the project demonstration.

### Example Report ID

```text
SS-1723456789012
```

Users can also choose to submit another report after completing a report.

---

# 🔐 10. User Authentication

ScamShield includes user authentication features.

Users can:

* Create an account
* Log in
* Reset a forgotten password

Authentication is implemented using **Firebase Authentication**.

The authentication system helps demonstrate how user account management can be integrated into a web application.

---

# 🛡️ 11. Cyber Safety Awareness

ScamShield also focuses on cybersecurity awareness.

Users should follow basic safety practices:

* Never share OTPs with others.
* Never share passwords or PINs.
* Do not click unknown links.
* Verify suspicious messages independently.
* Do not send money to unknown people.
* Be careful with unexpected job offers.
* Be careful with prize and lottery messages.
* Verify KYC requests through official channels.
* Do not install unknown remote-access applications.
* Check website addresses before entering sensitive information.

---

# 🇮🇳 12. Cybercrime Reporting Information

ScamShield also provides information about India's cybercrime reporting system.

For cybercrime-related complaints, users can use the official:

**National Cyber Crime Reporting Portal**

https://cybercrime.gov.in/

The national cybercrime helpline number is:

**1930**

Users should use official government channels for reporting actual cybercrime incidents.

---

# ⚙️ How ScamShield Works

The basic workflow is:

```text
User
  ↓
Select Analysis Type
  ↓
Enter / Upload Suspicious Content
  ↓
ScamShield Checks Warning Signs
  ↓
Calculate Risk Score
  ↓
Determine Risk Level
  ↓
Display Warning Signs
  ↓
Show Safety Recommendation
```

---

# 🧠 Scam Detection Method

ScamShield currently uses a **rule-based detection approach**.

The analyzer searches for predefined suspicious indicators.

Examples include:

### Financial Indicators

```text
money
payment
bank
transaction
cash
₹
```

### Urgency Indicators

```text
urgent
immediately
act now
limited time
expires
last chance
```

### Credential Indicators

```text
OTP
password
PIN
CVV
verification code
```

### Prize Indicators

```text
winner
won
prize
lottery
reward
```

### KYC / Account Indicators

```text
KYC
account blocked
verify your account
update your details
account verification
```

### Job Scam Indicators

```text
job offer
work from home
registration fee
joining fee
training fee
earn money
```

### Remote Access Indicators

```text
AnyDesk
TeamViewer
remote access
screen sharing
```

Different indicators contribute different points to the risk score.

The final score is limited to **100**.

---

# 💾 Data Storage

ScamShield currently uses browser-based storage for some project features.

### localStorage

The browser's `localStorage` is used for information such as:

* Analysis history
* Scam reports
* Project-related local data

This means the stored information is associated with the user's browser/device.

### Firebase

Firebase Authentication is used for user authentication.

---

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript

## Authentication

* Firebase Authentication

## OCR

* Tesseract.js

## Browser Storage

* JavaScript localStorage

## Hosting

* GitHub Pages

## Version Control

* Git
* GitHub

---

# 📂 Project Structure

```text
ScamShield/
│
├── index.html
├── index.js
├── style.css
│
├── analyzer/
│   ├── analyzer.html
│   ├── analyzer.css
│   ├── analyzer.js
│   ├── history.html
│   └── history.css
│
├── auth/
│   ├── firebase-config.js
│   ├── login.html
│   ├── login.js
│   ├── login.css
│   ├── signup.html
│   ├── signup.js
│   ├── signup.css
│   ├── forgot-password.html
│   ├── forgot-password.js
│   └── reset-password.html
│
├── report/
│   ├── report.html
│   ├── report.css
│   └── report.js
│
├── scams/
│   ├── scams.html
│   ├── scams.css
│   └── scams.js
│
├── images/
│   └── cybersecurity-shield.png
│
└── README.md
```

---

# 🚀 How to Run the Project

## Option 1: Open the Live Website

Open:

https://lalitanjali-dev.github.io/ScamShield/

No installation is required.

---

## Option 2: Run Locally

### Step 1: Download the project

Clone or download the ScamShield repository from GitHub.

### Step 2: Open the project

Open the project folder in **Visual Studio Code**.

### Step 3: Start the website

Open `index.html`.

For the best experience, use the **Live Server** extension in VS Code.

### Step 4: Open the website

The website will open in your browser.

---

# 🧪 How to Use ScamShield

## Analyze a Message

1. Open **Analyzer**.
2. Select **Message**.
3. Enter the suspicious message.
4. Click **Analyze**.
5. View the risk score.
6. Check the detected warning signs.
7. Read the safety recommendation.

---

## Analyze an Email

1. Open **Analyzer**.
2. Select **Email**.
3. Enter the sender email.
4. Enter the subject.
5. Enter the email content.
6. Click **Analyze**.
7. Check the result.

---

## Analyze an Image

1. Open **Analyzer**.
2. Select **Image / Screenshot**.
3. Upload a screenshot.
4. Wait for OCR processing.
5. ScamShield extracts the text.
6. The extracted text is analyzed.
7. View the risk result.

---

## Analyze a URL

1. Open **Analyzer**.
2. Select **URL**.
3. Enter the suspicious URL.
4. Click **Analyze**.
5. Check the detected URL warning signs.
6. View the risk level.

---

## View History

1. Open **History**.
2. View previous analyses.
3. Check the risk score and risk level.
4. Review the warning signs.
5. Clear history when required.

---

## Learn About Scams

1. Open **Scam Types**.
2. Browse the available scam categories.
3. Use the search box to find a particular scam.
4. Read the information and warning signs.

---

## Report a Scam

1. Open **Report Scam**.
2. Select the scam type.
3. Enter the source.
4. Describe the suspicious activity.
5. Enter contact information if required.
6. Submit the report.
7. Save the generated Report ID.

---

## Create an Account

1. Open **Sign Up**.
2. Enter the required information.
3. Create your account.
4. Use the account credentials to log in.

---

## Login

1. Open **Login**.
2. Enter your registered email.
3. Enter your password.
4. Click Login.

If the password is forgotten, use the **Forgot Password** option.

---

# 🧪 Sample Test Message

You can test the analyzer with:

```text
URGENT! Congratulations, you have won ₹50,000 in a lottery.
Your account will be blocked today unless you verify your details.
Click http://bit.ly/claim-prize and share your OTP and UPI PIN
to receive the prize immediately.
```

This contains several common scam indicators such as:

* Urgency
* Prize claim
* Suspicious link
* Account threat
* Personal information request
* OTP request
* UPI PIN request

Therefore, it should receive a **high risk score**.

---

# 🔒 Security and Privacy

ScamShield is an educational project and should not be considered a replacement for professional cybersecurity services.

Users should not enter real:

* Passwords
* OTPs
* Banking PINs
* CVVs
* Credit/debit card details
* Sensitive personal information

The analyzer is designed to demonstrate scam detection concepts using predefined rules.

---

# ⚠️ Limitations

The current version of ScamShield has some limitations:

* It uses rule-based detection.
* It does not guarantee that a message is safe.
* It may miss new or sophisticated scam techniques.
* It may sometimes identify legitimate content as suspicious.
* URL analysis is based on visible URL characteristics.
* Image analysis depends on the quality of the uploaded image and OCR accuracy.
* Browser localStorage is not a permanent cloud database.
* The project is mainly intended for education and awareness.

---

# 🔮 Future Enhancements

Possible future improvements include:

* AI/ML-based scam detection
* Improved phishing URL detection
* Real-time threat intelligence
* More advanced email analysis
* Better OCR processing
* Cloud-based report storage
* Admin dashboard
* User-specific analysis history
* Database integration
* Mobile application
* Multilingual scam awareness
* More advanced cybersecurity alerts

---

# 🌟 Project Highlights

| Area             | Implementation                       |
| ---------------- | ------------------------------------ |
| Frontend         | HTML, CSS, JavaScript                |
| Authentication   | Firebase                             |
| Message Analysis | Rule-based detection                 |
| Email Analysis   | Sender, subject and content analysis |
| Image Analysis   | OCR using Tesseract.js               |
| URL Analysis     | URL pattern analysis                 |
| History          | Browser localStorage                 |
| Scam Reports     | Browser localStorage                 |
| Scam Education   | 12 scam categories                   |
| Hosting          | GitHub Pages                         |
| Version Control  | GitHub                               |

---

# 📌 Important Disclaimer

**ScamShield is an educational cybersecurity awareness project.**

The risk score is generated using predefined rules and should not be treated as a definitive security verdict.

For real cybercrime incidents, users should contact the appropriate official authorities and use the official cybercrime reporting channels.

---

# 👩‍💻 Author

**Lalitanjali**

B.Tech Computer Science Engineering

GitHub:
https://github.com/lalitanjali-dev

---

# 🙏 Acknowledgement

This project was developed as a cybersecurity awareness and educational project to demonstrate how web technologies can be used to identify common scam warning signs and promote safer online behavior.

---

## 🛡️ ScamShield

### Stay Safe. Detect Scams. Think Before You Click.
