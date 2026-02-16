import { Stack } from "expo-router"

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Robots",
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    title: "Detail",
                }}
            />
        </Stack>
    )
}