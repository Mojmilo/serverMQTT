import mqtt from 'mqtt';
//const server = mqtt.connect('mqtt://localhost:1883');
const server = mqtt.connect('mqtt://192.168.1.114:1883');

server.on('connect', () => {
    console.log('connected');
    let json = [
        {
            id: 1,
            content: 'ok'
        },
        {
            id: 2,
            content: 'salut'
        }
    ]
    server.publish('23jbk2334Bkb2k', JSON.stringify(json), {
        qos: 1,
        retain: true
    })
});