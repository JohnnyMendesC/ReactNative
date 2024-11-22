import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  // Certifique-se de importar corretamente!

const GradientButton = ({ text }) => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f5d']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.button}
    >
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GradientButton;
