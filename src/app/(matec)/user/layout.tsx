import { auth } from "@/auth.config";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function MatecLayout({
    children
}: {
    children: React.ReactNode;
}) {

    const session = await auth()
    const headersList = headers();
    const activePath = headersList.get("next-url")

    if (session && !activePath?.includes(session?.user.id)) {
        redirect('/')
    }

    return (

        <main>
            {children}
        </main>

    );
}