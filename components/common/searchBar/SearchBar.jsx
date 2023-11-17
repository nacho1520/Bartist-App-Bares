import React from "react";
import { View, TextInput } from "react-native";

import styles from "./searchbar.style";

const SearchBar = () => {
    return(
        <View style={ styles.searchContainer }>
            <TextInput 
                style={ styles.searchInput }
                value=""
                onChangeText={() => {}}
                placeholder="Encontra tu bar o show ideal"
            />
        </View>
    );
};

export default SearchBar;