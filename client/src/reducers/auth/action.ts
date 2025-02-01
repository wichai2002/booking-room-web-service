
const VERIFY_TOKEN = "VERIFY_TOKEN";
const LOGOUT = "LOGOUT";

export const verifyToken = () => ({
    type: VERIFY_TOKEN,
    state: null
});

export const logout = () => ({
    type: LOGOUT,
    state: null
});
