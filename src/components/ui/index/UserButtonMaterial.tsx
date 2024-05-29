import { auth } from '@/auth.config'
import Link from 'next/link'

export const UserButtonMaterial = async () => {
    
    const session = await auth()

    return (
        <Link
            href={`/user/${session?.user.id}/material`}
            className="my-2 mx-4 container inline-flex items-center justify-center h-8 w-28 text-sm font-semibold leading-none rounded-full border bg-white text-gray-600 hover:bg-gray-100"
        >
            Materiales
        </Link>
    )
}
