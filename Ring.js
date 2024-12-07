import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import styles from '../styles';

const Ring = ({ currentView, steps, heartRate, battery, notification }) => {
  const getCircleContent = () => {
    switch (currentView) {
      case 'steps':
        return `${steps} Koraka`;
      case 'heartRate':
        return `${heartRate} bpm`;
      case 'battery':
        return `${battery}% Baterija`;
      case 'notification':
        return notification;
      default:
        return '';
    }
  };

  const progress = currentView === 'steps' ? steps / 1000 : currentView === 'battery' ? battery / 100 : 1;

  return (
    <View style={styles.ringContainer}>
      <Svg height="200" width="200" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="40" stroke="#ccc" strokeWidth="10" fill="none" />
        <Circle
          cx="50"
          cy="50"
          r="40"
          stroke="#6200ea"
          strokeWidth="10"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - 251.2 * progress}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.ringText}>{getCircleContent()}</Text>
    </View>
  );
};

export default Ring;
