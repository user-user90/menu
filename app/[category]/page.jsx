import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

const getData = async (categoryName) => {
  const query = `*[_type == "article" && (categoryes->name == $slug || categoryes->slug.current == $slug)]{
        _id,
        name,
        price,
        description,
        "imageUrl": image.asset->url
    }`;
  const data = await client.fetch(query, { slug: categoryName });
  return data;
};

async function PageHome({ params }) {
  const { category } = await params;
  const data = await getData(category);
  const bgImage = `/bg-${category}.jpg`;

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}'), url('/default-bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* زر العودة */}
        <div className="inline-flex items-center gap-1 border-b border-white/20 hover:border-yellow-500 transition-colors mb-6 group">
          <LuArrowLeft className="text-white group-hover:text-yellow-500 transition-colors" />
          <Link href={"/"} className="font-bold text-sm text-white group-hover:text-yellow-500 transition-colors pr-2">
            Home
          </Link>
        </div>

        {/* العنوان */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-yellow-500 uppercase tracking-widest border-b-2 border-yellow-500 w-fit mx-auto pb-3 mb-2">
            {category}
          </h1>
          <p className="text-gray-400 tracking-[0.3em] text-[11px] uppercase">
            Menu Selection
          </p>
        </div>

        {/* شبكة الأطباق */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b border-white/10 pb-4 group hover:bg-white/5 transition-all px-3 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  {/* تم إصلاح المقاسات هنا لتعمل مع Tailwind بشكل صحيح */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                    <Image
                      src={item?.imageUrl || "/placeholder.jpg"}
                      alt={item?.name}
                      fill
                      // تحسين الأداء: تحميل أول 6 صور فوراً لرفع تقييم LCP
                      priority={index < 6} 
                      // تحسين الحجم: إخبار المتصفح أن الصورة صغيرة جداً (thumbnail)
                      sizes="(max-width: 768px) 64px, 80px"
                      className="rounded-full object-cover border-2 border-yellow-600/20 group-hover:border-yellow-500 transition-all duration-300 shadow-xl"
                    />
                  </div>

                  {/* النصوص */}
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300 leading-tight">
                      {item?.name}
                    </h2>
                    {item.description && (
                      <p className="text-gray-400 text-xs mt-1 leading-snug line-clamp-2 max-w-[180px] md:max-w-xs">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* السعر */}
                <div className="text-right">
                  <span className="text-xl md:text-2xl font-black text-yellow-500 flex items-baseline gap-1">
                    {item?.price}
                    <span className="text-xs font-normal text-gray-300 uppercase">
                      DH
                    </span>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-xl italic tracking-widest text-white/50">
                قريباً..
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHome;