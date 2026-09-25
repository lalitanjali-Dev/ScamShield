/* ================= ELEMENTS ================= */

const reportForm =
    document.getElementById("reportForm");

const description =
    document.getElementById("description");

const descriptionCount =
    document.getElementById("descriptionCount");

const successMessage =
    document.getElementById("successMessage");

const newReportBtn =
    document.getElementById("newReportBtn");


/* ================= CHARACTER COUNT ================= */

description.addEventListener("input", function () {

    const count =
        description.value.length;

    descriptionCount.textContent =
        count + " characters";

});


/* ================= FORM SUBMIT ================= */

reportForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* GET VALUES */

    const scamType =
        document.getElementById("scamType").value;

    const source =
        document.getElementById("source").value;

    const details =
        description.value.trim();

    const contact =
        document.getElementById("contact").value.trim();


    /* CREATE REPORT OBJECT */

    const report = {

        id:
            "SS-" +
            Date.now(),

        scamType:
            scamType,

        source:
            source,

        description:
            details,

        contact:
            contact,

        reportedAt:
            new Date().toLocaleString()

    };


    /* GET OLD REPORTS */

    let reports =
        JSON.parse(
            localStorage.getItem("scamReports")
        ) || [];


    /* ADD NEW REPORT */

    reports.push(report);


    /* SAVE */

    localStorage.setItem(
        "scamReports",
        JSON.stringify(reports)
    );


    /* SHOW SUCCESS */

    reportForm.classList.add("hidden");

    successMessage.classList.remove("hidden");


    /* SCROLL */

    successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* ================= NEW REPORT ================= */

newReportBtn.addEventListener("click", function () {

    reportForm.reset();

    descriptionCount.textContent =
        "0 characters";

    successMessage.classList.add("hidden");

    reportForm.classList.remove("hidden");

});