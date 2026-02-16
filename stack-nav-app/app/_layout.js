import { Stack } from "expo-router"

export default function Layout() {
    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "green",
                },
                headerTintColor: "#000",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        ></Stack>
    )
}