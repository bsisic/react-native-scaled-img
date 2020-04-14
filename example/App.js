import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScaledImage from 'react-native-scaled-img'

const imgToScaled = require('./assets/splash.png')

export default function App() {
    return (
        <View style={styles.container}>
          <ScaledImage
              source={imgToScaled}
              width={200}
              style={{ opacity: 0.5 }}
          />
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
