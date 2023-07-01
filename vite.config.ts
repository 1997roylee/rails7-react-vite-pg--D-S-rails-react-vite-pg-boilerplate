import {defineConfig} from 'vite'
import FullReload from "vite-plugin-full-reload"
import RubyPlugin from 'vite-plugin-ruby'
import StimulusHMR from 'vite-plugin-stimulus-hmr'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => ({
      clearScreen: false,
      define: {
        'process.env': process.env
      },
      plugins: [
          RubyPlugin(), 
          StimulusHMR(), 
          FullReload(["config/routes.rb", "app/views/**/*"], {delay: 300}),
          react()
      ],
      resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      },
      esbuild: {
        pure: mode === 'production' ? ['console.log'] : [],
      }

    }
))