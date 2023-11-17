import { View, ScrollView } from "react-native";

import { CreationForm } from "../../components";

const CreateShow = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            <View style={{ flex: 1, padding: 16 }}>
                <CreationForm />
            </View>
        </ScrollView>
    )
};

export default CreateShow;