import React from "react";
import { useState } from "react";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PlusButton } from "../../components/plusButton/PlusButton";
import { ButtonWithIcon, SimpleButton } from "../../components/touchables";
import { SimpleContainer } from "../../components/containers/styles";
import { ModalContainer, ModalView } from "./styles";
import { propsStack } from "../../routes/models";

export const HomeScreen = () => {
  const navigation = useNavigation<propsStack>();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SimpleContainer>
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
