const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4">
            <p className="text-2xl font-bold text-gray-800">MY TODOS</p>
            <div className="flex space-x-2">
                <a href="/api/logout" className="rounded bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">logout</a>
                <a href="/api/logout" className="rounded bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">login</a>
            </div>
        </nav>
    )
}
export default Navbar