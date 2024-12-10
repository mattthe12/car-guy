<<<<<<< HEAD
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
    localStorage.removeItem('isLoggedIn'); // Clear login status on logout
    // Don't clear the homepage content, as it is saved in localStorage
});

// Update sections for admin
function updateHome() {
    homeText.textContent = homeTextInput.value;
    homeImage.src = homeImageInput.value;
    // Save to localStorage
    localStorage.setItem('homeText', homeTextInput.value);
    localStorage.setItem('homeImage', homeImageInput.value);
}

function updateAbout() {
    aboutText.textContent = aboutTextInput.value;
    // Save to localStorage
    localStorage.setItem('aboutText', aboutTextInput.value);
}

function updateContact() {
    contactText.textContent = contactTextInput.value;
    // Save to localStorage
    localStorage.setItem('contactText', contactTextInput.value);
}

// Delete user from the list
function deleteUser(username) {
    delete users[username];
    updateUserList();
}

// Reset all users
resetUsersButton.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all users?")) {
        for (let username in users) {
            delete users[username];
        }
        updateUserList();
        alert("All users have been reset.");
    }
});

// Load saved data from localStorage
function loadAdminPanelData() {
    // Load home section data
    if (localStorage.getItem('homeText')) {
        homeText.textContent = localStorage.getItem('homeText');
        homeImage.src = localStorage.getItem('homeImage');
        homeTextInput.value = localStorage.getItem('homeText');
        homeImageInput.value = localStorage.getItem('homeImage');
    }

    // Load about section data
    if (localStorage.getItem('aboutText')) {
        aboutText.textContent = localStorage.getItem('aboutText');
        aboutTextInput.value = localStorage.getItem('aboutText');
    }

    // Load contact section data
    if (localStorage.getItem('contactText')) {
        contactText.textContent = localStorage.getItem('contactText');
        contactTextInput.value = localStorage.getItem('contactText');
    }
}

// Check login status on page load
window.addEventListener('load', () => {
    // Display homepage data saved in localStorage
    loadAdminPanelData();
    
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        adminPanel.style.display = 'block';
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    }
});
=======
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
});

// Update sections for admin
function updateHome() {
    homeText.textContent = homeTextInput.value;
    homeImage.src = homeImageInput.value;
}

function updateAbout() {
    aboutText.textContent = aboutTextInput.value;
}

function updateContact() {
    contactText.textContent = contactTextInput.value;
}

// Delete user from the list
function deleteUser(username) {
    delete users[username];
    updateUserList();
}

// Reset all users
resetUsersButton.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all users?")) {
        for (let username in users) {
            delete users[username];
        }
        updateUserList();
        alert("All users have been reset.");
    }
});
>>>>>>> d94dce788b5e1fd60889e1c573b3d325df46b032
