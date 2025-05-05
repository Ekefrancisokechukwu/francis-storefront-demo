"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronDown, ChevronUp, Eye, Heart, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const productImages = [
  {
    id: 1,
    src: "/prod-demo-1.webp",
    alt: "Gray and olive bottle grinders",
  },
  {
    id: 2,
    src: "/prod-demo-2.webp",
    alt: "Gray and olive bottle grinders side view",
  },
  {
    id: 3,
    src: "/prod-demo-3.jpg",
    alt: "Cream and beige bottle grinders",
  },
  {
    id: 4,
    src: "/prod-demo-4.webp",
    alt: "Green bottle grinders",
  },
  {
    id: 5,
    src: "/prod-demo-5.webp",
    alt: "Green bottle grinders",
  },
  {
    id: 6,
    src: "/prod-demo-6.webp",
    alt: "Green bottle grinders",
  },
];

const colorOptions = [
  { id: 1, name: "Teal", value: "teal", hex: "#1D9A8B" },
  { id: 2, name: "Gray", value: "gray", hex: "#808080", selected: true },
];

export function ProductDetailsInfo() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(2);
  const [inWishlist, setInWishlist] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleColorSelect = (id: number) => {
    setSelectedColor(id);
  };

  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
  };

  return (
    <main className=" py-13">
      <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-8">
        {/* Product Images Section */}
        <div className="flex sticky top-10 md:border-r md:flex-row flex-col gap-y-4 gap-x-1.5  ">
          {/* Thumbnails */}
          <div className="flex md:flex-col    gap-2 md:w-[6.5rem] w-full mx-auto order-2 md:order-1  ">
            <button
              className=" md:w-auto bg-gray-200 md:flex hidden justify-center items-center px-2 py-1"
              onClick={() => {
                if (selectedImage > 0) setSelectedImage(selectedImage - 1);
              }}
            >
              <ChevronUp className="hidden md:block" />
              <ChevronUp className="block md:hidden rotate-90" />
            </button>

            <div className="md:h-[30rem] flex md:flex-col flex-row overflow-hidden  w-full">
              {productImages.map((image, index) => (
                <div
                  key={image.id}
                  className={cn(
                    "border cursor-pointer relative shrink-0 rounded-md overflow-hidden  md:w-full w-[7rem] h-24 flex items-center justify-center",
                    selectedImage === index ? "border-black" : "border-gray-200"
                  )}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <button
              className="w-full md:w-auto bg-gray-200 md:flex hidden justify-center items-center px-2 py-1"
              onClick={() => {
                if (selectedImage < productImages.length - 1)
                  setSelectedImage(selectedImage + 1);
              }}
            >
              <ChevronDown className="hidden md:block" />
              <ChevronDown className="block md:hidden rotate-90" />
            </button>
          </div>

          {/* Main Image */}
          <div className="flex-1 order-1 md:order-2">
            <div className="rounded-md overflow-hidden flex items-center justify-center">
              <Image
                src={productImages[selectedImage].src || "/placeholder.svg"}
                alt={productImages[selectedImage].alt}
                width={500}
                height={500}
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div>
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-5 h-5 ${
                  star <= 4 ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-500">(1)</span>
          </div>

          <h1 className="text-2xl font-bold mb-2">
            Bottle Grinder Set Ceramic Spice Mill 2 Pcs
          </h1>

          <div className="text-2xl font-bold mb-4">$100.00</div>

          <p className="text-gray-600 mb-4">
            About this item Full Body Airbag & Rollers The smart airbags of the
            massage chair for legs and back hold and release the muscles the
            same way as a skilled...
          </p>

          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-gray-500" />
            <span>15 people are viewing this right now</span>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">Availability:</span>
              <span className="flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                300 in stock
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="font-semibold mb-2 text-sm">Color</div>
            <div className="flex gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.id}
                  className={cn(
                    "size-6 rounded-full transition-all flex items-center justify-center",
                    selectedColor === color.id
                      ? "outline-2 outline-offset-2"
                      : ""
                  )}
                  style={{
                    backgroundColor: color.hex,
                    outlineColor: color.hex,
                  }}
                  onClick={() => handleColorSelect(color.id)}
                >
                  {selectedColor === color.id && (
                    <Check size={17} color="#fff" className="font-bold" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="font-semibold mb-2 text-sm">Quantity</div>
            <div className="flex">
              <div className="flex border rounded border-gray-300 w-32">
                <button
                  className="px-3 py-2 border-r border-gray-300"
                  onClick={decreaseQuantity}
                >
                  −
                </button>
                <input
                  type="text"
                  className="w-full text-center"
                  value={quantity}
                  readOnly
                />
                <button
                  className="px-3 py-2 border-l border-gray-300"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 mb-6">
            <Button>ADD TO CART</Button>
            <Button>BUY IT NOW</Button>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
              onClick={toggleWishlist}
            >
              <Heart
                className={cn(
                  "w-5 h-5",
                  inWishlist ? "fill-current text-red-500" : ""
                )}
              />
              <span>Wishlist</span>
            </button>
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
              <Scale className="w-5 h-5" />
              <span>Compare</span>
            </button>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="grid gap-1">
              <div className="flex gap-2">
                <span className="font-semibold">SKU:</span>
                <span>NHFLS-11</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Vendor:</span>
                <span>HomeTown</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Category:</span>
                <span>Ottoman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
