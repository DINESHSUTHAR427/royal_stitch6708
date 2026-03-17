import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignInForm } from "@/components/admin/sign-in-form";

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions);

  // ✅ Only redirect if ADMIN
  if (session?.user && (session.user as any).role === "ADMIN") {
    redirect("/admin");
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background py-12">
      <SignInForm />
    </div>
  );
}

