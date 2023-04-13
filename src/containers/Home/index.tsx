import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import { normalize, wp } from '../../styles/responsiveScreen';

function Home() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('DragAnimation', { isChangePosition: false })} buttonHeight={null} buttonStyle={styles.btnStyle}>
                <Text style={styles.textStyle}>{'Drag Gesture with return original position'}</Text>
            </Button>
            <Button onPress={() => navigation.navigate('DragAnimation', { isChangePosition: true })} buttonHeight={null} buttonStyle={styles.btnStyle}>
                <Text style={styles.textStyle}>{'Drag Gesture with any position'}</Text>
            </Button>
            <Button onPress={() => navigation.navigate('PressAnimation')} buttonHeight={null} buttonStyle={styles.btnStyle}>
                <Text style={styles.textStyle}>{'Press Gesture'}</Text>
            </Button>
            <Button onPress={() => navigation.navigate('PinchAnimation')} buttonHeight={null} buttonStyle={styles.btnStyle}>
                <Text style={styles.textStyle}>{'Pinch Gesture'}</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: wp(6)
    },
    btnStyle: {
        marginTop: wp(5),
        paddingVertical: wp(3),
        paddingHorizontal: wp(3)
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: normalize(16),
        color: 'black',
        textAlign: 'center'
    }
});

export default Home;
