import { Alert } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { RowLine, SimpleContainer } from "../../components/containers/styles";
import { CustomTextInput } from "../../components/inputs";
import { SubmitButton, SubmitText } from "./styles";
import React from "react";

export const NewAnotationScreen = ({ navigation, type }) => {

  const createAnotation = (values) => {
    console.log(values);
  };

  const schema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
    anotation: yup.string().required("A anotação é obrigatória"),
  });

  const form = useFormik({
    initialValues: {
      title: "",
      anotation: "",
      list: [],
      type,
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
