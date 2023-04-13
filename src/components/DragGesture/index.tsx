import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { normalize, wp } from '../../styles/responsiveScreen';

function DragGesture({ isChangePosition }: DragGestureProps) {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    type ContextType = {
        translateX: number;
        translateY: number;
    };

    const panGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        ContextType
    >({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
        },
        onEnd: () => {
            if (!isChangePosition) {
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            }
        },
    });

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={panGestureEvent}>
                <Animated.View style={[styles.square, rStyle]} >
                    <Text style={styles.textStyle}>{'Drag me anywhere'}</Text>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
}

interface DragGestureProps {
    isChangePosition: boolean;
}

export default ({ isChangePosition }: DragGestureProps) => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <DragGesture isChangePosition={isChangePosition} />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        width: wp(50),
        height: wp(15),
        backgroundColor: 'pink',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'black',
        fontSize: normalize(16),
        fontWeight: 'bold',
    }
});
