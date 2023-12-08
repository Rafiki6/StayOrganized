document.addEventListener("DOMContentLoaded", e => {

    saveButton.addEventListener("click", e => {

        if (passwordInput.value != repeatPassword.value) {
            alert("Password DO NOT MATCH");
            return;
        }
        // LOOP WAY OF GATHERING FORM DATA
        const elements = document.querySelectorAll("main [name]");
        const content = [...elements].map(e => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join("&");

        fetch("http://localhost:8083/api/users/", {
            method: "POST", body: content,
            headers: {
                "Content-type": "application/x-www-form-urlencoded" //"application/json"
            }
        }).then(r => {
            location = "http://localhost:3000/index.html"
        });
    })
})