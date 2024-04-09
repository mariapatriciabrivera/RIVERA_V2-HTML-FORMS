const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", () => {
    const dropdownMenu = document.querySelector("#dropdown > .menu");

    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
});

document.getElementById("order-btn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const cuisine = document.getElementById("cuisine").value;
    const payment = document.getElementById("payment").value;
    const dineOption = document.querySelector('input[name="dine-option"]:checked').value;
    const comments = document.getElementById("comments").value;

    const selectedHealthyOptions = Array.from(document.querySelectorAll('#dropdown .menu-item:nth-child(3) .submenu-item input:checked')).map(item => item.value);
    const selectedSpecials = Array.from(document.querySelectorAll('#dropdown .menu-item:nth-child(5) .submenu-item input:checked')).map(item => item.value);

    if (name === "" || email === "" || age === "" || cuisine === "" || payment === "" || dineOption === "") {
        alert("Please fill in all fields");
        return;
    }

    let output = `Name: ${name}\nEmail: ${email}\nAge: ${age}\nType of Cuisine: ${cuisine}\nMode of Payment: ${payment}\nDine-in/Take-out: ${dineOption}\nComments/Instructions: ${comments}`;

    if (selectedHealthyOptions.length > 0) {
        output += "\nHealthy Options: " + selectedHealthyOptions.join(", ");
    }

    if (selectedSpecials.length > 0) {
        output += "\nSpecials: " + selectedSpecials.join(", ");
    }

    alert(output);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("cuisine").value = "italian";
    document.getElementById("payment").value = "";
    document.getElementById("dine-in").checked = true;
    document.getElementById("comments").value = "";
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (event) => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.classList.toggle('open');
        }
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent
    });
});

// Close submenus when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.classList.remove('open');
    });
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (event) => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.classList.toggle('open');
        }
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent
    });
});

document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.style.display = 'none'; // Hide submenus initially
});

document.querySelectorAll('.submenu-toggle').forEach(item => {
    item.addEventListener('click', (event) => {
        const submenu = item.nextElementSibling;
        submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none'; // Toggle submenu display
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent
    });
});

// Close submenus when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.style.display = 'none';
    });
});

// Prevent the submenu from closing when clicking inside it
document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent
    });
});
