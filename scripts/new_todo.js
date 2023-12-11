document.addEventListener("DOMContentLoaded", e => {
    fillUserList();


    //REMOVE VALUE SO THE DISPLAY NAME WILL BE USED BY THE NEW TODO
    //const host = "http://35.165.18.146/"
    // const host = "http://localhost:8083/
    const catOption = c => `<option>${c.name}</option>`;

    fetch(host + "/api/categories")
        .then(response => response.json())
        .then(cats => cats.forEach(item => catList.innerHTML += catOption(item)));

    // GOAL IS TO GENERATE AN ENCODED FORM TO SEND AS THE "body"    
    //userid=1&category=1&priority=Medium&description=Make+Tea&deadline=2023-12-06

    saveButton.addEventListener("click", e => {
        const element = document.querySelectorAll("main [name]");
        const content = [...element].map(e=> `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join("&");

           // LINEAR WAY OF GATHERING FORM DATA
        // const content = new FormData();
        // content.append("userid", userList.value);
        // content.append("category", catList.value);
        // content.append("priority", priorityList.value);
        // content.append("description", description.value);
        // content.append("deadline", deadline.value);
        // console.log(content)
        //// FormData() NOT WORKING WITH ANY OR NONE FOR CONTENT TYPE

        fetch(host + "/api/todos/",{
            method: "POST",
            body:content,
            headers: {"Content-type":"application/x-www-form-urlencoded"}
        }).then(response=> {
            location="http://localhost:3000/todos.html"
        });
    });//END SAVE
});//END LOADED PAGE