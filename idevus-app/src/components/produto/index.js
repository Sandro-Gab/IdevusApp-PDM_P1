import { View, Text, Image} from 'react-native';
import {styles} from '../../components/produto/styles';

export default function Produto({ nome, preco, imagem, cor }) {
  return (
    <View style={[styles.card, { backgroundColor: cor}]}>
      <Image source={{ uri: imagem }} style={styles.imagemProduto} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>{preco}</Text>
    </View>
  );
}