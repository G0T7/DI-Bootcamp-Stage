// Exercise 1: Users
        // Retrieve the div and console.log it
        const container = document.getElementById("container");
        console.log(container);

        // Change the name “Pete” to “Richard”
        const secondList = document.getElementsByClassName("list")[1];
        const petesName = secondList.getElementsByTagName("li")[1];
        petesName.textContent = "Richard";

        // Delete the <li> that contains the text node “Sarah”
        const sarahsName = secondList.getElementsByTagName("li")[1];
        sarahsName.parentNode.removeChild(sarahsName);

        // Change each first name of the two <ul>'s to your name
        const lists = document.getElementsByClassName("list");
        const names = ["YourName", "YourName"];

        for (let i = 0; i < lists.length; i++) {
            const list = lists[i];
            const firstName = list.getElementsByTagName("li")[0];
            firstName.textContent = names[i];
        }

        // Bonus - Using Javascript
        // Add a class called student_list to both of the <ul>'s
        const studentListClass = "student_list";
        for (const list of lists) {
            list.classList.add(studentListClass);
        }

        // Add the classes university and attendance to the first <ul>
        const firstList = lists[0];
        firstList.classList.add("university", "attendance");