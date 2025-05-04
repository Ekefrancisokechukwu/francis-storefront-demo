import { Logo } from "@/components/ui/Logo";
import { Wrapper } from "@/components/ui/Wrapper";
import {
  Facebook,
  Headset,
  Instagram,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  {
    label: "Contact Us",
    href: "#",
  },
  {
    label: "Shipping",
    href: "#",
  },
  {
    label: "Sitemap",
    href: "#",
  },
  {
    label: "FAQs",
    href: "#",
  },
  {
    label: "Size Chart",
    href: "#",
  },
  {
    label: "About Us",
    href: "#",
  },
];

const productLinks = [
  {
    label: "Bedroom Bed",
    href: "#",
  },
  {
    label: "Modern Vase",
    href: "#",
  },
  {
    label: "Sideboard",
    href: "#",
  },
  {
    label: "Study Chair",
    href: "#",
  },
  {
    label: "Table Lamp",
    href: "#",
  },
  {
    label: "Aram Chair",
    href: "#",
  },
];

const yourInfoLinks = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Refund Policy",
    href: "#",
  },
  {
    label: "Shipping Policy",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
  {
    label: "Policy for Buyers",
    href: "#",
  },
  {
    label: "Policy for Sellers",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10 bg-stone-900 text-neutral-500 pt-8">
      <Wrapper>
        <div className="grid lg:grid-cols-5 md:grid-cols-2  grid-cols-1 gap-x-13 gap-y-6 pb-9">
          <div>
            <Logo />
            <p className="mt-3.5">
              Welcome to our store, where we pride ourselves on providing
              exceptional products and unparalleled customer service. Our store
              is a haven for those who appreciate quality, style, and
              innovation.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-lg text-white">Quick Links</h5>
            <ul className="mt-4 space-y-1.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={"#"}
                    className="hover:underline text-sm hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg text-white">Find Product</h5>
            <ul className="mt-4 space-y-1.5">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={"#"}
                    className="hover:underline text-sm hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg text-white">Your Account</h5>
            <ul className="mt-4 space-y-1.5">
              {yourInfoLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={"#"}
                    className="hover:underline text-sm hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg text-white">
              About Information
            </h5>
            <div className="flex items-start gap-x-2.5 mt-4 text-sm">
              <MapPin size={18} className="shrink-0" /> Woodisa- Furniture Store
              507-Union Trade Ipsum Doler Centre France
            </div>
            <div className="flex items-start gap-x-2.5 mt-2 text-sm">
              <Mail size={18} className="shrink-0" /> hello@blocks.com
            </div>
            <div className="flex items-start gap-x-2.5 mt-2 text-sm">
              <Headset size={18} className="shrink-0" /> Woodisa- Furniture
              Store 507-Union Trade Ipsum Doler Centre France
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="border-t border-border/20 py-3.5">
        <Wrapper>
          <div className="flex items-center gap-x-3 text-white">
            <Link
              href={"#"}
              className="p-2 inline-flex rounded-full bg-stone-700"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href={"#"}
              className="p-2 inline-flex rounded-full bg-stone-700"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href={"#"}
              className="p-2 inline-flex rounded-full bg-stone-700"
            >
              <Youtube size={20} />
            </Link>
            <Link
              href={"#"}
              className="p-2 inline-flex rounded-full bg-stone-700"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
};
export default Footer;
