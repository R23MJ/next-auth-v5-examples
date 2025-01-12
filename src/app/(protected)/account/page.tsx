import { auth } from "@/auth";
import SignOutButton from "@/components/sign-out-button";
import Image from "next/image";

export default async function AccountPage() {
  const session = await auth();

  return (
    <main className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="flex flex-col gap-20 w-[70vw] h-[70vh] mx-auto p-4 border rounded-md shadow-md">
        <div className="flex justify-between h-[48px] w-full border-b">
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="User profile picture"
              className="rounded-full w-[32px] h-[32px]"
              width={32}
              height={32}
            />
          )}
          <h1 className="font-semibold text-2xl">Account</h1>
          <SignOutButton />
        </div>
        <div className="flex flex-col gap-2">
          <p>
            <strong>Username:</strong> {session?.user?.name}
          </p>
          <p>
            <strong>Email:</strong> {session?.user?.email}
          </p>
        </div>
      </div>
    </main>
  );
}
