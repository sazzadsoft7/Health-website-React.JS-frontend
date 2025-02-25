import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.1.48', // Set the host to your local network IP
  //   port: 5000, // Optional: Change the port if needed
  //   strictPort: true, // Optional: Ensures Vite uses the specified port
  //   open: true, // Optional: Opens the browser on server start
  // }

})
