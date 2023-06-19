import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4">
            <p className="text-2xl font-bold text-gray-800">MY TODOS</p>
            <div className="flex space-x-2">
                <Link href="/api/auth/logout" className="rounded bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">logout</Link>
                <Link href="/api/auth/login" className="rounded bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">login</Link>
            </div>
        </nav>
    )
}
export default Navbar