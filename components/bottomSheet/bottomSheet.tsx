import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import DeleteIcon from '../../assets/icons/delete.svg'
import { useEffect, useState } from 'react';
import { useBottomSheet } from '@/app/contexts/bottomSheetContext';


export const BottomSheet = () => {
    const { isActive, hide, content } = useBottomSheet();

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
    const screenHeight = Dimensions.get('window').height;
    const translateY = useSharedValue(screenHeight);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    const closeBottomSheet = () => {
        hide()
    }

    useEffect(() => {
        translateY.value = withTiming(isActive ? 0 : screenHeight, config);
    }, [isActive]);


    return (
        <Animated.View style={[styles.bottomSheetContainer, animatedStyle]}>
            <View style={styles.bottomSheet}>
                <View style={styles.bar}>
                </View>
                <TouchableOpacity onPress={() => closeBottomSheet()} style={styles.deleteIconContainer}>
                    <DeleteIcon style={styles.deleteIcon} />
                </TouchableOpacity>
                {content}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    bottomSheetContainer: {
        width: '100%',
        minHeight: 250,
        height: 'auto',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        bottom: 0,
        gap: 8,
    },
    bottomSheet: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFDF0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderTopLeftRadius: 42,
        borderTopRightRadius: 42,
        elevation: 10,
        paddingTop: 16,
        paddingLeft: 28,
        paddingRight: 28,
        zIndex: 20
    },
    bar: {
        width: '20%',
        height: 6,
        backgroundColor: '#bfbfbf7b',
        borderRadius: 28,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 16
    },
    deleteIconContainer: {
        width: 28,
        marginLeft: 'auto'
    },
    deleteIcon: {
        width: 'auto',
        height: 'auto',
    },
});
