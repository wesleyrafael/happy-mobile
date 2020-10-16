import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
const { height, width } = Dimensions.get('window');
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';

const OrphanagesMap = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -5.08921,
                    longitude: -42.8016,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                provider={PROVIDER_GOOGLE}
            >
                <Marker
                    icon={mapMarker}
                    coordinate={{
                        latitude: -5.08921,
                        longitude: -42.8016,
                    }}
                    calloutAnchor={{
                        x: 2.8,
                        y: 0.88,
                    }}
                >
                    <Callout tooltip={true} onPress={() => navigation.navigate("OrphanageDetails")}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Lar das meninas</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    2 orfanatos encontrados
          </Text>

                <TouchableOpacity style={styles.createOrphanageButton} onPress={() => navigation.navigate("SelectMapPosition")}>
                    <Feather name="plus" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        height,
        width
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 16,
        justifyContent: 'center',
    },

    calloutText: {
        color: '#0089a5',
        fontSize: 14,
        fontFamily: 'Nunito_700Bold'
    },

    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
    },

    footerText: {
        color: '#8fa7b3',
        fontFamily: 'Nunito_700Bold'
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default OrphanagesMap;