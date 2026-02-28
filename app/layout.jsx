import './globals.css'

export const metadata = {
  title: 'IMA Jodhpur',
  description: 'IMA Jodhpur',
  keywords: 'IMA Jodhpur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/new_logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://imajodhpur.com/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="https://imajodhpur.com/assets/css/style.css" />
        <link rel="stylesheet" href="https://imajodhpur.com/assets/css/new_style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{fontFamily: 'Outfit, sans-serif'}}>{children}</body>
    </html>
  )
}
