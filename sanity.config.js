'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, buildLegacyTheme} from 'sanity' // أضفنا buildLegacyTheme هنا
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

// إنشاء ثيم بسيط باللون الأسود
const props = {
  '--my-black': '#111827', // لون قريب من slate-900 الذي تستخدمه
  '--my-white': '#fff',
  '--my-gold': '#EAB308',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],
  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],
  '--default-button-primary-color': props['--my-gold'],
})

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  theme: myTheme, // أضفنا الثيم هنا
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})