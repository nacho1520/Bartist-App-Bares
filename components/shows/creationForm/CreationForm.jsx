import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

import styles from "./creationform.style";
import PrimaryBtn from "../../common/buttons/primarybtn/PrimaryBtn";

const CreationForm = () => {
   

    return(
        <View style={ styles.formContainer }>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Nombre</Text>
                <TextInput/>
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Descripción</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Generos</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Cantidad de bandas</Text>
                <TextInput />
            </View>
            <View style={ styles.dateContainer }>
                <View style={ styles.dateInfo }>
                    <Text style={ styles.inputLabel }>fecha</Text>
                    <TextInput />
                </View>
                <View style={ styles.dateInfo }>
                    <Text style={ styles.inputLabel }>hora</Text>
                    <TextInput />
                </View>
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Instrumentos disponibles</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Hay escenario</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Publico</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Charter</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Porcentaje de ventas</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Costos adicionales</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Alimentación de la banda</Text>
                <TextInput />
            </View>
            <View style={ styles.inputContainer }>
                <Text style={ styles.inputLabel }>Metodo de pago</Text>
                <TextInput />
            </View>
            <View style={{ width: "100%", flexDirection: "row", "justifyContent": "center" }}>
                <View style={{ width: "50%" }}>
                    <PrimaryBtn btnLabel="Crear" handlePress={ () => {} } />
                </View>
            </View>
        </View>
    );
};

export default CreationForm;