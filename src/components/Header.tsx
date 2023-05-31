export default function Header({ children, ...others }: any) {
    return (
        <section className="px-2 py-5 border-b border-gray-600">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className={`text-4xl text-gray-800 font-bold ${others.cls}`}>{others.title}</h1>
                {children}
            </div>
        </section >
    )
}
