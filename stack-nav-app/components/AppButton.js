import {Text, StyleSheet, TouchableOpacity, View} from "react-native"

export default function AppButton({ onPress, children }) {
    return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 48,
        paddingHorizontal: 16,
        elevation: 4,
        backgroundColor: "#222222",
        borderRadius: 50,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        maxHeight: 48,
        marginBottom: 10,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
    },
})
