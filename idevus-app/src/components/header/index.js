import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../components/header/styles';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
        <Image source={require('../../img/idevus-logo.png')} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}