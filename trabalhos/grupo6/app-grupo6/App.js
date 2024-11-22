import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import GradientButton from './components/botao';
import GradientText from './components/textoGradiente';


export default function App() {
  //fundo animado
  const animation = useRef(new Animated.Value(0)).current;
  //

  // Fontes personalizadas
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'AlfaSlabOne': require('./assets/fonts/AlfaSlabOne-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);
  //

  // Animação do fundo
  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 2,
        duration: 2000, // Duração da animação em milissegundos
        useNativeDriver: false, // Necessário para estilos que não usam transformações nativas
      })
    ).start();
  }, [animation]);

  // Interpolar valores para os gradientes
  const color1 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(50, 50, 200, 1)', 'rgba(50, 200, 255, 1)'],
  });
  const color2 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(250,105,50,1)', 'rgba(255,150,50,1)'],
  });
  //

  //logo
  const loadRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
    loadRef?.current?.play(0, 40);
  }, [])

  const loadLoop = () => {
    loadRef?.current?.play();
  }

  const logoLoop = () => {
    logoRef?.current?.play();
  }

  // Renderização condicional para garantir que a fonte foi carregada
  if (!fontsLoaded) {
    return null; // Mostra uma tela de carregamento ou nada enquanto carrega as fontes
  }

  return (
    <Animated.View
      style={{ flex: 1 }}>
      <LinearGradient
        colors={[color1.__getValue(), color2.__getValue()]} // Convertendo os valores animados
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFillObject} // Para ocupar toda a tela
      />
      <View style={styles.container}>

        <View style={styles.content}>
          <LottieView
            ref={loadRef}
            style={{ width: 400, height: 400, marginTop: -500, marginLeft: 60 }}
            source={require('./assets/animations/backgroundNome1.json')}
            loop={false}
            duration={4600}
          />
          <GradientText text="JUNTOS'" style={styles.gradientText} />
          <GradientText text="sports club" style={styles.gradientText} />


          <GradientButton text="Iniciar" />
        </View>
        <StatusBar style="auto" />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    height: 600,
    aspectRatio: 1,
  },
  nomeApp: {
    fontFamily: 'AlfaSlabOne',
    fontSize: 24,
    color: 'white',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icon: {
    height: 200,
    aspectRatio: 1,
  },
  gradientText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
