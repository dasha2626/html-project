document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".edit-button");
    const saveButtons = document.querySelectorAll(".save-button");

    editButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const opinionBox = button.closest(".opinion-box");
            const titleField = opinionBox.querySelector(".edit-title");
            const textField = opinionBox.querySelector(".edit-text");
            const saveButton = opinionBox.querySelector(".save-button");

            titleField.removeAttribute("readonly");
            textField.removeAttribute("readonly");
            titleField.focus();
            button.style.display = "none";
            saveButton.style.display = "inline-block";
        });
    });

    saveButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const opinionBox = button.closest(".opinion-box");
            const titleField = opinionBox.querySelector(".edit-title");
            const textField = opinionBox.querySelector(".edit-text");
            const editButton = opinionBox.querySelector(".edit-button");

            titleField.setAttribute("readonly", true);
            textField.setAttribute("readonly", true);
            button.style.display = "none";
            editButton.style.display = "inline-block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.querySelector(".edit-button");
    const saveButton = document.querySelector(".save-button");
    const inputs = document.querySelectorAll(".edit-input");

    // Funkcja edytowania
    editButton.addEventListener("click", () => {
        inputs.forEach(input => input.removeAttribute("readonly"));  // Usuń atrybut readonly
        inputs.forEach(input => input.classList.add("active"));  // Włącz edytowalność (zmiana tła itp.)

        // Ukryj przycisk "Edytuj", pokaż "Zapisz"
        editButton.style.display = "none";
        saveButton.style.display = "inline-block";
    });

    // Funkcja zapisywania
    saveButton.addEventListener("click", () => {
        inputs.forEach(input => input.setAttribute("readonly", true));  // Ustaw atrybut readonly
        inputs.forEach(input => input.classList.remove("active"));  // Wyłącz edytowalność (przywrócenie normalnego tła)

        // Ukryj przycisk "Zapisz", pokaż "Edytuj"
        saveButton.style.display = "none";
        editButton.style.display = "inline-block";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Wykres kołowy: Udział użytkowników
    const ctx1 = document.getElementById("userChart").getContext("2d");
    new Chart(ctx1, {
        type: "doughnut",
        data: {
            labels: ["Aktywni użytkownicy", "Nowi użytkownicy", "Nieaktywni użytkownicy"],
            datasets: [{
                data: [60, 25, 15],
                backgroundColor: ["#27ae60", "#f39c12", "#e74c3c"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "bottom" }
            }
        }
    });

    // Wykres słupkowy: Aktywność serwisu
    const ctx2 = document.getElementById("activityChart").getContext("2d");
    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["Posty", "Wiadomości", "Oceny"],
            datasets: [{
                label: "Ilość",
                data: [365, 4320, 1500],
                backgroundColor: ["#2980b9", "#e67e22", "#8e44ad"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
