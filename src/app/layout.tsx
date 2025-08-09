import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ContentAI Pro - AI-Powered Content Generation",
  description: "Transform your content creation with AI. Generate blog posts, social media content, marketing copy, and more in minutes, not hours.",
  keywords: ["AI content generation", "content creation", "blog writing", "social media content", "marketing copy"],
  authors: [{ name: "ContentAI Pro" }],
  openGraph: {
    title: "ContentAI Pro - AI-Powered Content Generation",
    description: "Transform your content creation with AI. Generate blog posts, social media content, marketing copy, and more in minutes, not hours.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}