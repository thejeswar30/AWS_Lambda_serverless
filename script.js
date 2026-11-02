const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const runDemo = document.getElementById("runDemo");
const responseOutput = document.getElementById("responseOutput");
const responseStatus = document.getElementById("responseStatus");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

runDemo.addEventListener("click", () => {
    runDemo.disabled = true;
    runDemo.textContent = "Processing Request...";
    responseStatus.textContent = "Processing";

    responseOutput.textContent = JSON.stringify({
        message: "Processing request..."
    }, null, 2);

    setTimeout(() => {
        const response = {
            statusCode: 200,
            message: "Welcome to my Serverless API",
            status: "success",
            technology: "AWS Lambda and API Gateway",
            endpoint: "/welcome"
        };

        responseOutput.textContent = JSON.stringify(response, null, 2);
        responseStatus.textContent = "200 OK";
        runDemo.textContent = "↻ Run Again";
        runDemo.disabled = false;
    }, 1000);
});