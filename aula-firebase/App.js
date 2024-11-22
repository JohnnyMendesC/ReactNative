import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { db } from './firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, onSnapshot, addDoc, collection, getDocs } from 'firebase/firestore';
import UsuariosList from './components/usuarios';

export default function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [usuarios, setUsuarios] = useState([]); //useState que passa os usuarios pro flatList

  

  useEffect(() => {
    async function getDados() {

      //1 - para exibição manual: 
      // const docRef = doc(db, "usuarios", "1");
      ////getDoc não atualiza automatico, mas é menos pesado

      //getDoc(docRef)
      // .then((snapshot) => {
      //   console.log(snapshot.data()?.nome);
      //   setNome(snapshot.data()?.nome);
      // }).catch((error) => {
      //   console.log(error);
      // });

      ////onSnapshot é mais pesado, mas atualiza instantaneamente as mudanças do banco
      // onSnapshot(doc(db, "usuarios", "3"), (doc)=>{
      //   setNome(doc.data()?.nome);
      // })


      //2 - para flatList
      const userRef = collection(db, "usuarios");
      getDocs(userRef).then((snapshot) => {
      // onSnapshot(userRef ,(snapshot) => {
          let lista = [];
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              nome: doc.data().nome,
              email: doc.data().email,
              cargo: doc.data().cargo,
            });
          });
          console.log(lista);
          setUsuarios(lista);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getDados();
  }, [])

  async function handleRegister() {
    //await setDoc(doc(db, "usuarios"), {
    //   await addDoc(doc(db, "usuarios", "1"), {
    //     nome: "nome",
    //     email: "email",
    //     cargo: "cargo",
    //   })    
    //   .then(() => {
    //     console.log("Cadastrado com sucesso");
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   });
    // }
    await addDoc(collection(db, "usuarios"), {
      nome: nome,
      email: email,
      cargo: cargo,
    })
      .then(() => {
        console.log("Cadastrado com sucesso");
        setNome("");
        setEmail("");
        setCargo("");
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Firebase</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder='Digite seu email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Cargo:</Text>
      <TextInput
        placeholder='Digite seu cargo'
        value={cargo}
        onChangeText={(text) => setCargo(text)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={styles.labelUsuarios}> Lista de Usuarios</Text>
      <FlatList
        style={styles.list}
        data={usuarios}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <UsuariosList data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  button: {
    backgroundColor: "#000",
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    padding: 8,
    color: "#FFF",
    textAlign: "center",
  },
  label: {
    color: "#000",
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 8,
  },
  labelUsuarios: {
    marginTop: 14,
    marginLeft: 8,
    fontSize: 20,
    color: "#000",
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
});
