import {Text,TextInput,View, StyleSheet, TouchableOpacity, Alert, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Note = () =>  {
    type Catatan = {
        id: number;
        nama: string;
        catatanku: string;
        tanggal: string;
    }

    const [nama, setNama] = useState('');
    const [catatan, setCatatan] = useState('');
    const [data, setData] = useState<Catatan[]>([]);
    const [editId, setEditId] = useState<number | null>(null);

    const buttonhandle = () =>{
        if (nama === '' || catatan === ''){
            Alert.alert('Error', 'Form harus di isi dengan lengkap!!');
        }

        if (editId !== null) {
            axios
              .post("http://192.168.142.99/PPB_Dira/update.php", {
                id: editId,
                nama,
                catatan,
              })
              .then((res) => {
                Alert.alert("SUKSES", res.data.message);
                setEditId(null);
                setNama('');
                setCatatan('');
                fetchData();
              })
              .catch(() => {
                Alert.alert("Error", "Gagal update data!");
              });
          } else {
            const tanggalBaru = new Date().toLocaleString('id-ID');      


        axios
            .post("http://192.168.142.99/PPB_Dira/Add.php", { nama, catatan})
            .then((response) => {
                Alert.alert("SUKSES", response.data.message);
                setNama("");
                setCatatan("");
                fetchData();
            })
            .catch((error) => {
                Alert.alert('Error',);
            });
    };

    const fetchData = () => {
        axios
        .get("http://192.168.142.99/PPB_Dira/get.php")
        .then ((response) => {
            if (Array.isArray(response.data)) {
                setData(response.data)
            }else {
                setData([])
            }
        })
        .catch(() => {
            Alert.alert("Error", "Gagal mengambil data dari db");
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View>
            <Text style={styles.heading}>CATATANKU</Text>
            <TextInput style={styles.nname} placeholder='Nama' value={nama} onChangeText={setNama}/>
            <TextInput style={styles.nnote} placeholder='Catatan' value={catatan} onChangeText={setCatatan} multiline={true}/>
            <TouchableOpacity style={styles.btn} onPress={buttonhandle}>
                <Text style={{alignSelf:'center'}}>SAVE</Text>
            </TouchableOpacity>
            <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
                <View>
                    <Text>nama: {item.nama}</Text>
                    <Text>{item.catatanku}</Text>
                    <Text>{item.tanggal}</Text>
                </View>
            )}
        />
        </View>
    );
};

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
}

export default Note;