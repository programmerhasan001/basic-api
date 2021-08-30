// load 10 users
const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => usersData(data))
}

function usersData(users) {
    const usersContainer = document.getElementById('myUsers');
    for (const user of users) {
        const createUser = document.createElement('h4');
        createUser.innerHTML = `
            <strong>Name:</strong> <small>${user.name}</small>
            <strong>Email:</strong> <small>${user.email}</small>
        `;
        usersContainer.appendChild(createUser);
    }
}

// 100 post
function clearPage() {
    window.location.href = 'index.html';
}
