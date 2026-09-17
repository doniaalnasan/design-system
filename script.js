document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-links > a");

    const menuData = {

        Products: [
            "Project Management",
            "Task Management",
            "File Management",
            "Team Collaboration",
            "Data Security"
        ],

        Solutions: [
            "For Teams",
            "For Individuals",
            "For Businesses",
            "For Organizations",
            "Remote Work"
        ],

        Resources: [
            "Blog",
            "Guides & Tutorials",
            "Help Center",
            "Documentation",
            "FAQ"
        ],

        Pricing: [
            "Free",
            "Personal",
            "Organization",
            "Enterprise"
        ]
    };


    for (let i = 0; i < navLinks.length; i++) {

        let link = navLinks[i];

        let menuName = link.childNodes[0].textContent.trim();

        if (menuData[menuName]) {

            // إنشاء Box
            let dropdown = document.createElement("div");

            dropdown.classList.add("navbar-dropdown");


            for (let j = 0; j < menuData[menuName].length; j++) {

                let menuItem = document.createElement("a");

                menuItem.href = "#";

                menuItem.classList.add("dropdown-item");

                menuItem.textContent = menuData[menuName][j];

                dropdown.appendChild(menuItem);

            }


            link.insertAdjacentElement("afterend", dropdown);


            dropdown.style.left = link.offsetLeft + "px";


            link.addEventListener("click", function (event) {

                event.preventDefault();

                event.stopPropagation();


                if (dropdown.classList.contains("show")) {

                    dropdown.classList.remove("show");

                    link.classList.remove("active");

                }

                else {

                    for (let k = 0; k < navLinks.length; k++) {

                        navLinks[k].classList.remove("active");

                    }


                    let allDropdowns =
                        document.querySelectorAll(".navbar-dropdown");


                    for (let k = 0; k < allDropdowns.length; k++) {

                        allDropdowns[k].classList.remove("show");

                    }


                    dropdown.classList.add("show");

                    link.classList.add("active");


                    dropdown.style.left = link.offsetLeft + "px";

                }

            });



            dropdown.addEventListener("click", function (event) {

                if (event.target.classList.contains("dropdown-item")) {

                    event.preventDefault();

                    console.log("تم اختيار: " + event.target.textContent);

                    dropdown.classList.remove("show");

                    link.classList.remove("active");

                }

            });

        }

    }



    document.addEventListener("click", function (event) {

        if (!event.target.closest(".nav-links")) {

            let allDropdowns =
                document.querySelectorAll(".navbar-dropdown");


            for (let i = 0; i < allDropdowns.length; i++) {

                allDropdowns[i].classList.remove("show");

            }


            for (let i = 0; i < navLinks.length; i++) {

                navLinks[i].classList.remove("active");

            }

        }

    });



    window.addEventListener("resize", function () {

        for (let i = 0; i < navLinks.length; i++) {

            let link = navLinks[i];

            let dropdown = link.nextElementSibling;


            if (dropdown &&
                dropdown.classList.contains("navbar-dropdown")) {

                dropdown.style.left =
                    link.offsetLeft + "px";

            }

        }

    });

});