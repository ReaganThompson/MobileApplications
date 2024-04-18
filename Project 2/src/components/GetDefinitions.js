import React from "react";
import { View, SafeAreaView, StyleSheet, SectionList } from "react-native";
import { Text } from "../components/themed";
import useCustomTheme from "../hooks/useCustomTheme";


// Enter should submit search query
//     404 Error check => Do not display word



const GetDefinitions = ({ item }) => {
    const { colors } = useCustomTheme();
    // Build the section list data
    const sectionListData = item.map((definition) => {
        for (let i = 0; i < definition.definitions.length; i++) {
            definition.definitions[i].key = i;

        }
        return {
            title: definition.partOfSpeech,
            data: definition.definitions,
            synonyms: definition.synonyms,
        };
    });

    // Build a string of synonyms from the synonyms array => Optimize w/ a better search functionality (BFS) w/ array rather than String
    const buildSynonymsString = (synonyms) => {
        let synonymsString = "";
        for (let i = 0; i < synonyms.length; i++) {
            synonymsString += synonyms[i];
            if (i !== synonyms.length - 1) {
                synonymsString += ", ";
            }
        }
        return synonymsString;
    };

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: colors.backgroundSecondary }}>
            <SectionList
                style={styles.list}
                sections={sectionListData}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) =>         
                    <View key={item.definition} style={styles.defContainer}>
                        <Text style={{ ...styles.definitionText, color: colors.textMidContrast }}>
                            &#x2022; {item.definition}
                        </Text>
                        <Text style={{ ...styles.exampleText, color: colors.textMidContrast }}>
                            {item.example ? `"${item.example}"` : null}
                        </Text>
                    </View>
                }
                renderSectionHeader={({section: {title}}) => (
                    <View style={styles.partOfSpeechContainer}>
                        <Text style={{ ...styles.partOfSpeech, color: colors.textMidContrast }}>{title}</Text>
                        <View style={styles.divider}/>
                    </View>
                )}
                renderSectionFooter={({section: {synonyms}}) => (
                <View>
                    {buildSynonymsString(synonyms) ? (
                        <View style={styles.synContainer}>
                            <Text style={{ ...styles.synonymsTitle, color: colors.textMidContrast }}>
                                Synonyms
                            </Text>
                            <Text style={{ ...styles.synonymsText, color: colors.textMidContrast }}>
                                {buildSynonymsString(synonyms)}
                            </Text>
                        </View>
                    ) : null}
                </View>
                )}
                stickySectionHeadersEnabled={false}
                
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flexGrow: 1,
        marginBottom: 10,
    },
    Meaning: {
        fontSize: 16,
        fontWeight: "300",
        margin: 10,
        textAlign: "left",
    },
    borderRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    partOfSpeechContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    partOfSpeech: {
        fontSize: 20,
        marginRight: 10,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    divider: {
        flex:1,
        height: 1,
        backgroundColor: '#ccc',
    },
    defContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    definitionText: {
        fontSize: 16,
        fontWeight: '300',
        marginLeft: 15,
        textAlign: 'left',
    },
    exampleText: {
        fontSize: 16,
        fontStyle: 'italic',
        marginLeft: 40,
        marginBottom: 10,
        textAlign: 'left',
    },
    synContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 5,
        width: '90%',
    },
    synonymsTitle: {
        fontSize: 16,
        marginLeft: 15,
        textAlign: 'left',
        justifyContent: 'flex-start',
    },
    synonymsText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10,
        textAlign: 'left',
        justifyContent: 'flex-start',
        //prevent from going off screen
        flexWrap: 'wrap',
        flex: 1,
    },
});

export default GetDefinitions;

