import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

import { COLORS, icons } from "../../constants";
import { HeaderBtn } from "../../components";
import Menu from "./index";

const Layout = () => {
    const router = useRouter();
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerShadowVisible: false,
                    headerTitle: "BARTIST",
                    headerTitleStyle: {
                        color: COLORS.whiteColor
                    },
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <HeaderBtn 
                            iconUrl={ icons.whiteX }
                            dimension="60%"
                            handleBtnPress={ () => router.back() }
                        />
                    )
                }}
            />
            <Menu />
        </SafeAreaView>
    );
}

export default Layout;