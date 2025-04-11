import { View, Text } from 'react-native';
import { styles } from '../../components/texto/styles';

function Texto(props) {
  const corGeral = props.cor;

  const corTitulo = props.ticor || corGeral;
  const corTexto = props.txcor || corGeral;

  return (
    <View>
      <Text style={[styles.title, { color: corTitulo }]}>{props.titulo}</Text>
      <Text style={[styles.text, { color: corTexto }]}>{props.texto}</Text>
    </View>
  );
}

export default Texto;