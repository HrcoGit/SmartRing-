import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ring from './src/components/Ring';
import Buttons from './src/components/Buttons';
import styles from './src/styles';

export default function App() {
  const [currentView, setCurrentView] = useState('steps');
  const [steps, setSteps] = useState(0);
  const [heartRate, setHeartRate] = useState(60 + Math.floor(Math.random() * 40));
  const [battery, setBattery] = useState(100);
  const [notification, setNotification] = useState('Nova poruka!');

  const changeView = (direction) => {
    const views = ['steps', 'heartRate', 'battery', 'notification'];
    const currentIndex = views.indexOf(currentView);
    const newIndex = (currentIndex + direction + views.length) % views.length;
    setCurrentView(views[newIndex]);
  };

  const updateValues = () => {
    switch (currentView) {
      case 'steps':
        setSteps((prev) => prev + Math.floor(Math.random() * 10));
        break;
      case 'heartRate':
        setHeartRate(60 + Math.floor(Math.random() * 40));
        break;
      case 'battery':
        setBattery((prev) => Math.max(prev - Math.floor(Math.random() * 5), 0));
        break;
      case 'notification':
        const notifications = ['Nova poruka!', 'Dolazni poziv!', 'Podsjetnik: Pijte vodu!', 'Baterija pri kraju!'];
        setNotification(notifications[Math.floor(Math.random() * notifications.length)]);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pametni Prsten</Text>
      <Ring currentView={currentView} steps={steps} heartRate={heartRate} battery={battery} notification={notification} />
      <Buttons changeView={changeView} updateValues={updateValues} />
      <StatusBar style="auto" />
    </View>
  );
}
