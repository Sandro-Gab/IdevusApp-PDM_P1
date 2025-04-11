import { useState, useRef } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Animated,
  Easing,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Header from '../../components/header/index';
import {styles} from '../../pages/idegames/styles';
import Texto from '../../components/texto/index';
import Footer from '../../components/footer/index';

export default function RoletaComScroll() {
  const [pontos, setPontos] = useState(500);
  const [numeroEscolhido, setNumeroEscolhido] = useState(null);
  const [corEscolhida, setCorEscolhida] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [girando, setGirando] = useState(false);

  const spinAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const bounceAnim = useRef(new Animated.Value(1)).current;

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
  const numerosVermelhos = [1, 3, 5, 7];

  const girarRoleta = () => {
    if (girando) return;
    
    if (pontos <= 0) {
      Alert.alert('Fim de jogo', 'Você ficou sem fichas!', [
        { text: 'Recomeçar', onPress: () => setPontos(500) }
      ]);
      return;
    }
    
    if (!numeroEscolhido || !corEscolhida) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 100,
          useNativeDriver: true
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true
        })
      ]).start();
      
      Alert.alert('Aposta incompleta', 'Por favor, selecione um número e uma cor!');
      return;
    }

    setGirando(true);
    
    Animated.parallel([
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true
      }),
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 750,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true
        })
      ])
    ]).start(() => {
      const numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)];
      const corReal = numerosVermelhos.includes(numeroSorteado) ? 'vermelho' : 'preto';
      
      setResultado({ numero: numeroSorteado, cor: corReal });
      setGirando(false);
      
      let pontosGanhos = 0;
      let mensagem = '';
      
      if (corEscolhida === corReal && numeroEscolhido === numeroSorteado) {
        pontosGanhos = 200;
        mensagem = 'Jackpot! Número e cor corretos!';
      } else if (numeroEscolhido === numeroSorteado) {
        pontosGanhos = 100;
        mensagem = 'Número correto!';
      } else if (corEscolhida === corReal) {
        pontosGanhos = 50;
        mensagem = 'Cor correta!';
      } else {
        mensagem = 'Não foi dessa vez...';
      }
      
      setPontos(pontos + pontosGanhos);
      
      Alert.alert(
        pontosGanhos > 0 ? 'Você ganhou!' : 'Resultado',
        `Sorteado: ${numeroSorteado} (${corReal})\n${mensagem}\n${pontosGanhos > 0 ? `+${pontosGanhos} fichas!` : ''}`,
        [{ text: 'OK', style: 'default' }]
      );
    });
  };

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg']
  });

  return (
    <SafeAreaView style={styles.safeArea}>
    <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Texto titulo='IdeGames apresenta: Roulette Devus' texto='Teste sua sorte com diversão!' ticor='#33cc33' txcor='#FFF'/>
          
          <View style={styles.pontosContainer}>
            <Text style={styles.pontosLabel}>SUAS FICHAS:</Text>
            <Animated.Text 
              style={[
                styles.pontosValue,
                { transform: [{ scale: bounceAnim }] }
              ]}
            >
              {pontos}
            </Animated.Text>
          </View>
          
          <View style={styles.bettingArea}>
            <Text style={styles.sectionTitle}>SELECIONE UM NÚMERO</Text>
            <View style={styles.numbersGrid}>
              {numeros.map(num => (
                <Animated.View 
                  key={num} 
                  style={[
                    styles.numberChip,
                    numerosVermelhos.includes(num) ? styles.redChip : styles.blackChip,
                    numeroEscolhido === num && styles.selectedChip,
                    { 
                      transform: [
                        { scale: numeroEscolhido === num ? bounceAnim : scaleAnim }
                      ] 
                    }
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => !girando && setNumeroEscolhido(num)}
                    style={styles.chipButton}
                  >
                    <Text style={styles.chipText}>{num}</Text>
                  </TouchableOpacity>
                </Animated.View>
              ))}
            </View>
            
            {/* Seleção de cores */}
            <Text style={styles.sectionTitle}>ESCOLHA UMA COR</Text>
            <View style={styles.colorSelection}>
              <Animated.View style={[
                styles.colorChip, 
                styles.redChipBig,
                corEscolhida === 'vermelho' && styles.selectedColorChip,
                { transform: [{ scale: corEscolhida === 'vermelho' ? bounceAnim : scaleAnim }] }
              ]}>
                <TouchableOpacity
                  onPress={() => !girando && setCorEscolhida('vermelho')}
                  style={styles.chipButton}
                >
                  <Text style={styles.colorText}>VERMELHO</Text>
                </TouchableOpacity>
              </Animated.View>
              
              <Animated.View style={[
                styles.colorChip, 
                styles.blackChipBig,
                corEscolhida === 'preto' && styles.selectedColorChip,
                { transform: [{ scale: corEscolhida === 'preto' ? bounceAnim : scaleAnim }] }
              ]}>
                <TouchableOpacity
                  onPress={() => !girando && setCorEscolhida('preto')}
                  style={styles.chipButton}
                >
                  <Text style={styles.colorText}>PRETO</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
          
          <Animated.View 
            style={[
              styles.spinButtonContainer,
              { 
                transform: [
                  { rotate: spin },
                  { scale: scaleAnim }
                ],
                opacity: fadeAnim
              }
            ]}
          >
            <TouchableOpacity
              onPress={girarRoleta}
              disabled={girando}
              style={styles.spinButton}
            >
              <View style={styles.spinButtonGradient}>
                <Text style={styles.spinButtonText}>
                  {girando ? 'GIRANDO...' : 'GIRAR ROULETTE'}
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
          
          {/* Resultado */}
          {resultado && (
            <Animated.View 
              style={[
                styles.resultContainer,
                { transform: [{ scale: scaleAnim }] }
              ]}
            >
              <Text style={styles.resultTitle}>ÚLTIMO RESULTADO:</Text>
              <View style={[
                styles.resultBall,
                resultado.cor === 'vermelho' ? styles.redChip : styles.blackChip
              ]}>
                <Text style={styles.resultNumber}>{resultado.numero}</Text>
              </View>
              <Text style={styles.resultText}>
                Nº {resultado.numero} | {resultado.cor.toUpperCase()}
              </Text>
            </Animated.View>
          )}
        </View>
        <Footer corTudo='#FFF'/>
      </ScrollView>
    </SafeAreaView>
  );
}