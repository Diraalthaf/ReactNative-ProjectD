import {Text,TextInput,View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';
import axios from 'axios';

const Note = () =>  {
    const [nama, setNama] = useState('');

    const buttonhandle = () =>{
        if (nama === '' || nama === ''){
            Alert.alert('Error', 'Form harus di isi dengan lengkap!!');
        }
        axios
            .post("http://192.168.142.99/PPB_Dira/Add.php", { nama})
            .then((response) => {
                Alert.alert('SUKSES', response.data.message);
                setNama("");
            })
            .catch((error) => {
                Alert.alert('Error',);
            })
    }
    return (
        <View>
            <Text style={styles.heading}>input your name!</Text>
            <TextInput style={styles.nname} placeholder='Nama' value={nama} onChangeText={setNama}/>
            <TouchableOpacity style={styles.btn} onPress={buttonhandle}>
                <Text style={{alignSelf:'center'}}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    nname: {
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 30,
        height: 50,
        marginTop: 20
    },
    nnote: {
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 30,
        height: 60,
        marginTop: 20
    },
    btn: {
        backgroundColor: 'limegreen',
        marginHorizontal: 150,
        marginTop: 10,
        borderRadius: 5
    },
    heading: {
        textAlign:'center',
        top: 10,
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default Note;