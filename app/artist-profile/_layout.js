import { SafeAreaView } from "react-native";

import { COLORS, icons } from "../../constants";
import ArtistProfileProfile from "./[id]";

const Layout = () => {
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <ArtistProfileProfile />
        </SafeAreaView>
    );
}

export default Layout;