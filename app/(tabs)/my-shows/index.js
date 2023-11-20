import { View, ScrollView, Text } from "react-native";
import { useRouter } from "expo-router";

import { images, COLORS } from "../../../constants";
import { ShowCard, PrimaryBtn } from "../../../components";

const shows = [
    {
        id: 1,
        name: 'Noche Urbana',
        genres: "Rap, Regueton, Trap",
        bands: "Peso Pluma, Trueno",
        date: "04/11/2023",
        time: 23,
        image: images.temple
    },
    {
        id: 2,
        name: 'Noche Urbana',
        genres: "Rap, Regueton, Trap",
        bands: "Peso Pluma, Trueno",
        date: "04/11/2023",
        time: 23,
        image: images.temple
    },
    {
        id: 3,
        name: 'Noche Urbana',
        genres: "Rap, Regueton, Trap",
        bands: "Peso Pluma, Trueno",
        date: "04/11/2023",
        time: 23,
        image: images.temple
    },
    {
        id: 4,
        name: 'Noche Urbana',
        genres: "Rap, Regueton, Trap",
        bands: "Peso Pluma, Trueno",
        date: "04/11/2023",
        time: 23,
        image: images.temple
    },
    {
        id: 5,
        name: 'Noche Urbana',
        genres: "Rap, Regueton, Trap",
        bands: "Peso Pluma, Trueno",
        date: "04/11/2023",
        time: 23,
        image: images.temple
    },
];

const MyShows = () => {
    const router = useRouter();
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <ScrollView showsVerticalScrollIndicator={ false } style={{ marginBottom: 10, padding: 16 }}>
                <View style={{ flex: 1, flexDirection: "column", gap: 20, marginBottom: 15 }}>
                    {
                        shows.map((show) => (
                            <ShowCard 
                                name={ show.name }
                                bands={ show.bands }
                                date={ show.date }
                                time={ show.time }
                                image={  show.image }
                                key={ show.id }
                            />
                        ))
                    }
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "center", width: "100%" }}>
                <View style={{ width: "50%" }}>
                    <PrimaryBtn 
                        btnLabel="Crear Show"
                        handlePress={ () => { router.push('create-show') } }
                    />
                </View>
            </View>
        </View>
    )
};

export default MyShows;