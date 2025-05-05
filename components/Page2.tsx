import {Image, Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Top from '@/assets/images/top left.png';
import Bottom from '@/assets/images/bottom left.png';

const Page2 = ({navigation}) => {
    return (
        <View style={styles.fp1}>
            <Image source={Top} style={styles.png1} />
            <View style={{alignItems: 'center'}}>
                <Text style={styles.text1}>Welcome Onboard!</Text>
                <Text style={styles.text2}>Let's help you meet up tasks.</Text>
            </View>
            <Image source={Bottom} style={styles.png2} />
            <View style={styles.box}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Class"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Hobby"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
            />
            <View style={styles.btn1}>
                <TouchableOpacity onPress={() => navigation.navigate('Page1')}>
                    <Text style={styles.text3}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

export default Page2;

const styles = StyleSheet.create ({
    fp1: {
        backgroundColor: '#F5F5F5',
        height: '100%'
    },
    png1: {
        width: 165,
        height: 145
    },
    png2:{
        width: 165,
        height: 145,
        left: 200,
        top: 425
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        bottom:35,
        alignSelf: 'center'
      },
    text1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 15,
        top: 10
    },
    text3: {
        color: '#F5F5F5',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 10
    },
    btn1: {
        width: 200,
        height: 40,
        backgroundColor: '#5DA9C9',
        borderRadius: 5,
        top: 50,
        left: 80
    }
});