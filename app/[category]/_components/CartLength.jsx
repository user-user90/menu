"use client"
import storeMenu from "@/app/_Store/Store";
import { useEffect, useState } from "react";

export default function CartLength() {
  const cart = storeMenu((state) => state.cart);


  // لا تظهر شيئاً حتى يتم التأكد من العميل أو إذا كانت السلة فارغة
  if ( cart.length === 0) return null;

  return (
    <span className="absolute  -top-2 right-4  text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full border border-black shadow-lg">
      {cart.length}
    </span>
  );
}