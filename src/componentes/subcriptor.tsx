import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import './subcriptor.css';

const MQTTSubscriber: React.FC = () => {
  const [messages, setMessages] = useState<{ modulo: string; turno: string; hora: string }[]>([]);

  useEffect(() => {
    const client = mqtt.connect('ws://localhost:9001', {
      username: 'turnero_user',
      password: 'turnero123'
    });

    client.on('connect', () => {
      console.log('Conectado al servidor MQTT');
      client.subscribe('turnero', (err) => {
        if (err) {
          console.error('Error al suscribirse al tópico', err);
        }
      });
    });

    client.on('message', (topic, message) => {
      console.log('Mensaje recibido:', message.toString());
      try {
        const turnoData = JSON.parse(message.toString());
        setMessages((prevMessages) => [turnoData, ...prevMessages.slice(0, 4)]);
      } catch (error) {
        console.error('Error al procesar el mensaje JSON:', error);
      }
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <table className='tableturn'>
        <thead>
          <tr>
            <th>Modulo</th>
            <th>Turno</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
              <td>{message.modulo}</td>
              <td>{message.turno}</td>
              <td>{message.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MQTTSubscriber;
