
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { webcrypto } from 'crypto';
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}

export default defineConfig({
  plugins: [react()],
});