import "./globals.css";

export const metadata = {
  title: "Hack4Community",
  description:
    "Community-Based Hackathon for Social Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}