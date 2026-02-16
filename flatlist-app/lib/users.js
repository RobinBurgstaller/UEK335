const API_URL = "https://dummyuser.vercel.app/"

export async function fetchUsers() {
    try {
        const url = `${API_URL}/users`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP-Error! Status: ${response.status} (${response.statusText})`)
        }

        return await response.json()
    } catch (error) {
        console.error("[ERROR] Error getting user data:", error.message)
        return null
    }
}

export async function fetchUsersById(id) {
    try {
        const url = `${API_URL}/users/{id}`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP-Error! Status: ${response.status} (${response.statusText})`)
        }

        return await response.json()
    } catch (error) {
        console.error("[ERROR] Error getting user data:", error.message)
        return null
    }
}