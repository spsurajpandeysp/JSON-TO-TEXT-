'use client'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 border-t-2 border-gray-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row  justify-center items-center text-center space-x-4">
        <Link href="/contact" className="hover:text-gray-300">
          Contact Us
        </Link>
      
        <Link href="/terms-and-conditions" className="hover:text-gray-300">
          Terms and Conditions
        </Link>

        <Link href="/privacy-policy" className="hover:text-gray-300">
          Privacy Policy
        </Link>

        <Link href="/disclaimer" className="hover:text-gray-300">
          Disclaimer
        </Link>


        <Link href="/disclosure-policy" className="hover:text-gray-300">
        Disclosure Policy
        </Link>

        <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </Link>

        <div className="text-sm">
          © 2024 {' '}
          <Link href="https://codeapto.com" target="_blank" rel="noopener noreferrer" className="underline">
            CodeApto India
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;