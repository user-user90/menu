export default {
  name: 'menuHome',
  type: 'document',
  title: 'Menu Home (الأصناف الرئيسية)',
  fields: [
    {
      name: 'name',
      title: 'اسم التصنيف', // مثل: لحوم، دجاج، أسماك
      type: 'string',
    },
    // الحقل الذي كان ناقصاً
    {
      name: 'slug',
      title: 'رابط التصنيف (Slug)',
      type: 'slug',
      options: {
        source: 'name', // يولد السلاغ من الاسم تلقائياً
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'صورة التصنيف',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};