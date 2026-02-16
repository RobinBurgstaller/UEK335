import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {Link} from "expo-router"
import Colors from '../constants/Colors'

const RoboterListItem = ({item}) => {
    return (
        <Link href={`/${item.id}`} asChild>
            <TouchableOpacity style={styles.container}>
                <Image source={{uri: item.avatar}} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {item.first_name}
                    </Text>
                    <Text style={styles.location}>
                        {item.location.country}
                    </Text>
                </View>
                <Text style={styles.age}>
                    {item.age}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 4,
        borderRadius: 12,
        backgroundColor: Colors.white,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        minWidth: 300,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 16,
        borderWidth: 3,
        borderColor: Colors.primary
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 4,
    },
    gender: {
        color: Colors.textSecondary,
        fontSize: 18,
        marginBottom: 16
    },
    age: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginBottom: 4,
    },
    location: {
        fontSize: 12,
        color: Colors.textMuted,
    }
})

export default RoboterListItem;