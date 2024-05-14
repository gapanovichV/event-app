import React from "react"

import Layout from "@/components/layouts/Layout"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Layout>{children}</Layout>
}
