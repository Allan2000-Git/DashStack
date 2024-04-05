import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { sidenavItems } from '../../utils/data';
import classNames from 'classnames';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, ChevronsUpDown, Menu, SquarePen, X } from 'lucide-react';

const items = [
    {
        name: "Switch organisation",
        icon: <ArrowLeftRight className="text-gray-500" size={16} />,
    },
    {
        name: "Edit profile",
        icon: <SquarePen className="text-gray-500" size={16} />,
    }
]

function SidebarLayout({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open by default on desktop

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`pr-9 mr-9 overflow-y-auto ${isSidebarOpen ? 'w-80' : 'w-16'} lg:w-80 lg:block`}>
                <div className="h-full flex flex-col gap-5">
                    {/* Toggle button */}
                    <Button onClick={toggleSidebar} className="text-white p-2 focus:outline-none lg:hidden">
                        {isSidebarOpen ? (
                            <X />
                        ) : (
                            <Menu />
                        )}
                    </Button>
                    {/* Profile */}
                    <div className={`flex justify-between lg:justify-around ${isSidebarOpen ? 'block' : 'hidden'}`}>
                        <img
                            className={`h-12 w-12 rounded-full border-2 border-blue-700 object-cover `}
                            src="https://s3-alpha-sig.figma.com/img/dee6/0d90/bef2ee8926fcedcf6734f4fc5e5b55e0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IcW80EBVMx-NUymUuwqmdf25z7PlthcEK0z2WpJBbb7N8D5TlnfYuKtnH6GBUiW9PtwY1DclB6kldRbsblJQeJCb5CxQDn523efEGaHSmpSD94w8qRXIU7AmRZogMOBnE3NuRvX~AVBj6-AMyFXqttTneDOOt5CQB86YJRM6ZNJCmNDRpkmmOiMUmtajSETDBm-DaGMzhMGe-ahClw10CrHTvUcuWGMKVugg1El2ZuAPhkGAGE5~F59QqBSKIw4W5-k1P1ZQLbigIXM9zUrW6pGsEVe2~Svofb3sqYO1TF4IWV0Z5MXWAv1uQf7EDTVQlNNtzSWurXIuO0QUgjtuFw__"
                            alt="Suraj Talreja profile picture" />
                        <div className="hidden lg:block">
                            <h1 className={`text-gray-700 text-xl font-semibold ${isSidebarOpen ? 'block' : 'hidden'}`}>Suraj Talreja </h1>
                            <p className={`text-gray-700 text-sm font-normal ${isSidebarOpen ? 'block' : 'hidden'}`}>surajvtalreja@gmail.com</p>
                        </div>
                        <ChevronsUpDown size={20} />
                    </div>
                    <div className={`flex flex-col gap-2 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                        {
                            items.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    className="w-full shadow-sm flex items-center justify-center gap-2"
                                >
                                    {item.icon}
                                    <span className="text-gray-700 text-sm font-medium">{item.name}</span>
                                </Button>
                            ))
                        }
                    </div>
                    <div className={`flex flex-col gap-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                        {
                            sidenavItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.href}
                                    className={classNames("flex items-center px-4 py-2 gap-3", {
                                        "bg-gray-200 rounded-md": item.current === true
                                    })}>
                                    {item.icon}
                                    <span className="text-gray-600 text-base font-medium">{item.name}</span>
                                </Link>
                            ))
                        }
                        {/* Add more sidebar links as needed */}
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-1">
                {/* Page content */}
                <main className="flex-1 px-4">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default SidebarLayout;
