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
  // --- الحل السحري لإخفاء زر Manage وروابط سانيتي الخارجية ---
  studio: {
    components: {
      layout: (props) => (
        <>
          <style>{`
            /* إخفاء زر Manage Project تماماً */
            [data-testid="package-status-manage-button"],
            [data-testid="context-menu-manage-project"],
            a[href*="sanity.io/manage"] {
              display: none !important;
            }

            /* إخفاء شعار سانيتي والقوائم التي تفتح روابط خارجية */
            [data-testid="navbar-help-menu"],
            [data-testid="action-menu-button"] {
              display: none !important;
            }
              
            /* تنظيف الشريط العلوي ليبقى فقط اسم العميل دون إضافات */
            [data-testid="navbar-search"] {
              display: none !important;
            }
          `}</style>
          {props.renderDefault(props)}
        </>
      ),
    },
  },
})