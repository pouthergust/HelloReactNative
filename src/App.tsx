import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';

import Card from './components/Card';

// import { Container } from './styles';

const App: React.FC = () => {
  const img = 'https://github.com/pouthergust.png';
  const item = [{ name: 'github' }, { name: 'facebook' }, { name: 'linkedin' }];

  const cards = [
    {
      header: 'Experiência Profissional',
      title: ['Designer Gráfico', 'Desenvolvedor frontend Jr'],
    },
    {
      header: 'Formação Academica',
      title: ['Digital House', 'Microlins'],
    },
  ];

  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho}>
          <Image source={{ uri: img }} style={styles.foto} />
          <Text style={styles.nome}>Gabriel Henrique</Text>
          <Text style={styles.funcao}>Designer &amp; Desenvolvedor Jr</Text>
          <View style={styles.social}>
            {item.map((icon, index) => (
              <Icon name={icon.name} key={index} size={16} />
            ))}
          </View>
          <Card cards={cards} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 125,
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    fontSize: 14,
    color: '#939393',
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    width: 64,
  },
});

export default App;
