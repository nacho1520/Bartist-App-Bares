import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { COLORS } from "../../constants";
import CreateShow from "./index";

const Layout = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerShadowVisible: false,
                    headerTitle: "Crear Show",
                    headerTintColor:  COLORS.whiteColor,
                    headerTitleAlign: "center" 
                }}
            />
            <CreateShow />
        </SafeAreaView>
    );
};

export default Layout;