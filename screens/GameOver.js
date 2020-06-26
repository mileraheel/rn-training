import React from 'react';
import {
    View, StyleSheet, Text, Button,
    Image, Dimensions, ScrollView
} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
import {ScreenOrientation}  from 'expo'

const GameOver = props => {
    return (
       
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>Game is Over !</TitleText>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        source={require('../assets/success.png')}
                    //source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/62/mountain-summit-1375015_960_720.jpg' }}
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
                        Your phone needed <Text style={styles.highlight}>{props.roundsNumber}{' '}</Text>
    rounds to guess the number {' '}<Text style={styles.highlight}>{props.number}</Text>
                    </BodyText>
                </View>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        //width: 300,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
        /* width:300,
        height:300  */
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 15,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height > 400 ? 16 : 20
    }
});

export default GameOver;
