import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import SearchPopup from '@/components/SearchPopup'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist',
})

export const metadata: Metadata = {
  title: 'Financer - Financial Consulting Template',
  description: 'Professional financial consulting and investment services',
  keywords: ['finance', 'consulting', 'investment', 'banking', 'financial services'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanist.variable}`}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="shortcut icon" href="/assets/images/icons/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/assets/images/icons/favicon.png" type="image/x-icon" />
        
        {/* CSS Files */}
        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/fontawesome-all.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/aos.css" rel="stylesheet" />
        <link href="/assets/css/icomoon.css" rel="stylesheet" />
        <link href="/assets/css/owl.css" rel="stylesheet" />
        <link href="/assets/css/jquery-ui.css" rel="stylesheet" />
        <link href="/assets/css/nice-select.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/assets/css/global.css" rel="stylesheet" />
        <link href="/assets/css/elements-css/header.css" rel="stylesheet" />
        <link href="/assets/css/elements-css/footer.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* AOS CSS */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className="boxed_wrapper">
        <Preloader />
        <SearchPopup />
        <Header />
        {children}
        <Footer />
        
        <ScrollToTop />
        
        {/* JavaScript Files */}
        <script src="/assets/js/bootstrap.js" defer></script>
        <script src="/assets/js/jquery.js" defer></script>
        <script src="/assets/js/appear.js" defer></script>
        <script src="/assets/js/jquery.nice-select.min.js" defer></script>
        <script src="/assets/js/wow.js" defer></script>
        <script src="/assets/js/owl.js" defer></script>
        <script src="/assets/js/validation.js" defer></script>
        <script src="/assets/js/jquery-ui.js" defer></script>
        <script src="/assets/js/jquery.fancybox.js" defer></script>
        <script src="/assets/js/product-filter.js" defer></script>
        <script src="/assets/js/bxslider.js" defer></script>
        <script src="/assets/js/jquery.bootstrap-touchspin.js" defer></script>
        <script src="/assets/js/aos.js" defer></script>
        <script src="/assets/js/main.js" defer></script>
        
        {/* Initialize AOS - CORRECT WAY */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof AOS !== 'undefined') {
                  AOS.init({
                    duration: 800,
                    once: true,
                    offset: 100,
                    disable: window.innerWidth < 768
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}