(function(username) {
    const navbar = document.querySelector('.navbar-nav');
    const userDiv = document.createElement('div');
    userDiv.classList.add('nav-item');
    userDiv.innerHTML = `
        <span class="nav-link">Welcome, ${username}!</span>
        <img src="profile-picture.jpg" alt="Profile Picture" style="width: 30px; height: 30px; border-radius: 50%;">
    `;
    navbar.appendChild(userDiv);
})("John");
