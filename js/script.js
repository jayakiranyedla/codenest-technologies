document.addEventListener("DOMContentLoaded", function () {

    // Current year in footer
    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // Service filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const serviceItems = document.querySelectorAll(".filter-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter = button.getAttribute("data-filter");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            serviceItems.forEach(function (item) {

                const category = item.getAttribute("data-category");

                if (filter === "all" || filter === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            });

        });

    });


    // Contact form validation
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {

                alert("Please fill in all required fields.");
                return;

            }

            alert("Thank you! Your enquiry has been submitted.");

            contactForm.reset();

        });

    }


    // Career form
    const careerForm = document.querySelector("#careerForm");

    if (careerForm) {

        careerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.querySelector("#candidateName").value.trim();
            const email = document.querySelector("#candidateEmail").value.trim();

            if (name === "" || email === "") {

                alert("Please enter your name and email.");
                return;

            }

            alert("Application submitted successfully.");

            careerForm.reset();

        });

    }


    // Pricing calculator
    const serviceSelect = document.querySelector("#serviceSelect");
    const packageSelect = document.querySelector("#packageSelect");
    const estimatedPrice = document.querySelector("#estimatedPrice");

    function calculatePrice() {

        if (!serviceSelect || !packageSelect || !estimatedPrice) {
            return;
        }

        const service = serviceSelect.value;
        const packageType = packageSelect.value;

        let price = 0;

        if (service === "web") {

            if (packageType === "basic") {
                price = 15000;
            } else if (packageType === "business") {
                price = 30000;
            } else if (packageType === "premium") {
                price = 50000;
            }

        } else if (service === "software") {

            if (packageType === "basic") {
                price = 30000;
            } else if (packageType === "business") {
                price = 60000;
            } else if (packageType === "premium") {
                price = 100000;
            }

        } else if (service === "mobile") {

            if (packageType === "basic") {
                price = 25000;
            } else if (packageType === "business") {
                price = 50000;
            } else if (packageType === "premium") {
                price = 85000;
            }

        }

        if (price > 0) {
            estimatedPrice.textContent =
                "₹" + price.toLocaleString("en-IN");
        } else {
            estimatedPrice.textContent = "Select options";
        }

    }


    if (serviceSelect && packageSelect) {

        serviceSelect.addEventListener("change", calculatePrice);
        packageSelect.addEventListener("change", calculatePrice);

    }


    // Simple project search
    const projectSearch = document.querySelector("#projectSearch");
    const projects = document.querySelectorAll(".project-search-item");

    if (projectSearch) {

        projectSearch.addEventListener("keyup", function () {

            const searchText = projectSearch.value.toLowerCase();

            projects.forEach(function (project) {

                const text = project.textContent.toLowerCase();

                if (text.includes(searchText)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }

            });

        });

    }

});