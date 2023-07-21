import React, { Fragment } from 'react'
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react'

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { logout, presistSessionData } from '@/redux/session/sessionSlice';

export default function Drawer({ open, setOpen }: any) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { session } = useAppSelector(presistSessionData);

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
                                        <div className="flex flex-col items-center justify-center mt-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-36 h-36">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <p className='mb-2 text-2xl font-bold uppercase'>{session?.user}</p>
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
