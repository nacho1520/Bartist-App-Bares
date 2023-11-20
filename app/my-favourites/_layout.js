import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../../constants";
import { HeaderBtn } from "../../components";
import Favs from ".";

const Layout = () => {
    const router = useRouter();
    
    const handleProfilePress = () => {
        router.push('/profile');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerShadowVisible: false,
                    headerTitle: "Artistas Favoritos",
                    headerTintColor:  COLORS.whiteColor,
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <HeaderBtn 
                            iconUrl={ icons.arrowLeft } 
                            dimension="60%"
                            handleBtnPress={ () =>  router.back()  }
                        />
                    )
                }}
            />
            <Favs />
        </SafeAreaView>
        
    );
};

export default Layout;