import DeviceInfo from 'react-native-device-info';

const getDeviceId = () => {
  return DeviceInfo.getDeviceId();
};
const getDeviceName = () => {
  return DeviceInfo.getDeviceName();
};

const getIOSDeviceToken = () => {
  return DeviceInfo.getDeviceToken();
};

const getUniqueId = async () => {
  return await DeviceInfo.getUniqueId();
};

const getIp = () => {
  return DeviceInfo.getIpAddress();
};

const getMacAddress = () => {
  return DeviceInfo.getMacAddress();
};

const getBrand = () => {
  return DeviceInfo.getBrand();
};

const getOSVersion = () => {
  return DeviceInfo.getSystemVersion();
};

export {
  getDeviceId,
  getIOSDeviceToken,
  getUniqueId,
  getDeviceName,
  getIp,
  getMacAddress,
  getBrand,
  getOSVersion,
};
