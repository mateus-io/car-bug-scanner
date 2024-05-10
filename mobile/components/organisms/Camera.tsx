import { submitPhoto } from '@/services/submitPhoto';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { PrimaryText } from '../atoms/PrimaryText';

export function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState(null);
  const cameraRef = useRef<any>(null);
  const [result, setResult] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        if (cameraRef.current) {
            const data = await cameraRef.current.takePictureAsync();
            setImage(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  function resetInterface() {
    setImage(null)
  }

  async function handleSubmitPhoto() {
    try {
        setLoading(true)
        const response = await submitPhoto(image)
        setResult(response['result'])
    } catch (e: any) {
        Alert.alert('Erro', e.message)
    } finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    if (image) {
        handleSubmitPhoto()
    }
  }, [image])

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
        {
            !image ? (
                <CameraView
                    style={styles.camera} facing={facing}
                    ref={cameraRef}
                >
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={takePicture}>
                            <Text style={styles.text}>Tirar Foto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                            <Text style={styles.text}>Inverter Camera</Text>
                        </TouchableOpacity>
                    </View>
                </CameraView>
            ) : (
                <ScrollView>
                    <View style={styles.resultContainer}>
                        {
                            loading && (
                                <Text>
                                    Carregando...
                                </Text>
                            )
                        }
                        {
                            result && (
                                result.map((item) => (
                                    <View key={item} style={styles.bugItem}>
                                        <PrimaryText>
                                            {item}
                                        </PrimaryText>
                                    </View>
                                ))
                            )
                        }
                        <TouchableOpacity style={styles.button} onPress={resetInterface}>
                            <Text style={[styles.text, { color: '#000' }]}>Tentar novamente</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )
        }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    margin: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    height: 50,
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  resultContainer: {
    alignItems: 'center'
  },
  bugItem: {
    textAlign: 'left',
    backgroundColor: '#e3e3e3',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 5
  }
});