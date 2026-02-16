import {View, StyleSheet, Pressable, Text} from "react-native"
import {router, Stack} from "expo-router";
import JumboText from "../components/JumboText"

import AppButton from "../components/AppButton";

export default function ThirdScreen() {
    const goBack = () => {
        router.back()
    }
    const goBackToHome = () => {
        router.replace('/')
    }
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Third",
                    headerRight: () => (
                        <Pressable onPress={() => alert("Alert pressed")}>
                            <Text>Alert</Text>
                        </Pressable>
                    )
                }}
            />
            <JumboText>Third</JumboText>
            <AppButton onPress={goBack}>Go back</AppButton>
            <AppButton onPress={goBackToHome}>Go back To Home</AppButton>
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