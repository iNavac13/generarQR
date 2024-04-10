import React from 'react';
import { StyleSheet, View } from 'react-native';
import QRGenerator from './components/QRgenerator';

export default function App() {
  return (
    <View style={styles.container}>
      <QRGenerator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
