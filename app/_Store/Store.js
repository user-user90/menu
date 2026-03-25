import { create } from "zustand";
import { persist } from "zustand/middleware";

const storeMenu = create(
persist((set)=>({
    cart:[],
    addCart:(product)=>set((state)=>({
        cart:[...state.cart,product]
    })),
   
}),
// ## local Storage
{name:'menu-storage'}
)
);

export default storeMenu;
