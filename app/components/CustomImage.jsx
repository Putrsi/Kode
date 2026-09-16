import React, { useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

function CustomImage({ source }) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ width: 150, height: 150, justifyContent: 'center', alignItems: 'center' }}>
      {loading && <ActivityIndicator style={{ position: 'absolute' }} />}
      <Image
        source={source}
        style={{ width: 150, height: 150 }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

export default function App() {
  return <CustomImage source={{ uri: 'https://picsum.photos/150' }} />;
}