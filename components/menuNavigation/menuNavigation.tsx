import { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import ArrowMenu from "../../assets/icons/arrow-menu.svg";


type MenuNavigationPropsType = {
    label: string,
    callback: () => void,
    children: ReactNode
}

export const MenuNavigation = ({ label, callback, children }: MenuNavigationPropsType) => {


    return (
        <TouchableOpacity style={styles.menuBtn} onPress={() => callback()}>
            {children}
            <Text style={styles.menuLabel}>{label}</Text>
            <ArrowMenu style={styles.arrowMenu} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuBtn: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        gap: 28
    },
    menuLabel: {
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: 500,
        fontSize: 16
    },
    arrowMenu: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 8,
    }
});
