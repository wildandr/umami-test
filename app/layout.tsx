export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
         <html lang="en">
           <head>
             <title>Umami Test App</title>
             <script
               async
               src="https://umami-sigma-ashen.vercel.app/script.js"
               data-website-id="da65ca9a-9b68-45ca-a2de-498cd2b4dd66"
             ></script>
           </head>
           <body>{children}</body>
         </html>
       );
     }