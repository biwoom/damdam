import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const commonSutraFields = {
    text_id: z.string(),
    text_chapter: z.string(),
    canonicalId: z.string(),
    canonAffiliation: z.string(),
    category: z.string().describe('대분류'),
    subcategory: z.string().optional().describe('중분류 (선택)'), // v1.1 추가
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    original_translator: z.array(z.string()),
    kr_translator: z.array(z.string()),
    kr_date: z.string().optional(),
    kr_updated: z.string().optional(),
    tags: z.array(z.string()),
    originalLang: z.string().default('한역'),
    sourceUrl: z.string().url().optional(),
    license: z.string().default('CC-BY-NC-SA')
}

export default defineContentConfig({
    collections: {
        sutra: defineCollection({
            type: 'page', source: 'sutra/**/*.md',
            schema: z.object({ ...commonSutraFields, author: z.string().default('붓다') })
        }),
        vinaya: defineCollection({
            type: 'page', source: 'vinaya/**/*.md',
            schema: z.object({ ...commonSutraFields, author: z.string().default('붓다') })
        }),
        shastra: defineCollection({
            type: 'page', source: 'shastra/**/*.md',
            schema: z.object({ ...commonSutraFields, author: z.string() })
        }),
        book: defineCollection({
            type: 'page', source: 'book/**/*.md',
            schema: z.object({
                book: z.string(), vol: z.string(), chapter: z.string(), section: z.string().optional(),
                part: z.string().optional(), tag: z.array(z.string()), category: z.string(),
                title: z.string(), subtitle: z.string().optional(), description: z.string(),
                author: z.string(), translator: z.string(), originalLang: z.string(),
                publish_date: z.string(), trans_date: z.string()
            })
        }),
        note: defineCollection({
            type: 'page', source: 'note/**/*.md',
            schema: z.object({
                title: z.string(), category: z.string(), tag: z.array(z.string()),
                created_at: z.string(), updated_at: z.string(), icon: z.string().optional(),
                type: z.enum(['연구문서', '블로그', '인포그래픽', '디자인', '동화', '에세이', '시'])
            })
        })
    }
})