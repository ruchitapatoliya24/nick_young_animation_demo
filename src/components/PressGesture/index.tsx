import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { normalize, wp } from '../../styles/responsiveScreen';

const PressGesture = () => {
    const pressed = useSharedValue(0);

    const pressHandler = useAnimatedGestureHandler<any
    >({
        onStart: () => {
            pressed.value = 1;
        },
        onEnd: () => {
            pressed.value = 0;
        },
    });

    const uas = useAnimatedStyle(() => {
        return {
            backgroundColor: pressed.value ? 'blue' : 'pink',
            transform: [{ scale: withSpring(pressed.value ? 1.2 : 1) }],
        };
    });

    return (
        <TapGestureHandler onGestureEvent={pressHandler}>
            <Animated.View style={[styles.square, uas]} >
                <Text style={styles.textStyle}>{'Press here'}</Text>
            </Animated.View>
        </TapGestureHandler>
    );
}

export default () => {
    return (
        <GestureHandlerRootView style={styles.center}>
            <PressGesture />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    square: {
        height: wp(40),
        width: wp(40),
        borderRadius: wp(20),
        backgroundColor: 'pink',
        alignSelf: 'center',
        marginVertical: wp(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'black',
        fontSize: normalize(16),
        fontWeight: 'bold',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
