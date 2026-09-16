import React, { useState } from 'react';
import { View, Text, Button, Modal, ActivityIndicator } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // simulasi fetch
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Fetch Data" onPress={fetchData} />

      <Modal visible={loading} transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <ActivityIndicator size="large" color="white" />
          <Text style={{ color: 'white', marginTop: 10 }}>Memuat data...</Text>
        </View>
      </Modal>
    </View>
  );
}