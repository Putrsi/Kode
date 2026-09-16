import React from "react";
import { View, Text, Image } from "react-native";

const Card = ({ name, status, imageUrl }) => {
  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 100, height: 100 }}
      />

      <Text>Nama: {name}</Text>
      <Text>Status: {status}</Text>
    </View>
  );
};

export default function UserCard() {
  return (
    <View>
      <Card
        name="Putri"
        status="Aktif"
        imageUrl="https://i.pravatar.cc/150?img=5"
      />

      <Card
        name="Marius"
        status="Alumni"
        imageUrl="https://i.pravatar.cc/150?img=2"
      />
    </View>
  );
}