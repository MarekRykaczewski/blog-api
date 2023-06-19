function Nav() {
  return (
    <nav className="flex p-4 bg-blue-500 text-white justify-between">
        <h1 className="text-xl font-bold">My Blog</h1>
        <div className="flex gap-3">
            <button>Create post </button>
            <button>Manage posts</button>
        </div>
    </nav>
  )
}

export default Nav