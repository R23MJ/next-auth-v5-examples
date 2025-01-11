import { auth } from "@/auth";
import SignOutButton from "@/components/sign-out-button";

export default async function AccountPage() {
  const session = await auth();

  return (
    <main>
      <h1>Account</h1>
      <p>Welcome {session?.user?.name}!</p>
      <SignOutButton />
    </main>
  );
}
