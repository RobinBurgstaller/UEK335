import { View, StyleSheet } from "react-native"
import {Link, router, Stack} from "expo-router"
import JumboText from "../components/JumboText"
import AppButton from "../components/AppButton"

export default function SecondScreen() {
    const goBack = () => {
        router.back()
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Second" }} />
            <JumboText>Second</JumboText>
            <AppButton onPress={goBack}>Go back</AppButton>
            <Link href="/third" asChild>
                <AppButton>Go to third screen</AppButton>
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