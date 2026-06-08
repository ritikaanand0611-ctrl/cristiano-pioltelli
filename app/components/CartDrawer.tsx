"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function CartDrawer() {
  const { items, count, removeItem, clearCart, isOpen, closeCart } = useCart();

  const subtotal = items.reduce((sum, item) => {
    const num = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + num * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/30 z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[210] flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAE6DF]">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={16} strokeWidth={1.5} className="text-[#2C2A29]" />
                <span className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#2C2A29] uppercase">
                  Your Bag
                </span>
                {count > 0 && (
                  <span className="font-sans text-[9px] font-bold bg-[#2C2A29] text-white px-1.5 py-0.5 rounded-full">
                    {count}
                  </span>
                )}
              </div>
              <button onClick={closeCart} className="text-[#2C2A29]/40 hover:text-[#2C2A29] transition-colors">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={32} strokeWidth={1} className="text-[#2C2A29]/20" />
                  <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#2C2A29]/40 uppercase">
                    Your bag is empty
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-4"
                      >
                        {/* Thumbnail */}
                        <div className="w-16 h-16 flex-shrink-0 bg-[#F0EBE1] overflow-hidden">
                          {item.imagePath ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={item.imagePath}
                              alt={item.name}
                              className="w-full h-full object-contain mix-blend-multiply"
                            />
                          ) : (
                            <div className="w-full h-full" style={item.swatch ? { backgroundColor: item.swatch } : undefined} />
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-serif text-[13px] leading-snug text-[#2C2A29]">{item.name}</p>
                          <p className="mt-0.5 font-sans text-[8px] font-bold tracking-[0.3em] text-[#2C2A29]/50 uppercase">{item.category}</p>
                          <div className="mt-1.5 flex items-center gap-2">
                            <span className="font-sans text-[11px] font-bold text-[#2C2A29]">{item.price}</span>
                            {item.quantity > 1 && (
                              <span className="font-sans text-[9px] text-[#2C2A29]/40">× {item.quantity}</span>
                            )}
                          </div>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#2C2A29]/25 hover:text-[#2C2A29] transition-colors pt-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 size={13} strokeWidth={1.5} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="flex-shrink-0 px-6 py-5 border-t border-[#EAE6DF] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#2C2A29]/50 uppercase">Subtotal</span>
                  <span className="font-sans text-[13px] font-bold text-[#2C2A29]">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-[#2C2A29] text-[#FDFBF7] py-3.5 font-sans text-[9px] tracking-[0.4em] uppercase transition-opacity hover:opacity-75">
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full border border-[#2C2A29]/25 py-2.5 font-sans text-[8px] tracking-[0.3em] text-[#2C2A29]/50 uppercase hover:border-[#2C2A29]/50 hover:text-[#2C2A29] transition-all"
                >
                  Clear Bag
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
