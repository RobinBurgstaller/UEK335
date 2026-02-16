import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomNavIcon from "../../components/BottomNavIcon";
import { Text } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="explore/index"
                options={{
                    title: "Explore",
                    tabBarIcon: ({color}) => (
                        <BottomNavIcon name="compass" color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="trails/index"
                options={{
                    title: "Trails",
                    tabBarIcon: ({ color }) => (
                        <BottomNavIcon name="trail-sign" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color }) => (
                        <BottomNavIcon name="heart" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <BottomNavIcon name="person-circle" color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}