import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';




export const metadata = {
  title: 'Next.js-MUI',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          
        <ThemeProvider theme={theme}>
        
          
          {children}</ThemeProvider>
          


        </AppRouterCacheProvider>

      </body>
    </html>
  )
}
