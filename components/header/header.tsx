import { StyleSheet, Text, View, } from 'react-native';

type HeaderPropsType = {
    title: string
}

export const Header = ({ title }: HeaderPropsType) => {

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingBottom: 8,
        width: '85%'
    },
    title: {
        fontSize: 22,
        textAlign: "left",
        width: "85%",
        marginBottom: 16,
        fontWeight: 500
    },
});
