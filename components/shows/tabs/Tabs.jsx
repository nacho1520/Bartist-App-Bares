import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./tabs.style";

const TabButton = ({ label, activeTab, handlePress }) => {
    return(
        <TouchableOpacity style={ styles.btn(label, activeTab) } onPress={ handlePress }>
            <Text style={ styles.btnLabel(label, activeTab) }>{ label }</Text>
        </TouchableOpacity>
    );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return(
        <View style={ styles.container }>
            <FlatList 
                data={ tabs }
                renderItem={ ({ item }) => (
                    <TabButton 
                        label={ item }
                        activeTab={ activeTab }
                        handlePress={ () => setActiveTab(item) }
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={ false }
                key={ item => item }
                contentContainerStyle={{ columnGap: 6 }}
            />
        </View>
    );
};

export default Tabs;