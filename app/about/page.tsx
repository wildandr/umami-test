import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"

export default function About() {
         return (
           <div>
             <h1>About Us</h1>
             <p>This is the About page for testing Umami analytics.</p>
             <Link href="/">Back to Home</Link>
             <Analytics />
           </div>
         );
       }