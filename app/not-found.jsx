import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white px-4">
      {/* أيقونة أو رقم 404 بتصميم فخم */}
      <div className="relative">
        <h1 className="text-[120px] md:text-[180px] font-black text-white/5 leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl md:text-5xl font-light tracking-[0.3em] text-yellow-500 uppercase">
            DÉLICE
          </span>
        </div>
      </div>

      {/* رسالة الخطأ */}
      <div className="text-center -mt-4 md:-mt-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-wide">
          Oups ! Page introuvable
        </h2>
        <p className="text-gray-400 max-w-sm mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          <br />
          <span className="italic text-gray-500 mt-2 block italic text-xs">
            عذراً، الصفحة التي تبحث عنها غير موجودة.
          </span>
        </p>

        {/* زر العودة للرئيسية */}
        <Link
          href="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
        >
          RETOUR AU MENU
        </Link>
      </div>

      {/* لمسة جمالية في الخلفية */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>
    </div>
  );
}