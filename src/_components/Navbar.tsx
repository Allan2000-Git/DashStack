import { useState } from 'react';
import { Menu, X, MessageCircleMore, ShoppingCart, ChevronDown } from 'lucide-react';
import classNames from 'classnames';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import {navigationItems} from "../../utils/data";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0">
            <div className="mx-auto max-w-[1400px] px-2">
                <div className="relative flex items-center justify-between py-4 border-b">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <X className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                        <img
                            className="block lg:hidden h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                        />
                        <img
                            className="hidden lg:block h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                            alt="Workflow"
                        />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center gap-6 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative">
                            <MessageCircleMore size={22} className="text-gray-400" />
                            <div className="w-[11px] h-[11px] bg-[#34D399] rounded-full absolute top-[-1px] right-[-2px]"></div>
                        </div>
                        <ShoppingCart size={22} className="text-gray-400" />
                        {/* Profile dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-3">
                                <img
                                    className="h-[40px] w-[40px] rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <span className="text-gray-700 font-medium">Tom Cook</span>
                                <ChevronDown size={18} className="text-gray" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="hidden sm:flex sm:space-x-4 py-4 items-center gap-7">
                    {navigationItems.map((item) => (
                        <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                            "text-gray-500 hover:text-gray-900 transition duration-150", {
                                "bg-gray-100 rounded-md text-gray-900 px-[12px] py-[8px]":item.current === true
                            }
                        )}
                        >
                        {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isOpen && (
                <div className="sm:hidden px-2">
                    <div className="py-4 items-center space-x-7">
                        {navigationItems.map((item) => (
                            <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                                "text-gray-500 hover:text-gray-900 transition duration-150", {
                                    "bg-gray-100 rounded-md text-gray-900 px-[12px] py-[8px]":item.current === true
                                }
                            )}
                            >
                            {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
