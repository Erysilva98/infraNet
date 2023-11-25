import './globals.css'
import { Raleway } from 'next/font/google'

const RalewayFont = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'InfraNet',
  description: 'Portal do IFPE - Campus Belo Jardim',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={RalewayFont.style}>
        {children}
      </body>
    </html>
  )
}