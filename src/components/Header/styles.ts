import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mb: {
        marginBottom: 8,
    },
    headerStyle: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
    bold: {
        fontWeight: 'bold',
    },
    text: {
        color: 'grey',
    },
});
