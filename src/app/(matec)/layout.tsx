import { GuestTopMenu, UserTopMenu } from "@/components";
import { auth } from "@/auth.config";
import { User } from "@/interfaces";

export default async function MatecLayout({
    children
}: {
    children: React.ReactNode;
}) {

    const session = await auth()

    return (

        <main>

            {
                session
                    ? <UserTopMenu user={session.user as User} />
                    : <GuestTopMenu />
            }

            <div className="flex flex-col items-center justify-center">
                <div className="container px-4 py-4">
                    <div className="max-w-4xl w-full mx-auto">

                        {children}

                    </div>
                </div>
            </div>

        </main>

    );
}