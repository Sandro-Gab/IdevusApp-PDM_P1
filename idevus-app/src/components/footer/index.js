import {View, Text} from 'react-native';
import {styles} from '../../components/footer/styles';

export default function Footer(props) {
  const corTudo=props.corTudo;
  return (
    <View style={styles.footer}>
      <Text style={[styles.footerText, {color:corTudo}]}>Criado por Miguel e Sandro</Text>
      <Text style={[styles.footerSub, {color:corTudo}]}>© 2025 Idevus</Text>
    </View>
  );
}
