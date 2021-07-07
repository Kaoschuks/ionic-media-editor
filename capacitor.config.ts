import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: "io.kaosdesigns.app",
  appName: "Photo Gallery",
  bundledWebRuntime: false,
  npmClient: "npm",
  webDir: "www",
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true,
    },
    LocalNotifications: {
      smallIcon: "ic_launcher",
      iconColor: "#488AFF",
    },
  }
};

export default config;
