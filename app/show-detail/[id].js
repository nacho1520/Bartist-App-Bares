import { useState } from "react";
import { ScrollView, View, SafeAreaView, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ShowInfo, ShowTabs, ShowAbout, BulletPointsInfo, PrimaryBtn } from "../../components";
import { COLORS } from "../../constants";
import useFetch from "../../hooks/useFetch";

const tabs = ["Descripción", "Información del show", "Detalles tecnicos", "Oferta"];

const ShowDetail = () => {
    const [ activeTab, setActiveTab ] = useState(tabs[0]);
    const params = useLocalSearchParams();
    const { data, isLoading, error } = useFetch(`/shows/${ params.id }`);
    
    const displayContent = (show) => {
        switch(activeTab) {
            case "Información del show": 
                return <BulletPointsInfo 
                            title="Información del show:"
                            labels={ ["Cantidad de bandas:", "Generos:","Fecha:", "Horario:", "Dirección:"] }
                            data={ [ show.bandsQuantity , show.genres.join(', ') , show.date.split('T')[0] , show.time + " hs", show.address.split(',')[0]] }
                        />;
            case "Descripción":
                return <ShowAbout 
                            description={ show.description }
                        />;
            case "Detalles tecnicos": 
                return <BulletPointsInfo 
                            title="Detalles tecnicos:"
                            labels={["Equipos disponibles:", "Escenario disponible", "Disposicion del publico:" ]}
                            data={[ show.musicItems.join(', ') , show.scenarioAvailable ? 'Si' : 'No' , show.public ]}
                        />;
            case "Oferta": 
                return <BulletPointsInfo 
                            title="Oferta economica"
                            labels={["Pago inicial", "% ventas de entrada", "Costos adicionales", "Alimentación y bebida", "Forma de pago"]}
                            data={[ '$' + show.charter , show.sellsPercent , show.additionalCosts , show.foodIncluded ? 'Incluida' : 'No incluida' , show.payMethod]}
                        />;
            default: 
                break;
        }
    };

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            {
                isLoading ? (
                    <ActivityIndicator size="large" color={ COLORS.violet } />
                ) : error ? (
                    <Text>Algo salio mal...</Text>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={ false }>
                        <ShowInfo 
                            name={ data.name }
                            bar={ data.pubName }
                            image={ data.image }
                        />
                        <View style={{ paddingHorizontal: 16 }}>
                            <ShowTabs tabs={ tabs } activeTab={ activeTab } setActiveTab={ setActiveTab } />
                            {
                                displayContent(data)
                            }
                        </View>
                    </ScrollView>
                )
            }
        </SafeAreaView>
    );
};

export default ShowDetail;