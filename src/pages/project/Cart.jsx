import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash, Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "@/store/movies/actions";

export default function Cart() {
  const cart = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  console.log(cart);

  const totalPrice = useSelector((state) => state.total);

  return (
    <div className="container mx-auto p-6">
      <p className="text-2xl font-bold mb-6">Shopping Cart</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="flex flex-row items-center p-4">
              <img
                src={
                  "https://image.tmdb.org/t/p/w440_and_h660_face/" +
                  item.poster_path
                }
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.popularity}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="px-3 py-1 border rounded-md">
                    {item.quantity}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeItem(item.id)}
              >
                <Trash size={16} />
              </Button>
            </Card>
          ))}
        </div>
        <Card className="p-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <p className="text-gray-500 mb-2">
              Total: <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </p>
            <Button className="w-full mt-4">Proceed to Checkout</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
