import React, { useRef, useEffect } from 'react';
import { View, Animated, Image, Easing, StyleSheet } from 'react-native';

const Loader = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spin.start();

    return () => {
      spin.stop();
    };
  }, [rotation]);

  const spinInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/100.png')} // Replace with the path to your dollar bill image
        style={[styles.loader, { transform: [{ rotate: spinInterpolate }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: 200, // Adjust the width of the image as needed
    height: 75, // Adjust the height of the image as needed
  },
});

export default Loader;
