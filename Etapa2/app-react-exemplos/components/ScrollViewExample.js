
import React, { Component} from "react";
import {View, Text, Image, ScrollView, StyleSheet } from 'react-native';

class ScrollViewExample extends Component {
    state = {
        names: [
            { 'name': 'Benson', 'id': 1 },
            { 'name': 'Susane', 'id': 2},
                       { 'name': 'Roberto', 'id': 3},
                       { 'name': 'Mary', 'id': 4},
                       { 'name': 'Daniel', 'id': 5},
                       { 'name': 'Laura', 'id': 6},
                       { 'name': 'John', 'id': 7},
                       { 'name': 'Debra', 'id': 8},
                       { 'name': 'Maria', 'id': 9},
                       { 'name': 'Livia', 'id': 10},
                       { 'name': 'Gustavo', 'id': 11},
                       { 'name': 'Julia', 'id': 12},
        ]
    }

    render() {
        return (
            <View>
                <ScrollView>
                 {
                    this.state.names.map((item, index) => (
                        <View 
                            key={item.id}
                            style={styles.item}
                        >
                        <Image source={require('../assets/favicon.png')} />
                        <Text>{item.name}</Text>
                        </View>
                    ))
                 }   
                </ScrollView>
            </View>
        );
    }
}
export default ScrollViewExample;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});
