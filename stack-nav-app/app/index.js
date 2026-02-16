import { View, StyleSheet } from "react-native"
import { Link, Stack } from "expo-router"
import JumboText from "../components/JumboText"
import AppButton from "../components/AppButton"

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Home" }} />
            <JumboText>Home</JumboText>
            <Link href="/second" asChild>
                <AppButton>Go to second screen</AppButton>
            </Link>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})