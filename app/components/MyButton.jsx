import React from 'react';
import { Pressable, Text } from 'react-native'

const MyButton = (props) => {
  let bgColor = 'blue'
  if (props.variant === 'success') {
    bgColor = 'green'
  }
  if (props.variant === 'danger') {
    bgColor = 'red';
  }

  return (
    <Pressable onPress={props.onPress} style={{backgroundColor: bgColor, padding: 12, marginBottom: 10}}>
      <Text style={{color: 'white', textAlign: 'center'}}>{props.title}</Text>
    </Pressable>
  )
}

export default function App() {
  return (
    <>
      <MyButton title="Simpan" variant="primary" onPress={() => alert('primary ditekan')} />
      <MyButton title="Berhasil" variant="success" onPress={() => alert('success ditekan')}/>
      <MyButton title="Hapus" variant="danger" onPress={() => alert('danger ditekan')} />
    </>
  );
}