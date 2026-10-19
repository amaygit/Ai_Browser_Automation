import { Show, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header Bar */}
      <header className="flex justify-end items-center p-4 gap-4 border-b">
        <Show when="signed-out">
          <SignInButton mode="modal">
            <Button variant="ghost">Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="default">Sign up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2">Project ready!</h1>
        <p className="text-muted-foreground mb-4">
          You may now add components and start building.
        </p>
        <p className="text-muted-foreground mb-4">
          We've already added the button component for you.
        </p>
        <Button>Button</Button>
      </main>
    </div>
  )
}