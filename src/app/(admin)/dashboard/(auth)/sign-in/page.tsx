import FormSignIn from "./_components/form"


export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export default function SignInPage() {
  return (
    <main className="w-full h-screen overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <FormSignIn/>
    </div>
    </main>
  )
}
