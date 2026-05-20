const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
const path = require("path");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Support @/ path alias from tsconfig.json
config.resolver.alias = {
	...config.resolver.alias,
	"@": path.resolve(__dirname),
};

module.exports = withNativewind(config);
