import mqtt from 'mqtt';
//const server = mqtt.connect('mqtt://localhost:1883');
const client = mqtt.connect('mqtt://192.168.1.114:1883');

client.on('connect', () => {
    console.log('connected');
    client.subscribe('23jbk2334Bkb2k', {
        qos: 1
    }, (err) => {
        if (err) {
            console.log('subscribe error');
        }
    });
});

client.on('disconnect', () => {
    console.log('disconnected');
});

client.on('message', (topic, message) => {
    let json = JSON.parse(message.toString());
    if (json.length > 0) {
        console.log(topic, json);
    }

    let jsonRep = []
    client.publish('23jbk2334Bkb2k', JSON.stringify(jsonRep), {
        qos: 1,
        retain: true
    });
});