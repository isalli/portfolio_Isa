import {Roboto} from 'next/font/google';
import React from 'react';

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={roboto.className}>{children}</body>
    </html>
  )
}


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
/*
export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={roboto.className}>{children}</body>
    </html>
  )
}*/
