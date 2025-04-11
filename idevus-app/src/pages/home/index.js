import { View, Text, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Primeira from '../../pages/ideinfra/index';
import Segunda from '../../pages/idepecas/index';
import Terceiro from '../../pages/idelivros/index';
import Quarta from '../../pages/idemoda/index';
import Quinto from '../../pages/idecrypto/index';
import Sexto from '../../pages/idegames/index';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Texto from '../../components/texto/index';
import Botao from '../../components/botao/index';
import {styles} from '../../pages/home/styles';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Header />
      <View style={styles.container}>
      <Texto titulo='Bem-vindo a Idevus!' texto='Temos várias franquias. Escolha uma e saiba mais sobre nós!' cor='#FFF'/>
      <Botao
        titulo="IDEINFRA"
        cor="#6703A3"
        click={() => navigation.navigate('IdeInfra')}
        imagem={require('../../img/ideinfra.png')}
      />
      <Botao
        titulo="IDEPEÇAS"
        cor="#D11D29"
        click={() => navigation.navigate('IdePecas')}
        imagem={require('../../img/idepecas.png')}
      />
      <Botao
        titulo="IDELIVROS"
        cor="#1D5DE6"
        click={() => navigation.navigate('IdeLivros')}
        imagem={require('../../img/idelivros.png')}
      />
      <Botao
        titulo="IDEMODA"
        cor="#EB33D1"
        click={() => navigation.navigate('IdeModa')}
        imagem={require('../../img/idemoda.png')}
      />
      <Botao
        titulo="IDECRYPTO"
        cor="#F0A235"
        click={() => navigation.navigate('IdeCrypto')}
        imagem={require('../../img/idecrypto.png')}
      />
      <Botao
        titulo="IDEGAMES"
        cor="#26CF7A"
        click={() => navigation.navigate('IdeGames')}
        imagem={require('../../img/idegames.png')}
      />
      <Footer corTudo='#FFF'/>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicial" component={Home} />
        <Stack.Screen name="IdeInfra" component={Primeira} />
        <Stack.Screen name="IdePecas" component={Segunda} />
        <Stack.Screen name="IdeLivros" component={Terceiro} />
        <Stack.Screen name="IdeModa" component={Quarta} />
        <Stack.Screen name="IdeCrypto" component={Quinto} />
        <Stack.Screen name="IdeGames" component={Sexto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}