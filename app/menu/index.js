import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { icons, COLORS } from "../../constants";

const options = [
    {
        "id": 1,
        "label": "Mis Favoritos",
        "icon": icons.fullHeart
    },
    {
        "id": 2,
        "label": "Mis Shows",
        "icon": icons.ticket
    },
    {
        "id": 3,
        "label": "Mi Perfil",
        "icon": icons.user
    },
    {
        "id": 4,
        "label": "Crear Show",
        "icon": icons.plus
    }
];

const Menu = () => {
    const router = useRouter();
    const handleNav = (option) => {
        switch(option) {
            case 'Mis Favoritos':
                router.push('/my-favourites');
                break;
            case 'Mis Shows':
                router.push('/my-shows');
                break;
            case 'Mi Perfil': 
                router.push('/profile');
                break;
            case 'Crear Show':
                router.push('create-show');
                break;
            default: 
                break;    
        }
    };

    return(
        <View style={{ flex: 1, padding: 16, flexDirection: "column", gap: 20 }}>
            {
                options.map((item) => (
                    <TouchableOpacity 
                        style={ styles.menuBtn }
                        key={ item.id }
                        onPress={ () => handleNav(item.label) }
                    >
                        <Image
                            source={ item.icon }
                            resizeMode="cover"
                            style={{ width: 30, height: 30 }}
                        />
                        <Text style={ styles.btnLabel }>{ item.label }</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    menuBtn: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "40%"
    },
    btnLabel: {
        color: COLORS.whiteColor,
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default Menu;