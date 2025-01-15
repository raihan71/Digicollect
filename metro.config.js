const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const reanimatedConfig = wrapWithReanimatedMetroConfig(defaultConfig);
const customConfig = {
  //  resolver: {
  //   sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'wasm'],
  // },
};

const finalConfig = mergeConfig(reanimatedConfig, customConfig);

module.exports = finalConfig;
