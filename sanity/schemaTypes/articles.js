export default {
  name: 'article',
  title: 'الأطباق (Articles)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'إسم الطبق',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'رابط فريد (Slug)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'صورة الطبق',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'الثمن (DH)',
      type: 'number',
    },
    {
      name: 'description',
      title: 'وصف الطبق',
      type: 'text',
    },
    // هذا هو الحقل الذي يربط الطبق بالتصنيف (مثل لحم أو دجاج)
    {
      name: 'categoryes',
      title: 'تصنيف الطبق',
      type: 'reference',
      // تأكد أن الاسم هنا 'category' يطابق تماماً الـ name الموجود في سكيما التصنيفات
      to: [{ type: 'categoryes' }], 
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isBestSeller',
      title: 'طبق مميز (Best Seller)',
      type: 'boolean',
      initialValue: false,
    },
  ],
};