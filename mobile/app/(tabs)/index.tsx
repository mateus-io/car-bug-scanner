import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import { Camera } from '../../components/organisms/Camera';

export default function CarBugScannerScreen() {

  return (
    <View style={styles.container}>

      <Camera />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    height: 1,
    width: '80%',
    alignSelf: 'center'
  },
  navigationWrapper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  navigationButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonLabel: {
    fontSize: 18,
    color: '#756a5c'
  }
});
