const BASE_URL = 'https://api.freeapi.app/api/v1/users';

// Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const showLoginBtn = document.getElementById('showLogin');
const showRegisterBtn = document.getElementById('showRegister');

const messageDiv = document.getElementById('message');

const profileSection = document.getElementById('profileSection');

const profileUsername = document.getElementById('profileUsername');
const profileEmail = document.getElementById('profileEmail');
const profileRole = document.getElementById('profileRole');

const logoutBtn = document.getElementById('logoutBtn');

// Show Message
function showMessage(message, type = 'success') {
  messageDiv.classList.remove('hidden');
  messageDiv.classList.remove('success', 'error');

  messageDiv.innerText = message;
  messageDiv.classList.add(type);

  setTimeout(() => {
    messageDiv.classList.add('hidden');
  }, 3000);
}

// Switch to Login
showLoginBtn.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');

  showLoginBtn.classList.add('active-tab');
  showRegisterBtn.classList.remove('active-tab');
});

// Switch to Register
showRegisterBtn.addEventListener('click', () => {
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');

  showRegisterBtn.classList.add('active-tab');
  showLoginBtn.classList.remove('active-tab');
});

// Register User
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const registerBtn = document.getElementById('registerBtn');

  registerBtn.innerText = 'Registering...';
  registerBtn.disabled = true;

  const userData = {
    email: document.getElementById('registerEmail').value,
    password: document.getElementById('registerPassword').value,
    role: document.getElementById('registerRole').value,
    username: document.getElementById('registerUsername').value,
  };

  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      showMessage('Registration successful!', 'success');

      registerForm.reset();

      // Move to login tab
      showLoginBtn.click();
    } else {
      showMessage(data.message || 'Registration failed', 'error');
    }
  } catch (error) {
    showMessage('Something went wrong', 'error');
  }

  registerBtn.innerText = 'Register';
  registerBtn.disabled = false;
});

// Login User
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const loginBtn = document.getElementById('loginBtn');

  loginBtn.innerText = 'Logging in...';
  loginBtn.disabled = true;

  const loginData = {
    username: document.getElementById('loginUsername').value,
    password: document.getElementById('loginPassword').value,
  };

  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(loginData),
    });

    const data = await response.json();

    if (response.ok) {
      showMessage('Login successful!', 'success');

      loginForm.reset();

      getCurrentUser();
    } else {
      showMessage(data.message || 'Login failed', 'error');
    }
  } catch (error) {
    showMessage('Something went wrong', 'error');
  }

  loginBtn.innerText = 'Login';
  loginBtn.disabled = false;
});

// Get Current User
async function getCurrentUser() {
  try {
    const response = await fetch(`${BASE_URL}/current-user`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await response.json();

    if (response.ok) {
      profileSection.classList.remove('hidden');

      profileUsername.innerText = data.data.username;
      profileEmail.innerText = data.data.email;
      profileRole.innerText = data.data.role;

      loginForm.classList.add('hidden');
      registerForm.classList.add('hidden');
    }
  } catch (error) {
    console.log(error);
  }
}

// Logout User
logoutBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    const data = await response.json();

    if (response.ok) {
      showMessage('Logged out successfully!', 'success');

      profileSection.classList.add('hidden');

      loginForm.classList.remove('hidden');

      showLoginBtn.classList.add('active-tab');
      showRegisterBtn.classList.remove('active-tab');
    } else {
      showMessage(data.message || 'Logout failed', 'error');
    }
  } catch (error) {
    showMessage('Something went wrong', 'error');
  }
});

// Auto Login Check
getCurrentUser();
