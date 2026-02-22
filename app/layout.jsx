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
        <link rel="icon" type="image/ico" sizes="32x32" href="https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/7362668826_both.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://imajodhpur.com/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="https://imajodhpur.com/assets/css/style.css" />
        <link rel="stylesheet" href="https://imajodhpur.com/assets/css/new_style.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
