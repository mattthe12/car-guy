// Welcome message
function welcomeMessage() {
    alert("Welcome to Car Guy's Website!");
}

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Auto-update year
document.getElementById('year').textContent = new Date().getFullYear();

// Dummy user data storage
const users = {};

// Admin credentials
const adminUsername = "matt";
const adminPassword = "candle1997";

// Modals and forms
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const adminPanel = document.getElementById('admin-panel');
const closeButtons = document.querySelectorAll('.close');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Admin Panel Elements
const userList = document.getElementById('user-list');
const resetUsersButton = document.getElementById('reset-users');
const logoutBtn = document.getElementById('logout-btn');

// Website Editing Inputs (admin form inputs)
const homeTextInput = document.getElementById('home-text-input');
const homeImageInput = document.getElementById('home-image-input');
const aboutTextInput = document.getElementById('about-text-input');
const contactTextInput = document.getElementById('contact-text-input');
const homeText = document.getElementById('home-text');
const homeImage = document.getElementById('home-image');
const aboutText = document.getElementById('about-text');
const contactText = document.getElementById('contact-text');

// Modal event listeners
loginBtn.addEventListener('click', () => loginModal.style.display = 'block');
signupBtn.addEventListener('click', () => signupModal.style.display = 'block');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    });
});

// Login functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm['login-username'].value;
    const password = loginForm['login-password'].value;
    if (username === adminUsername && password === adminPassword) {
        alert("Welcome, Admin!");
        loginModal.style.display = 'none';
        adminPanel.style.display = 'block';
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        localStorage.setItem('isLoggedIn', 'true');  // Save login status
        loadAdminPanelData(); // Load the saved data from localStorage
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Sign up functionality
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = signupForm['signup-username'].value;
    const password = signupForm['signup-password'].value;
    if (!users[username]) {
        users[username] = { password };
        alert("Sign up successful.");
        signupModal.style.display = 'none';
    } else {
        alert("Username already exists.");
    }
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    alert("You have been logged out.");
    adminPanel.style.display = 'none';
    loginBtn.style.display = 'inline-block';
    signupBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
    localStorage.removeItem('isLoggedIn');  // Remove login status
});

// Update website content and save to localStorage
function updateHome() {
    const homeTextValue = homeTextInput.value;
    const homeImageValue = homeImageInput.value;

    // Update the page content
    homeText.textContent = homeTextValue;
    homeImage.src = homeImageValue;

    // Save the updated content to localStorage
    localStorage.setItem('homeText', homeTextValue);
    localStorage.setItem('homeImage', homeImageValue);
}

function updateAbout() {
    const aboutTextValue = aboutTextInput.value;

    // Update the page content
    aboutText.textContent = aboutTextValue;

    // Save the updated content to localStorage
    localStorage.setItem('aboutText', aboutTextValue);
}

function updateContact() {
    const contactTextValue = contactTextInput.value;

    // Update the page content
    contactText.textContent = contactTextValue;

    // Save the updated content to localStorage
    localStorage.setItem('contactText', contactTextValue);
}

// Load saved content from localStorage on page load
function loadSavedContent() {
    // Load content from localStorage, if available
    const savedHomeText = localStorage.getItem('homeText');
    const savedHomeImage = localStorage.getItem('homeImage');
    const savedAboutText = localStorage.getItem('aboutText');
    const savedContactText = localStorage.getItem('contactText');

    // Apply saved content to the page
    if (savedHomeText) {
        homeText.textContent = savedHomeText;
        homeTextInput.value = savedHomeText;
    }
    if (savedHomeImage) {
        homeImage.src = savedHomeImage;
        homeImageInput.value = savedHomeImage;
    }
    if (savedAboutText) {
        aboutText.textContent = savedAboutText;
        aboutTextInput.value = savedAboutText;
    }
    if (savedContactText) {
        contactText.textContent = savedContactText;
        contactTextInput.value = savedContactText;
    }
}

// Call the function when the page loads
window.onload = loadSavedContent;

// Reset all users
resetUsersButton.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all users?")) {
        users = {};  // Reset user data
        alert("All users have been reset.");
        loadAdminPanelData();  // Re-load admin panel
    }
});

// Load admin panel data from localStorage
function loadAdminPanelData() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
        users = JSON.parse(savedUsers);
        updateUserList();
    }
}

// Update user list in the admin panel
function updateUserList() {
    userList.innerHTML = '';
    Object.keys(users).forEach(username => {
        const row = document.createElement('tr');
        const usernameCell = document.createElement('td');
        const actionsCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteUser(username));
        usernameCell.textContent = username;
        actionsCell.appendChild(deleteButton);
        row.appendChild(usernameCell);
        row.appendChild(actionsCell);
        userList.appendChild(row);
    });
}

// Delete user
function deleteUser(username) {
    if (confirm(`Are you sure you want to delete the user: ${username}?`)) {
        delete users[username];
        localStorage.setItem('users', JSON.stringify(users));  // Save updated user list
        updateUserList();
    }
}
