import {Alert, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import {fetchUsers, fetchUsersById} from "../lib/users";

export default function DetailScreen() {
    const { id } = useLocalSearchParams()
    const [robot, setRobot] = useState([])
    useEffect(() => {
        const loadRobot = async () => {
            try {
                const data = await fetchUsersById(id)
                setRobot(data)
            } catch (error) {
                console.error(error)
                Alert.alert("An error occurred loading the robots")
            }
        }
        console.log("Roboter", robot);
        loadRobot()
    }, [])
    return (
        <View>
        </View>
    )
}