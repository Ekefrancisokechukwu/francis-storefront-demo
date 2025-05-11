"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronDown, ChevronUp, Heart, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { StarRating } from "@/components/ui/StarRating";

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

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetailsInfo({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
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

  const checkStockStatus = (inStock: number) => {
    switch (true) {
      case inStock === 0:
        return (
          <>
            <span className="inline-block size-2 ring-2 ring-offset-1 ring-red-500/30 bg-red-500 rounded-full mr-2"></span>
            {inStock} Out of Stock
          </>
        );
      case inStock <= 50:
        return (
          <>
            <span className="inline-block size-2 ring-2 ring-offset-1 ring-neutral-400/30 bg-neutral-400 rounded-full mr-2"></span>
            {inStock} Low Stock
          </>
        );
      case inStock > 50:
        return (
          <>
            <span className="inline-block size-2 ring-2 ring-offset-1 ring-green-500/30 bg-green-500 rounded-full mr-2"></span>
            {inStock} In Stock
          </>
        );
      default:
        return "Unknown";
    }
  };

  return (
    <main className=" py-13">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-8">
        {/* Product Images Section */}
        <div className="flex lg:sticky top-10 md:border-r md:flex-row flex-col gap-y-4 gap-x-1.5  ">
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

            <div className="md:max-h-[40rem] flex md:flex-col flex-row gap-y-2.5 overflow-hidden  w-full">
              {product.images.map((image, index) => (
                <div
                  key={image.public_id}
                  className={cn(
                    "border cursor-pointer hover:border-black relative shrink-0 rounded-md overflow-hidden  md:w-full w-[7rem] h-24 flex items-center justify-center",
                    selectedImage === index ? "border-black" : "border-gray-200"
                  )}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.url}
                    alt={"testing"}
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
                src={product.images[selectedImage].url}
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
            <StarRating size={20} rating={product.rating} />
            <span className="ml-2 text-gray-500">
              ({product.reviews.length ?? 0})
            </span>
          </div>

          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="text-2xl font-bold mb-4">$100.00</div>

          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-gray-500" />
            <span>15 people are viewing this right now</span>
          </div> */}

          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">Availability:</span>
              <span className="flex items-center">
                {checkStockStatus(product.inStock)}
              </span>
            </div>
          </div>

          <div className="mb-6">
            {product.variants.some((variant) =>
              variant.options.some((opt) => opt.type === "color")
            ) && (
              <div>
                <div className="font-semibold mb-2 text-sm">Color</div>
                <div className="flex gap-2">
                  {product.variants.map((variant) =>
                    variant.options
                      .filter((opt) => opt.type === "color")
                      .map((opt) => (
                        <button
                          key={opt._id}
                          className={cn(
                            "size-6 rounded-full transition-all flex items-center justify-center",
                            selectedColor === opt._id
                              ? "outline-2 outline-offset-2"
                              : ""
                          )}
                          style={{
                            backgroundColor: opt.hexCode,
                            outlineColor: opt.hexCode,
                          }}
                          onClick={() => handleColorSelect(opt._id)}
                        >
                          {selectedColor === opt._id && (
                            <Check
                              size={17}
                              color={
                                isLightColor(opt.hexCode as string)
                                  ? "#000000"
                                  : "#fff"
                              }
                              className="font-bold"
                            />
                          )}
                        </button>
                      ))
                  )}
                </div>
              </div>
            )}
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

export function isLightColor(hex: string): boolean {
  if (!hex) return false;
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  // Calculate luminance
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 186;
}
