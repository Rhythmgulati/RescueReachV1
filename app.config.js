// app.config.js - Expo configuration with environment variable support
// For EAS Build, set GEMINI_API_KEY in eas.json secrets (recommended)
// For local dev, create a .env file with GEMINI_API_KEY=your_key

export default {
  expo: {
    name: "RescueReach",
    slug: "RescueReach",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    hermitEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      package: "com.anonymous.RescueReach"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      // Priority: EAS secret -> local env -> fallback (empty, throws error)
      geminiApiKey: process.env.GEMINI_API_KEY || "",
      eas: {
        projectId: "46b09864-d453-4305-ae65-061369567843"
      }
    },
    plugins: [
      // ... any other plugins you already have
      [
        "expo-build-properties",
        {
          android: {
            enableProguardInReleaseBuilds: true,
            enableShrinkResourcesInReleaseBuilds: true,
            // Optionally limit CPU architectures
            abiFilters: ["arm64-v8a", "armeabi-v7a"]
          }
        }
      ]
    ]
  }
};