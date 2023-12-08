function todo(t) {

    const completed = `<img src="./images/check_box_${t.completed}.svg">Completed`

    return `
    <div class="todo card">
        <div class="id">          TODO ID:     <b>${t.id}</b></div>
        <div class="userid">      USER ID:     <b>${t.userid}</b></div>
        <div class="category">    CATEGORY:    <b>${t.category}</b></div>
        <div class="description"> DESCRIPTION: <b>${t.description}</b></div>
        <div class="deadline">    DEAD LINE:   <b>${t.deadline}</b></div>
        <div class="priority">    PRIORITY:    <b>${t.priority}</b></div>
        <button class="completed" onclick="mark(${t.id})"> ${completed}</button>
        </div>
    `;

}
function draw() {
    fetch("http://localhost:8083/api/todos/")
        .then(response => response.json())
        .then(todos => {
            todoList.innerHTML = todos.filter(t => t.userid == userList.value).map(todo).join("")
        })
}
function mark(id){
    fetch("http://localhost:8083/api/todos/" + id,{
        method: "PUT"}).then(draw);

}

document.addEventListener("DOMContentLoaded", e => {
    fillUserList();
    userList.addEventListener("change", draw);
})