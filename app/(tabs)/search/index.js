import React, { useState } from "react";
import { ScrollView, View, ActivityIndicator, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../../hooks/useFetch";
import { icons, COLORS } from "../../../constants";
import { HeaderBtn, SearchBar, SearchCard } from "../../../components";

const Search = () => {
    const { data, isLoading, error } = useFetch('/artists');
    const router = useRouter();
    const [ page, setPage ] = useState(1);

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
        } else if (direction === 'right') {
            setPage(page + 1)
        }
    }

    return(
        <View style={{ flex: 1, padding: 16 }}>
        {
            isLoading ? (
                <ActivityIndicator size="large" color={COLORS.violet} />
            ) : error ? (
                <Text>Algo salio mal...</Text>
            ) : (
                <>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                        <View style={{ width: "80%" }}>
                            <SearchBar />
                        </View>
                        <HeaderBtn 
                            iconUrl={ icons.filter }
                            dimension="70%"
                            handleBtnPress={ () => {} }
                        />
                    </View>
                    <ScrollView 
                        showsVerticalScrollIndicator={ false }
                        contentContainerStyle={{ justifyContent: "center"}}
                    >
                        <View style={{ flex: 1, flexDirection: "column", gap: 30, paddingVertical: 10 }}>
                            {
                                data.map((item) => (
                                    <SearchCard 
                                        name={ item.name }
                                        genres={ item.genres }
                                        image={  item.profileImage }
                                        handlePress={ () => { router.push(`/artist-profile/${ item._id }`) } }
                                        rating={ item.rating }
                                        key={ item._id }
                                    />
                                ))
                            }
                        </View>
                    </ScrollView>
                    {/* <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View> */}
                </>
            )
        }
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.violet
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.whiteColor
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.whiteColor
    },
    paginationText: {
        fontSize: 16,
        color: COLORS.backgroundColor
    }
});

export default Search;