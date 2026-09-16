import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Pressable
        onPress={() => alert('Login ditekan')}
        style={({ pressed }) => ({
          backgroundColor: pressed ? 'grey' : 'blue',
          padding: 10,
        })}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
      </Pressable>
    </View>
  );
}