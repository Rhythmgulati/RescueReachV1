import NetInfo from '@react-native-community/netinfo';

export const checkRealInternet = async () => {
  const netInfo = await NetInfo.fetch();

  if (!netInfo.isConnected) {
    return false;
  }

  try {
    // For React Native, we can't use no-cors mode effectively
    // So we'll use a simple timeout fetch
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch('https://www.google.com/generate_204', {
      method: 'HEAD',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response.status === 204;
  } catch (error) {
    return false;
  }
};

// Alias for backward compatibility
export const checkInternet = checkRealInternet;

export const subscribeToNetworkStatus = (callback) => {
  return NetInfo.addEventListener(state => {
    callback(state.isConnected ?? false);
  });
};

export const isOnline = async () => {
  return await checkRealInternet();
};