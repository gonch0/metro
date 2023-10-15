import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    rowSb: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mb: {
        marginBottom: 8,
    },
    headerStyle: {
        marginTop: 8,
        marginHorizontal: 16,
    },
    bold: {
        fontWeight: 'bold',
    },
    text: {
        color: 'grey',
    },
    tab: {
        width: '50%',
        textAlign: 'center',
    },
    tabText: {
        color: 'grey',
        textAlign: 'center',
        padding: 5,
        marginHorizontal: 24,
        borderStyle: 'solid',
        borderBottomWidth: 3,
        borderBottomColor: 'transparent',
    },
    border: {
        borderBottomColor: '#038674',
    },
});
