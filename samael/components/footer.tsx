import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import space from "@/public/logo_footer.png"
import logo from "@/public/logo-transparent.png"

interface FooterProps {
  dictionary: {
    company: string
    links: string
    contact: string
    home: string
    about: string
    contactUs: string
    address: string
    phone: string
    email: string
    copyright: string
  }
}

export default function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Image
              src={logo}
              alt="Samael Consulting"
              width={150}
              height={50}
              className="h-24 w-auto mb-4"
            />
            <p className="text-gray-400 mt-4 max-w-xs">
              Samael Consulting - your trusted partner for business growth and success.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-500">{dictionary.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {dictionary.home}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {dictionary.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-500">{dictionary.links}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-500">{dictionary.contact}</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block text-sm text-gold-500/80">{dictionary.address}</span>
                123 Business Ave, Bratislava, Slovakia
              </li>
              <li className="text-gray-400">
                <span className="block text-sm text-gold-500/80">{dictionary.phone}</span>
                +421 950 735 422
              </li>
              <li className="text-gray-400">
                <span className="block text-sm text-gold-500/80">{dictionary.email}</span>
                samaelconsulting@icloud.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t flex flex-col border-gray-800 mt-12 pt-8 text-center items-center justify-center text-gray-500">
        <Image
              src={space}
              alt="Samael Consulting"
              width={150}
              height={50}
              className="h-4 w-auto mb-4"
            />
          <p>
            {dictionary.copyright} © {new Date().getFullYear()} Samael Consulting. All rights reserved. Created by SpaceSolutions
          </p>
        </div>
      </div>
    </footer>
  )
}
