export default {
    name: "categoryes", // تأكد أن هذا الاسم هو المستخدم في حقل الـ to: [{type: 'categoryes'}] في سكيما الأطباق
    type: "document",
    title: "Categoryes",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of category",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "name", // يولد الرابط من الاسم تلقائياً
                maxLength: 96,
            }
        },
        {
            name: "image",
            type: "image",
            title: "Category Image",
            options: {
                hotspot: true,
            }
        }
    ]
}