export const sendMessage = async (message) => {
    const userAgent = navigator?.userAgent ?? 'unknown';
    const screenSize = `${window.innerWidth}x${window.innerHeight}`;
    const {ip, country, city} = await checkIp();

    const detailedMessage = `
${message}


From: ${city}, ${country}   
IP: ${ip}    


User Agent: ${userAgent}
Screen: ${screenSize}
`;

    await fetch('https://qvxac6uzcb7l4ra6bc6bwc3poe0ufjey.lambda-url.eu-north-1.on.aws/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: detailedMessage
    })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
}

const checkIp = async () => {
    return fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const ip = data?.ip ?? 'unknown';
            const country = data?.country_name ?? 'unknown';
            const city = data?.city ?? 'unknown';

            return {ip, country, city};
        });
}