import {Alert, View, StyleSheet, FlatList } from "react-native";
import {useState, useEffect} from "react";
import {fetchUsers} from "../lib/users";
import RoboterListItem from "../components/RoboterListItem";

export default function HomeScreen() {
    const [robots, setRobots] = useState([])
    useEffect(() => {
        const loadRobots = async () => {
            try {
                const data = await fetchUsers()
                setRobots(data)
            } catch (error) {
                console.error(error)
                Alert.alert("An error occurred loading the robots")
            }
        }
        loadRobots()
    }, [])
    return (
        <View style={styles.container}>
            <FlatList data={robots} renderItem={RoboterListItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
