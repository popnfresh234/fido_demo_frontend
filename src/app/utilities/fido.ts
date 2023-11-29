const getFidoHeader = () => {
  //Hardcoded header data
  return {
    appVersion: 'v8',
    channelCode: 'channel-webcomm',
    deviceBrand: 'google',
    deviceType: 'chrome',
    deviceUuid: '550e8400-e29b-41d4-a716-446655440000',
    deviceVersion: '92.0.4515.107',
    userIp: '127.0.0.1',
  };
};

export default {
  getFidoHeader,
};
