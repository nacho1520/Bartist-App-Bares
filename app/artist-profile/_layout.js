import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

import { COLORS, icons } from "../../constants";
import { HeaderBtn } from "../../components";
import ArtistProfileProfile from "./[id]";
import useFetch from "../../hooks/useFetch";

const Layout = () => {
    const router = useRouter();
    const [ like, setLike ] = useState(false);

    const handleLike = () => {
        setLike(like => !like);
    };

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <HeaderBtn 
                            iconUrl={ icons.arrowLeft } 
                            dimension="60%"
                            handleBtnPress={ () => router.back() } 
                        />
                    ),
                    headerRight: () => (
                        <HeaderBtn 
                            iconUrl={ like ? icons.fullHeart : icons.heart  }
                            dimension="60%"
                            handleBtnPress={ handleLike }
                        />
                    )
                }}
            />
            <ArtistProfileProfile />
        </SafeAreaView>
    );
}

export default Layout;