import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRGenerator = () => {
  const [text, setText] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Escribe un link"
      />

      {text !== '' && <QRCode value={text} size={200} />}
    </View>
  );
}

export default QRGenerator;
