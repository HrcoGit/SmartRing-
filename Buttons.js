import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from '../styles';

const Buttons = ({ changeView, updateValues }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.arrowButton} onPress={() => changeView(-1)}>
        <Text style={styles.arrowText}>◀</Text>
      </Pressable>
      <Pressable style={styles.mainButton} onPress={updateValues}>
        <Text style={styles.buttonText}>Ažuriraj</Text>
      </Pressable>
      <Pressable style={styles.arrowButton} onPress={() => changeView(1)}>
        <Text style={styles.arrowText}>▶</Text>
      </Pressable>
    </View>
  );
};

export default Buttons;
