import { Button } from "@/components/ui/button";
import { FaCartShopping } from "react-icons/fa6";
import Movies from "@/pages/project/Moives";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MoviesLayout = () => {
  const total = useSelector((state) => state.total);

  const cartCount = 3; // Example count (You can replace it with dynamic state)
  const navigate = useNavigate();
  return (
    <div>
      {/* Cart Button */}
      <div className="w-full flex justify-end items-center p-4">
        <Button
          className="relative py-6 flex items-center justify-around"
          onClick={() => navigate("/project/cart")}
        >
          <span>${total.toFixed(2)}</span>
          <div className="relative">
            <FaCartShopping />
            {cartCount > 0 && (
              <span className="absolute -top-3.5 -right-3.5 bg-red-500 text-white
               text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </Button>
      </div>

      {/* Movies List */}
      <Movies />
    </div>
  );
};

export default MoviesLayout;
