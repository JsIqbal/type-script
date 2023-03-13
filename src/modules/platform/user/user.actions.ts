// Example login function
const login = () => {
    // Perform authentication check and retrieve user role
    const role = "admin"; // Or 'parent', depending on user's role

    // Store user's role in local storage
    localStorage.setItem("role", role);
};

export { login };
