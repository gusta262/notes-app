import React, { useCallback } from "react";
import { useState } from "react";
import { Modal, Text, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { PlusButton } from "../../components/plusButton/PlusButton";
import { ButtonWithIcon, SimpleButton } from "../../components/touchables";
import { SimpleContainer } from "../../components/containers/styles";
import { ModalContainer, ModalView } from "./styles";
import { propsStack } from "../../routes/models";
import { getRealm } from "../../database/RealmConfig";

type notesProps = {
  _id: string;
  title: string;
  anotation: string;
  type: string;
  created_at: Date;
};

export const HomeScreen = () => {
  const navigation = useNavigation<propsStack>();
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState<notesProps[]>([]);

  const getNotes = async () => {
    const realm = await getRealm();
    try {
      const response = realm.objects<notesProps[]>("Anotation").toJSON();
      setNotes(response);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    } finally {
      realm.close();
    }
  };

  useFocusEffect(
    useCallback(() => {
      getNotes();
    }, [])
  );

  return (
    <SimpleContainer>
      <View>
        {notes.map((note) => (
          <View key={note._id}>
            <Text>{note.title}</Text>
            <Text>{note.anotation}</Text>
          </View>
        ))}
      </View>
      <PlusButton onPress={() => setModalVisible(true)} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalView>
            <ButtonWithIcon
              label="Nova anotação"
              iconName="pencil"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("NewNote", {
                  title: "Nova Anotação",
                });
              }}
            />
            <ButtonWithIcon
              label="Nova lista"
              iconName="list"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("NewNote", {
                  title: "Nova Lista",
                });
              }}
            />
            <SimpleButton
              onPress={() => setModalVisible(false)}
              label="Voltar"
            />
          </ModalView>
        </ModalContainer>
      </Modal>
    </SimpleContainer>
  );
};
