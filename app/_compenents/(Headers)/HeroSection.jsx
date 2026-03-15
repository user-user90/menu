import Image from "next/image";
import Link from "next/link"; // أضفنا الرابط كما خططنا

function HeroSection({ data }) {
  return (
    <div className="bg-slate-950 min-h-screen">
    {/* // استخدام Grid لعرض الأصناف بشكل منظم (2 في الهاتف، 4 في الشاشة الكبيرة) */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 pt-5 md:pt-28">
      {data?.map((item) => (
        <Link href={`/${item.slug}`} key={item?._id}>
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white shadow-lg">
            {/* عرض الصورة */}
            <div className="h-48 w-full relative ">
              <Image
                src={item?.imageUrl || "/placeholder.jpg"} // صورة احتياطية في حال فقدان الرابط
                alt={item?.name || "food item"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* طبقة تظليل فوق الصورة لكي يظهر النص بوضوح */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white font-bold text-xl uppercase tracking-wider">
                {item?.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default HeroSection;
