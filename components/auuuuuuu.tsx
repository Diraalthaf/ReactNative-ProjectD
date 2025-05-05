import {View, Text, StyleSheet, TextInput} from 'react-native';

const Auuu = () => {
    return (
        <View>
            <View style={styles.circle}></View>
            <View style={styles.circle2}></View>
        </View>
    )
}

export default Auuu;

const styles = StyleSheet.create ({
    circle : {
        width: 150,
        height: 150,
        backgroundColor: 'skyblue',
        borderRadius: 100,
        left : 50,
        top: 80,
    },
    circle2 : {
        width: 150,
        height: 150,
        backgroundColor: '',
        borderRadius: 100
    },
})