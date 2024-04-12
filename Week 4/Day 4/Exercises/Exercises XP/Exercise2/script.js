 // Exercise 2: Users and Style

        // Get the <div> and set the background color, padding
        const usersDiv = document.querySelector("div");
        usersDiv.style.backgroundColor = "lightblue";
        usersDiv.style.padding = "10px";

        // Get the first <li> of the <ul> and set the display to "none"
        const firstLi = document.querySelector("li:first-child");
        firstLi.style.display = "none";

        // Get the second <li> of the <ul> and set the border
        const secondLi = document.querySelector("li:nth-child(2)");
        secondLi.style.border = "2px solid black";

        // Change the font size of the body
        document.body.style.fontSize = "18px";

        // Bonus
        if (window.getComputedStyle(usersDiv, null).getPropertyValue("background-color") === "rgb(173, 216, 230)") {
            const users = Array.from(usersDiv.children).map(child => child.textContent);
            alert("Hello " + users.join(" and ") + "!");
        }