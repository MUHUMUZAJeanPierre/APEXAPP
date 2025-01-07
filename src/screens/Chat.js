import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: input, sender: "user" },
      ]);
      setInput("");
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.agentMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 60 },
  messagesList: { flexGrow: 1 },
  messageContainer: { marginVertical: 5, padding: 10, borderRadius: 8, maxWidth: "70%" },
  userMessage: { backgroundColor: "#E8FCE8", alignSelf: "flex-end" },
  agentMessage: { backgroundColor: "#F0F0F0", alignSelf: "flex-start" },
  messageText: { fontSize: 14, color: "#333" },
  inputContainer: { flexDirection: "row", alignItems: "center", padding: 10, borderTopWidth: 1, borderColor: "#ccc" },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 20, paddingHorizontal: 15 },
  sendButton: { marginLeft: 10, backgroundColor: "#EB5D72", padding: 10, borderRadius: 20 },
  sendButtonText: { color: "#fff", fontWeight: "bold" },
});

export default Chat;
