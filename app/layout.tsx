import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        {/* For interactive-rating.tsx */}
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        {/* For qr-code.tsx */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body style={{minWidth: '100vw', minHeight: '100vh'}}>{children}</body>
    </html>
  )
}
