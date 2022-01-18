/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

// import { Container } from './styles';

const numberGenerator: React.FC = () => {
  const [numero, setNumero] = useState(0);

  const handle = () => {
    let novoNumero = Math.floor(Math.random() * 10);
    setNumero(novoNumero);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.numero}>{numero}</Text>
      <TouchableOpacity style={styles.botao} onPress={handle}>
        <Text>Gerar Numero</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#00f',
    flex: 1,
    fontSize: 24,
    justifyContent: 'center',
  },
  numero: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width: '35%',
  },
});

export default numberGenerator;
