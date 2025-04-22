import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'samael-blog',
  basePath: '/studio',

  api: {
    projectId: "kpyriio6", // ← napr. abc123xyz
    dataset: "production",
  },

  vite: {
    base: '/studio/',
  },

  projectId: 'kpyriio6',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
