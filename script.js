<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1 onclick="welcomeMessage()">Car Guy</h1>
        <button id="theme-toggle">Toggle Dark Mode</button>
        <button id="login-btn">Login</button>
        <button id="signup-btn">Sign Up</button>
        <button id="logout-btn" style="display: none;">Logout</button> <!-- Logout Button -->
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p id="home-text">This is the homepage of my first website.</p>
            <img id="home-image" src="placeholder.jpg" alt="Home Image" style="width: 100%; max-width: 300px;">
        </section>
        <section id="about">
            <h2>About Me</h2>
            <p id="about-text">Learn more about me here.</p>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p id="contact-text">Get in touch with me.</p>
        </section>
        <section id="admin-panel" style="display: none;">
            <h2>Admin Panel</h2>
            <p>Welcome, Admin! Here you can manage the website and users.</p>

            <!-- User Management -->
            <div id="user-management">
                <h3>User Management</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="user-list">
                        <!-- Dynamically filled with user data -->
                    </tbody>
                </table>
            </div>

            <!-- Website Editing -->
            <div id="website-editing">
                <h3>Website Editing</h3>
                <form id="edit-home">
                    <h4>Home Section</h4>
                    <label for="home-text-input">Edit Text:</label>
                    <input type="text" id="home-text-input" value="This is the homepage of my first website.">
                    <label for="home-image-input">Edit Image URL:</label>
                    <input type="text" id="home-image-input" value="placeholder.jpg">
                    <button type="button" onclick="updateHome()">Update Home</button>
                </form>
                <form id="edit-about">
                    <h4>About Section</h4>
                    <label for="about-text-input">Edit Text:</label>
                    <input type="text" id="about-text-input" value="Learn more about me here.">
                    <button type="button" onclick="updateAbout()">Update About</button>
                </form>
                <form id="edit-contact">
                    <h4>Contact Section</h4>
                    <label for="contact-text-input">Edit Text:</label>
                    <input type="text" id="contact-text-input" value="Get in touch with me.">
                    <button type="button" onclick="updateContact()">Update Contact</button>
                </form>
            </div>

            <!-- Admin Actions -->
            <div id="admin-actions">
                <h3>Admin Actions</h3>
                <button id="reset-users">Reset All Users</button>
            </div>
        </section>
    </main>
    <footer>
        <p>© <span id="year"></span> My First Website</p>
    </footer>

    <!-- Login Modal -->
    <div id="login-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Login</h2>
            <form id="login-form">
                <label for="login-username">Username:</label>
                <input type="text" id="login-username" name="login-username" required>
                <label for="login-password">Password:</label>
                <input type="password" id="login-password" name="login-password" required>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>

    <!-- Sign-Up Modal -->
    <div id="signup-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Sign Up</h2>
            <form id="signup-form">
                <label for="signup-username">Username:</label>
                <input type="text" id="signup-username" name="signup-username" required>
                <label for="signup-password">Password:</label>
                <input type="password" id="signup-password" name="signup-password" required>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
