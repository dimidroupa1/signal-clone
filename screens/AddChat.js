import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react';
import { Button, Input } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const AddChat = ({ navigation }) => {

    const [chatName, setChatName] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats",
        })
    }, [navigation]);

    const createChat = async () => {
        await db.collection("chats").add({
            chatName: chatName,
            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            navigation.goBack();
        }).catch(
            (error) => alert(error.message)
        )
    };

    return (
        <View style={styles.conatiner}>
            <Input 
                placeholder='Enter a chat name'
                value={chatName}
                onChangeText={(name) => setChatName(name)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Icon name="wechat" type="antdesign" size={24} color="black" />
                }
            />
            <Button onPress={createChat} title="Create new chat" />
        </View>
    )
}

export default AddChat

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    },
})