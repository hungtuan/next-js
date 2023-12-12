export const metadata = {
  title: "Hello",
  description: "Học lập trình",
  keywords: "học js, học next.js, học reactjs, học node.js",
  openGraph: {
    title: "Demo Share",
    description: "Lạ quá",
    images: ["https://fhafhdajfdk.com"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
