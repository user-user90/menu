'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig, buildLegacyTheme} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

const props = {
  '--my-black': '#111827', 
  '--my-white': '#fff',
  '--my-gold': '#EAB308',
}

export const myTheme = buildLegacyTheme({
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
  theme: myTheme, 
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
  // --- الجزء الذكي للتحكم في الظهور ---
  studio: {
    components: {
      navbar: (props) => {
        // نتحقق إذا كان المستخدم الحالي ليس هو أنت (صاحب المشروع)
        // ملاحظة: سانيتي لا تعطي "الرتبة" مباشرة هنا، لذا الأفضل
        // هو إخفاء عناصر معينة عبر CSS للمستخدمين العاديين.
        return props.renderDefault(props)
      },
    },
  },
})