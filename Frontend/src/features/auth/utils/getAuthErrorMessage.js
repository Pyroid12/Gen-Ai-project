export function getAuthErrorMessage(err, fallback) {
    if (err.response?.data?.message) {
        return err.response.data.message
    }

    if (err.code === "ERR_NETWORK") {
        return "Cannot reach the server. Make sure the backend is running on port 3000."
    }

    if (err.response?.status >= 500) {
        return "Server error. Check backend logs and database connection."
    }

    return fallback
}
