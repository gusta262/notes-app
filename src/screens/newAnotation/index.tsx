import { Alert } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import uuid from 'react-native-uuid';
import { RowLine, SimpleContainer } from "../../components/containers/styles";
import { CustomTextInput } from "../../components/inputs";
import { SubmitButton, SubmitText } from "./styles";
import React from "react";
import { getRealm } from "../../database/RealmConfig";

type payload = {
  title: string;
  anotation: string;
}

export const NewAnotationScreen = ({ navigation, type }) => {
  
  const createAnotation = async (values: payload) => {
    try {
      const realm = await getRealm();
      const data = realm.write(() => {
        realm.create("Anotations", {
          _id: uuid.v4(),
          title: values.title,
          anotation: values.anotation,
          created_at: new Date().toISOString(),
        });
      })

      realm.close();
      console.log("aaa", data)
    } catch (error) {
      console.log("bbb", error)
    }
  };

  const schema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
    anotation: yup.string().required("A anotação é obrigatória"),
  });

  const form = useFormik({
    initialValues: {
      title: "",
      anotation: "lerolero",
    },

    onSubmit: (values) => createAnotation(values),

    validationSchema: schema,
  });

  return (
    <>
      <SimpleContainer>
        <CustomTextInput
          placeholder="Digite o título"
          label="Título:"
          value={form.values.title}
          onChangeText={form.handleChange("title")}
        />
        <RowLine />
      </SimpleContainer>
      <SubmitButton  onPress={() => {
        if (form.isValid) {
          form.handleSubmit();
          navigation.goBack();
        } else {
          Alert.alert("Erro", "Preencha todos os campos");
        }
      }}>
        <SubmitText>Salvar</SubmitText>
      </SubmitButton>
    </>
  );
};
