import { ReactNode } from 'react'
import Navbar from './Navbar'

function Layout({children}:{children: ReactNode}) {
    return (
        <>
            <div>
                <Navbar />
                <main className="px-2 sm:px-4 lg:px-4 bg-gray-100 min-h-screen">
                    <div className="mx-auto max-w-[1400px] py-10">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Layout
