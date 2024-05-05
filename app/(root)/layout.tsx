import Layout from "@/components/layouts/Layout"
import React from "react"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Layout>{children}</Layout>
  )
}