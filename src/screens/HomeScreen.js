import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
    Pressable,
    StyleSheet
} from "react-native";

const width = Dimensions.get("screen").width;

function HomeScreen({ navigation }) {
    
    const [QuickActions, setQuickActions] = useState([]);
    const [RecommendedResources, setRecommendedResources] = useState([]);
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        fetch("https://sex-health-back-1.onrender.com/action")
          .then((response) => response.json())
          .then((data) => setQuickActions(data.data))
          .catch((error) => console.error("Error fetching Quick Actions:", error));
      }, []);
    
      // Fetch Recommended Resources from API
      useEffect(() => {
        fetch("https://sex-health-back-1.onrender.com/health")
          .then((response) => response.json())
          .then((data) => setRecommendedResources(data.data))
          .catch((error) => console.error("Error fetching Recommended Resources:", error));
      }, []);
    
      // Fetch Events Data from API
      useEffect(() => {
        fetch("https://sex-health-back-1.onrender.com/event")
          .then((response) => response.json())
          .then((data) => setEventsData(data.data))
          .catch((error) => console.error("Error fetching Events Data:", error));
      }, []);

    // const eventsData = [
    //     {
    //         id: 1,
    //         title: "Health Parameter Screening Event",
    //         description: "Offline Event",
    //         date: "AUG 31",
    //         image: require("../../assets/segment_1.png"),
    //     },
    //     {
    //         id: 2,
    //         title: "Mental Health Workshop",
    //         description: "Online Event",
    //         date: "SEP 5",
    //         image: require("../../assets/segment_1.png"),
    //     },
    //     {
    //         id: 3,
    //         title: "Community Health Camp",
    //         description: "Offline Event",
    //         date: "OCT 12",
    //         image: require("../../assets/segment_2.png"),
    //     },
    //     {
    //         id: 4,
    //         title: "Nutrition Awareness Drive",
    //         description: "Online Event",
    //         date: "NOV 22",
    //         image: require("../../assets/segment_3.png"),
    //     },
    // ];


    // State for active slide
    const [activeSlide, setActiveSlide] = useState(0);

    // Function to handle scroll events
    const handleScroll = (event) => {
        const slide = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveSlide(slide);
    };

    // const QuickActions = [
    //     {
    //         id: 1,
    //         title: "Find Clinics",
    //         icon: require("../../assets/segment_1.png"), // Replace with actual icon
    //     },
    //     {
    //         id: 2,
    //         title: "Contraceptive Info",
    //         icon: require("../../assets/segment_2.png"), // Replace with actual icon
    //     },
    //     {
    //         id: 3,
    //         title: "Get Support",
    //         icon: require("../../assets/segment_3.png"), // Replace with actual icon
    //     },
    // ];

    // const RecommendedResources = [
    //     {
    //         id: 1,
    //         title: "STI Prevention",
    //         description: "Track your health progress",
    //         image: require("../../assets/segment_4.png"), // Replace with actual image
    //     },
    //     {
    //         id: 2,
    //         title: "Health Insurance",
    //         description: "Learn about your insurance options",
    //         image: require("../../assets/segment_1.png"), // Replace with actual image
    //     },
    //     {
    //         id: 3,
    //         title: "Reproductive Health",
    //         description: "Find information on reproductive health services.",
    //         image: require("../../assets/segment_2.png"), // Replace with actual image
    //     },
    //     {
    //         id: 4,
    //         title: "Mental Well-being",
    //         description: "Access resources for mental health support.",
    //         image: require("../../assets/segment_3.png"), // Replace with actual image
    //     },
    // ];

    return (
        <ScrollView style={{ backgroundColor: "white", marginTop: -1 }}>
            {/* Welcome Banner */}
            <View
                style={{
                    padding: 20,
                    backgroundColor: "white",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
                    Hello, MUHUMUZA Jean Pierre
                </Text>
                <View
                    style={{
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center", 
                        // backgroundColor: "white",
                        padding: 10,
                        borderRadius: 10, 
                        elevation: 1    ,
                        backgroundColor: "white",
                        borderRadius: 15,
                        gap: 20

                    }}
                >
                    {/* Image */}
                    <Image
                        source={require("../../assets/segment_1.png")}
                        style={{
                            width: 80,
                            height: 120,
                            resizeMode: "contain", // Keeps the image's aspect ratio intact
                        }}
                    />

                    {/* Text Content */}
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 14, color: "#777" }}>
                            Stay informed and take control of your health.
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#EB5D72",
                                fontWeight: "bold",
                                // textAlign: "center",
                                marginTop: 5,
                            }}
                        >
                            100,000 Steps left to win
                        </Text>
                    </View>
                </View>

            </View>

            {/* Quick Actions */}
            <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 15 }}>
                    Quick Actions
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    {QuickActions.map((action) => (
                        <TouchableOpacity
                            key={action.id}
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "white",
                                borderRadius: 5,
                                overflow: "hidden",
                                elevation: 5,
                            }}
                        >
                            {/* Full-Width Image */}
                            <Image
                                source={{uri: action.image}}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute", // Ensure the image covers the full container
                                    resizeMode: "cover",
                                }}
                            />

                            {/* Text on Top of the Image */}
                            <View
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "rgba(0, 0, 0, 0.4)", // Add a slight dark overlay for better text visibility
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: "white", // Ensure text is visible on the image
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    {action.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </View>

            {/* Add Information Section */}
            <View
                style={{
                    marginHorizontal: 20,
                    marginBottom: 20,
                    backgroundColor: "white",
                    borderRadius: 15,
                    padding: 15,
                    elevation: 5,
                }}
            >
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
                    Stay Informed
                </Text>
                <Text style={{ fontSize: 14, color: "#777", marginVertical: 10 }}>
                    To access personalized advice and resources, please provide your basic health information securely.
                </Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#EB5D72",
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderRadius: 20,
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "white", fontWeight: "bold" }}>Get more Information</Text>
                </TouchableOpacity>
            </View>

            {/* Recommended Resources */}
            <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 15 }}>
                    Recommended Resources
                </Text>
                <FlatList
                    data={RecommendedResources}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 15 }}
                    renderItem={({ item }) => (
                        // <TouchableOpacity></TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('detail', {id: item.id})}
                            style={{
                                backgroundColor: "white",
                                borderRadius: 10,
                                width: width / 2.3,
                                elevation: 5,
                                overflow: "hidden", 
                            }}
                        >
                            {/* Image Section */}
                            <Image
                                source={{uri: item.image}}
                                style={{
                                    width: "100%",
                                    height: 120, // Adjust height as needed
                                    resizeMode: "cover",
                                }}
                            />
                            {/* Text Section */}
                            <View style={{ padding: 10, alignItems: "center" }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#EB5D72",
                                        marginBottom: 5,
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: "#777",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />

            </View>


            <FlatList
                data={eventsData}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={(item) => item.id}
                onScroll={handleScroll}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        {/* Event Details */}
                        <View style={styles.cardContent}>
                            <View style={styles.eventBadge}>
                                <Text style={styles.eventBadgeText}>Event</Text>
                            </View>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardDescription}>{item.description}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("EventDetails")}>
                                <Text style={styles.moreInfoText}>GET MORE INFORMATION</Text>
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={{uri: item.image}}
                            style={styles.cardImage}
                        />
                        {/* Event Date */}
                        <View style={styles.eventDate}>
                            <Text style={styles.eventDateText}>{item.date}</Text>
                        </View>
                    </View>
                )}
            />
            <View style={styles.paginationContainer}>
                {eventsData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            activeSlide === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row-reverse",
        height: 150,
        width: width * 0.9,
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 5,
        marginHorizontal: width * 0.05,
        overflow: "hidden",
        alignItems: "center",
        marginBottom: 10,
    },
    cardImage: {
        width: "40%", // Adjust the image width
        height: "100%",
        resizeMode: "cover",
    },
    cardContent: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
    },
    eventBadge: {
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 12,
        alignSelf: "flex-start",
        marginBottom: 10,
    },
    eventBadgeText: {
        fontSize: 12,
        color: "#333",
        fontWeight: "bold",
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: "#777",
        marginBottom: 10,
    },
    moreInfoText: {
        fontSize: 14,
        color: "#EB5D72",
        fontWeight: "bold",
    },
    eventDate: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "#F8F8F8",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    eventDateText: {
        fontSize: 12,
        color: "#EB5D72",
        fontWeight: "bold",
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "#EB5D72",
    },
});

export default HomeScreen;




