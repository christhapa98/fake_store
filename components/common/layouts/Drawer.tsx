import React, { Fragment } from 'react'
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react'

import { useAppDispatch } from '@/redux/store';
import { logout } from '@/redux/session/sessionSlice';

export default function Drawer({ open, setOpen }: any) {
    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="w-[20vw] max-w-md pointer-events-auto ">
                                    <div className="flex flex-col h-full p-5 overflow-y-scroll bg-white shadow-xl">
                                        <div className="mt-6">
                                            <a onClick={() => {
                                                dispatch(logout());
                                                router.replace("/")
                                            }} href="#" className="flex items-center justify-center px-6 py-1 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"  >
                                                Logout
                                            </a>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
