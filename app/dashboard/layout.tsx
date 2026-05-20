import Sidebar from "../_components/sidebar/sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full">
            <main className="flex h-full w-full grid grid-cols-[170px_1fr]">
                <Sidebar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout