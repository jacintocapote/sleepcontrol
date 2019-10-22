import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { BaseNavigator } from './src/navigation';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <View style={styles.container}>
      <BaseNavigator/>
    </View>

  )
}

export default withAuthenticator(App, {
  includeGreetings: true
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293656'
  },
});

