import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <SignIn path="/sign-in" />
    </div>
  )
}
