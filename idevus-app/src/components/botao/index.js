import { View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../components/botao/styles';

function Botao(props){
  return(
  <TouchableOpacity style={[styles.botao, { backgroundColor: props.cor }]} onPress={props.click}>
      <View style={styles.conteudo}>
        {props.imagem && (
          <Image source={props.imagem} style={styles.imagem} />
        )}
        <Text style={styles.texto}>{props.titulo}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Botao;