import { useSession, signIn, signOut } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from "next/router"

const Signin = () => {
    const { data: session } = useSession()
    if (session) {
        const router = useRouter()
        router.push("/")
    }
    return <>
        <div className="bg-blue-200 w-screen h-screen flex flex-col gap-3 items-center justify-center">
            <h2 className="text-xl">Not signed in</h2>
            <button
                className="bg-white p-2 text-black flex items-center gap-2 rounded-full transition hover:scale-105"
                onClick={() => signIn('google')}
            >
                <FcGoogle />Signin using Google
            </button>
        </div>
    </>
}


export default Signin