import { CredentialsSignIn } from "@/lib/sign-in-actions";

export function SignInForm() {
  return (
    <form action={CredentialsSignIn}>
      <label>
        Email
        <input name="username" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  );
}
