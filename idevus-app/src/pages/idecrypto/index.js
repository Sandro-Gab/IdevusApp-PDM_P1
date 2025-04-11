import { useState, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  Animated,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
import Header from '../../components/header/index';
import {styles} from '../../pages/idecrypto/styles';
import Footer from '../../components/footer/index';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const conversionRate = 1.0;

  const getFormattedDate = () => {
    const now = new Date();
    return now.toLocaleString();
  };

  const getRandomMultiplier = () => {
    const min = 0.1;
    const max = 1000;
    return Math.random() * (max - min) + min;
  };

  const handleConversion = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Atenção', 'Por favor, insira um valor.');
      return;
    }

    const amount = parseFloat(inputValue);
    if (isNaN(amount) || amount <= 0) {
      Alert.alert('Erro', 'Digite um número válido maior que zero.');
      return;
    }
    
    const multiplier = getRandomMultiplier();
    const result = (amount * multiplier * conversionRate).toFixed(2);
    setValue(`CryptoDevus convertido (em R$): CD$${result}`);
    setDate('Valor em '+getFormattedDate());

    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const toggleSwitch = () => setIsDarkMode(prev => !prev);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Header />
      <View style={[styles.container, { backgroundColor: theme.bg }]}>
        <Text style={[styles.title, { color: theme.text }]}>IdeCrypto</Text>
        <Text style={[styles.text, { color: theme.subText }]}>Como qualquer outra criptomoeda, nossa CryptoDevus também muda constantemente. Descobra aqui seu valor atual!</Text>

        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.subText }]}
          placeholder="Digite o valor"
          placeholderTextColor={theme.subText}
          keyboardType="numeric"
          value={inputValue}
          onChangeText={setInputValue}
        />

        <TouchableOpacity
          onPress={handleConversion}
          style={[styles.button, { backgroundColor: theme.buttonBg }]}
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>Converter</Text>
        </TouchableOpacity>

        <Animated.Text
          style={[
            styles.result,
            {
              color: theme.text,
              opacity: fadeAnim,
              transform: [{ scale: fadeAnim }],
            },
          ]}
        >
          {value}
        </Animated.Text>

        <Text style={[styles.date, { color: theme.subText }]}>{date}</Text>

        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, { color: theme.text }]}>Modo Escuro</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleSwitch}
            thumbColor={'#fff'}
            trackColor={{ false: '#ccc', true: '#ffa94d' }}
          />
        </View>
        <Footer corTudo={theme.text}/>
      </View>
    </ScrollView>
  );
}
const lightTheme = {
  bg: '#fff',
  text: '#333',
  subText: '#555',
  buttonBg: '#ffa94d',
  buttonText: '#fff',
};

const darkTheme = {
  bg: '#111',
  text: '#fff',
  subText: '#ccc',
  buttonBg: '#ffae4d',
  buttonText: '#000',
};