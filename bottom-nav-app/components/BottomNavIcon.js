import Ionicons from "@expo/vector-icons/Ionicons";
const BottomNavIcon = (props) => {
    return(
        <Ionicons
            size={28}
            name={props.name}
            color={props.color}
        />
    )
}

export default BottomNavIcon;