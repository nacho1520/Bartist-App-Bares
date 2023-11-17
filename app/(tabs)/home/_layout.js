import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../../../constants";
import Home from "./index";
import { HeaderBtn } from "../../../components";

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
                        <HeaderBtn iconUrl={ icons.menu } dimension="60%"/>
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
            <Home />
        </SafeAreaView>
        
    );
};

export default Layout;