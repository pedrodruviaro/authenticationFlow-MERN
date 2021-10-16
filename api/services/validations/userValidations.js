function validateRegister(data) {
    const { email, username, password } = data;

    // checking inputs
    if (!email || email.trim() === "") {
        return { error: "Email field is required!" };
    } else if (!username || username.trim() === "") {
        return { error: "Username field is required!" };
    } else if (!password || password.trim() === "") {
        return { error: "Password field is required!" };
    }

    // USERNAME
    if (username.length < 6) {
        return { error: "Username must have at least 6 characters!" };
    } else if (username.length > 50) {
        return { error: "Username must have a maximum of 50 characters!" };
    }

    // PASSWORD
    if (password.length < 6) {
        return { error: "Password must have at least 6 digits!" };
    } else if (password.length > 72) {
        return { error: "Password must have a maximum of 72 digits!" };
    }

    // EMAIL
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return { error: "Email must be a valid email adress!" };
    }
}

function validateLogin(data) {
    const { email, password } = data;

    // checking inputs
    if (!email || email.trim() === "") {
        return { error: "Email field is required!" };
    } else if (!password || password.trim() === "") {
        return { error: "Password field is required!" };
    }

    // EMAIL REGEX
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return { error: "Email must be a valid email adress!" };
    }

    // PASSWORD
    if (password.length < 6) {
        return { error: "Password must have at least 6 digits!" };
    } else if (password.length > 72) {
        return { error: "Password must have a maximum of 72 digits!" };
    }
}

module.exports = { validateRegister, validateLogin };
