function fillUserList(){
fetch("http://localhost:8083/api/users")
.then(response => response.json())
.then(users => users.forEach(data => userList.innerHTML += `
<option value="${data.id}">${data.name} - ${data.username}</option>`
    
))}