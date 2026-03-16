// sanity/structure.js

export const structure = (S) =>
  S.list()
    .title('DÉLICE MENU - لوحة التحكم')
    .items([
      // 1. عرض الأصناف (بدون المسودات في القائمة الرئيسية)
      S.listItem()
        .title('Categories')
        .child(
          S.documentList()
            .title('جميع الأصناف')
            .filter('_type == "categoryes" && !(_id in path("drafts.**"))')
        ),

      // 2. عرض الأطباق (بدون المسودات في القائمة الرئيسية)
      S.listItem()
        .title('Articles')
        .child(
          S.documentList()
            .title('قائمة الأطباق')
            .filter('_type == "article" && !(_id in path("drafts.**"))')
        ),

      // إخفاء أي ملفات أخرى تلقائياً
      ...S.documentTypeListItems().filter(
        (listItem) => !['categoryes', 'article'].includes(listItem.getId())
      ),
    ]);