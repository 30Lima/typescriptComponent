import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './Title';
import Imagem from './Imagem';
import Description from './Description';

export default function App() {
  return (
    <View style={styles.container}>
      <Title titulo='🏆 CORINTHIANS CAMPEÃO PAULISTA 2025! 🏆' corTexto='white' />
      <Imagem source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNg_fZVTMv2If7QhB2yzkcoC72Jn50yNl6bQ&s" />
      <Description descricao='O Corinthians é o grande campeão do Paulistão 2025, conquistando o 31º título estadual de sua história! Sob o comando do técnico Ramón Díaz, o Timão superou o rival Varmeiras em uma final emocionante e levantou mais uma taça para sua gloriosa galeria.' />
      <Description descricao='Após um empate tenso no jogo de volta, o Corinthians garantiu a vantagem com o gol de Yuri Alberto na primeira partida da final. Com uma defesa sólida e a raça característica da equipe, o Timão segurou o resultado e fez a Fiel explodir de alegria na Neo Química Arena.' />
      <Description descricao='A festa tomou conta das arquibancadas e das ruas de São Paulo, mostrando mais uma vez que o Corinthians é sinônimo de tradição, garra e títulos. Agora, o clube se prepara para os desafios da temporada, com a confiança renovada por mais uma conquista histórica!' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#789898',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
