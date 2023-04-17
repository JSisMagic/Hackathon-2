const sendMsgWithDate = (msg, date = new Date(), ...recipients) => {
    for (const recipient of recipients) {
        console.log(`To ${recipient}: ${msg} [${date.toLocaleTimeString()}]`);
    }
}

sendMsgWithDate('Hello, World!', undefined , 'John', 'Maria');