import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Top from '@/assets/images/top left.png';
import Bottom from '@/assets/images/bottom left.png';
import Center from '@/assets/images/hengpong.png';

const Page1 = ({navigation}) => {
    return (
        <View style={StyleSheet.fp}>
            <Image source={Top} style={styles.png1}/>
            <View style={{alignItems: 'center'}}>
                <Image source={Center} style={styles.png2}/>
                <Text style={styles.text1}>Get things done with TODo</Text>
                <Text style={styles.text2}>To deal with situations quickly and efficiently</Text>
                <View style={styles.btn1}>
                <TouchableOpacity onPress={() => navigation.navigate ('Page2')}>
                    <Text style={styles.text3}>Get Started</Text>
                </TouchableOpacity>
                </View>
            </View>
            <Image source={Bottom} style={styles.png3}/>
        </View>
    );
};

export default Page1

const styles = StyleSheet.create({
    fp: {
        backgroundColor: '#F5F5F5',
        height: '100%'
    },
    png1: {
        width: 168,
        height: 145
    },
    png2: {
        width: 199,
        height: 260
    },
    png3:{
        width: 168,
        height: 145,
        left: 200,
        top: 140
    },
    text1: {
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: 'bold'
    },
    text2: {
        color: '#F5F5F5',
        fontSize: 12,
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
        top: 150
    }
});