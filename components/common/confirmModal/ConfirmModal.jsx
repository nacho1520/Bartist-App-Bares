import React from "react";
import { View, Modal, Text, TextInput } from "react-native";

import PrimaryBtn from "../../common/buttons/primarybtn/PrimaryBtn";
import styles from "./confirmmodal.style";


const ConfirmModal = ({ confirmMsg, open, setOpen }) => {
    return(
        <Modal 
            animationType="slide"
            transparent={ true }
            visible={ open }
        >
            <View style={ styles.modalContainer }>
                <View style={ styles.container }>
                    <Text style={ styles.title }>{ confirmMsg }</Text>
                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                        <View style={{ width: "50%" }}>
                            <PrimaryBtn btnLabel='Cerrar'  handlePress={ setOpen(false) } />
                        </View>
                    </View>
                </View> 
            </View> 
        </Modal>
    );
};

export default ConfirmModal;