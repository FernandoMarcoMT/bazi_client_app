import Link from "next/link"
import { CloudDecoration } from "./cloudDecoration"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-blue-950 pt-20 pb-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Lorem Ipsum</h3>
            <p className="text-gray-300">
              Discover the ancient wisdom and modern applications of metaphysical practices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-amber-400">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-amber-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about-course" className="text-gray-300 hover:text-amber-400">
                  About Course
                </Link>
              </li>
              <li>
                <Link href="#about-path" className="text-gray-300 hover:text-amber-400">
                  About Path
                </Link>
              </li>
              <li>
                <Link href="#about-tao" className="text-gray-300 hover:text-amber-400">
                  About Tao
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-amber-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-amber-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-amber-400">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-amber-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Meditation St, Zen City</li>
              <li className="text-gray-300">info@loremipsum.com</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lorem Ipsum. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative elements */}
      <CloudDecoration className="absolute bottom-0 left-0 w-full h-auto text-amber-400/5 transform -scale-y-100" />
    </footer>
  )
}
