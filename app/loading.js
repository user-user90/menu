export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950">
      {/* السبيينر الرئيسي */}
      <div className="relative w-20 h-20">
        {/* الحلقة الخارجية المتحركة */}
        <div className="absolute inset-0 border-4 border-t-yellow-500 border-r-transparent border-b-yellow-500 border-l-transparent rounded-full animate-spin"></div>
        
        {/* الحلقة الداخلية المتحركة بالعكس */}
        <div className="absolute inset-2 border-4 border-t-transparent border-r-white border-b-transparent border-l-white rounded-full animate-spin-slow"></div>
        
        {/* نقطة المركز الثابتة */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]"></div>
        </div>
      </div>
    </div>
  );
}