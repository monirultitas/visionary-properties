import "./globals.css";
import { Plus_Jakarta_Sans, Fraunces, Hind_Siliguri } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const bengali = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://visionaryproperties.example"),
  title: "Visionary Properties & Development | Alamnagar Housing",
  description:
    "Visionary Properties & Development presents Alamnagar Housing — a proposed residential project with two G+12 towers at the crossroads of Uttara and Mirpur, Dhaka. Modern architecture, elite security, and future-ready investment.",
  keywords: [
    "Visionary Properties",
    "Alamnagar Housing",
    "real estate Dhaka",
    "apartment Baunia",
    "DOHS housing",
    "Mirpur Uttara apartment",
    "flat for sale Dhaka",
  ],
  openGraph: {
    title: "Visionary Properties & Development | Alamnagar Housing",
    description:
      "Two G+12 towers at the crossroads of Uttara and Mirpur — modern architecture, elite security, future-ready investment.",
    type: "website",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export const viewport = {
  themeColor: "#060910",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${jakarta.variable} ${fraunces.variable} ${bengali.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
