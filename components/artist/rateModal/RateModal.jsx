import React from "react";
import { View, Modal, Text, TextInput } from "react-native";

import PrimaryBtn from "../../common/buttons/primarybtn/PrimaryBtn";
import HeaderBtn from "../../common/headerBtn/HeaderBtn";
import RatingBar from "../../common/ratingBar/RatingBar";
import styles from "./ratemodal.style";
import { icons } from "../../../constants";

const RateModal = ({ open, setOpen }) => {
    return(
        <Modal 
            animationType="slide"
            transparent={ true }
            visible={ open }
        >
            <View style={ styles.container }>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "flex-end" }}>
                    <HeaderBtn 
                        iconUrl={ icons.xCircle }
                        dimension="80%"
                        handleBtnPress={ setOpen }
                    />
                </View>
                <Text style={ styles.title }>Calificar</Text>
                <View style={{ width: "60%" }}>
                    <RatingBar />
                </View>
                <View style={ styles.textInput } >
                    <Text>Titulo</Text>
                    <TextInput />
                </View>
                <View style={ styles.textInput } >
                    <Text>Comentario</Text>
                    <TextInput />
                </View>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                    <View style={{ width: "50%" }}>
                        <PrimaryBtn btnLabel="Confirmar"  handlePress={ setOpen } />
                    </View>
                </View>
            </View>  
        </Modal>
    );
};

export default RateModal;