import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../../../constants";
import { HeaderBtn } from "../../../components";
import Search from ".";

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
                    headerTitle: "",
                    headerLeft: () => (
                        <HeaderBtn 
                            iconUrl={ icons.menu } 
                            dimension="60%"
                            handleBtnPress={ () =>  router.push('/menu')  }
                        />
                    ),
                    headerRight: () => (
                        <HeaderBtn 
                            iconUrl={ images.temple } 
                            dimension="100%"
                            handleBtnPress={ handleProfilePress }
                        />
                    )
                }}
            />
            <Search />
        </SafeAreaView>
        
    );
};

export default Layout;