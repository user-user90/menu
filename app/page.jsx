import { client } from "@/sanity/lib/client";
import HeroSection from "./_components/(headers)/HeroSection";

const getData = async () => {
  // أزلنا [0] لكي نحصل على كل الأصناف ونستطيع عمل map
const query = `*[_type == "menuHome"]{
  _id,
  name,
  "imageUrl": image.asset->url,
  "slug": slug.current // أضفنا هذا السطر لجلب الرابط
}`;
  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data = await getData();
  
  return (
    <main >
      {/* تأكد من تمرير data={data} هنا */}
      <HeroSection data={data} />
    </main>
  );
}