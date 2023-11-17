import React from "react";
import { View, TextInput, Text } from "react-native";

import styles from "./creationform.style";
import  Select  from "../../forms/Select";

const CreationForm = () => {
    return(
        <View style={ styles.formContainer }>
            <View style={ styles.inputContainer }>
                <Text>nombre</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text>descripción</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text>generos</Text>
                <TextInput />
            </View>
            <Select />
            <View style={ styles.inputContainer }>
                <Text>cantidad de bandas</Text>
                <TextInput />
            </View>
            <View style={ styles.dateContainer }>
                <View style={ styles.dateInfo }>
                    <Text>fecha</Text>
                    <TextInput />
                </View>
                <View style={ styles.dateInfo }>
                    <Text>hora</Text>
                    <TextInput />
                </View>
            </View>
            <View style={ styles.inputContainer }>
                <Text>instrumentos disponibles</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text>hay escenario</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text>publico</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text>charter</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text>porcentaje de ventas</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text>costos adicionales</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text>alimentación de la banda</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text>metodo de pago</Text>
                <TextInput />
            </View>
        </View>
    );
};

export default CreationForm;