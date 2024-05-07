// register.jsx
import { View } from "react-native";
import { styles } from "../config/styles"; 
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleRegister = () => {
    if (email.trim() === "") {
      setErro("Por favor, digite seu email.");
      return;
    }

    if (senha.trim() === "") {
      setErro("Por favor, digite sua senha.");
      return;
    }

    if (repetirSenha.trim() === "") {
      setErro("Por favor, repitais sua senha.");
      return;
    }

    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
        <Text>Página de Registro!</Text>
      <View style={styles.container_inner}>
        
        <TextInput
          label={"Email"}
          placeholder={"Digite seu e-mail"}
          value={email}
          onChangeText={setEmail}
          style={styles.textInput} 
        />
        <TextInput
          label={"Senha"}
          placeholder={"Digite sua Senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry // Para esconder a senha
          style={styles.textInput}
        />
        <TextInput
          label={"Repetir senha"}
          placeholder={"Repita sua senha"}
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          secureTextEntry // Para esconder a senha
          style={styles.textInput}
        />
        {erro ? <Text style={styles.error}>{erro}</Text> : null}
        <Button mode="contained" onPress={handleRegister}>Cadastrar</Button>
      </View>
    </View>
  );
}
