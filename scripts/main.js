const host = "http://35.165.18.146"

function fillUserList(){
fetch(host +"/api/users")
.then(response => response.json())
.then(users => users.forEach(data => userList.innerHTML += `
<option value="${data.id}">${data.name} - ${data.username}</option>`
    
))}