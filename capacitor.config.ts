import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'puc.minas.ingrid.techmedic',
  appName: 'techmedic-mobile-app',
  webDir: 'dist/techmedic-mobile-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
