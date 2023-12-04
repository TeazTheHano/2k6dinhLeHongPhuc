// // WebSocketComponent.js
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { WebSocketProvider, useWebSocket } from 'react-native-websocket';

// const WebSocketComponent = () => {
//   const { sendJsonMessage } = useWebSocket();

//   useEffect(() => {
//     // Connect to the WebSocket server
//     sendJsonMessage({ type: 'message', data: 'Hello from React Native!' });
//   }, []);

//   return (
//     <View>
//       <Text>WebSocket Example</Text>
//     </View>
//   );
// };

// export default WebSocketComponent;
