import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { cartData, decreaseQuantity, removeCartItem, updateQuantity } from '@/redux/cart/cartSlice';

export default function Cart({ open, setOpen }: any) {
    const { totalAmount } = useAppSelector(cartData);
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
                                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                                    <div className="flex flex-col h-full overflow-y-scroll bg-white dark:bg-gray-800 shadow-xl">
                                        <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                                            <CartHeader setOpen={setOpen} />
                                            <CartItems />
                                        </div>
                                        <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>Rs {totalAmount?.toFixed(2)}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6">
                                                <a href="#" className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"  > Checkout</a>
                                            </div>
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

const CartHeader = ({ setOpen }: any) => {
    return <div className="flex items-start justify-between">
        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
        <div className="flex items-center ml-3 h-7">
            <button type="button" onClick={() => setOpen(false)} className="p-2 -m-2 text-gray-400 hover:text-gray-500" >
                <span className="sr-only">Close panel</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
        </div>
    </div>
}

const CartItems = () => {
    const dispatch = useAppDispatch();
    const { cartItems } = useAppSelector(cartData);

    return <div className="mt-8">
        <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems.length === 0 ?
                    <div className='flex items-start justify-center bg-red-400'>
                        <img className='m-auto' src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png" />
                    </div>
                    : cartItems.map((product: any, index: number) => (
                        <li key={product?.id} className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                <img src={product?.image} alt={product?.imageAlt} className="object-contain object-center w-full h-full" />
                            </div>
                            <div className="flex flex-col flex-1 ml-4">
                                <div>
                                    <div className="grid w-full grid-cols-3 text-base font-medium text-gray-900">
                                        <span className='col-span-2 text-sm line-clamp-2' >{product?.title}</span>
                                        <p className="flex flex-row-reverse">Rs. {product?.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between flex-1 text-sm">
                                    <div className='flex items-center justify-center gap-3 transition-all'>
                                        {product?.quantity >= 2 && <button className="px-2 text-xl font-bold hover:scale-110" onClick={() => { dispatch(decreaseQuantity(product.id)) }}>-</button>}
                                        <p className="text-gray-500">Qty {product?.quantity}</p>
                                        <button className="px-2 text-xl font-bold hover:scale-110" onClick={() => { dispatch(updateQuantity(product.id)) }}>+</button>
                                    </div>
                                    <div className="flex">
                                        <button onClick={() => { dispatch(removeCartItem(product.id)) }} type="button" className="font-medium text-indigo-600 hover:text-indigo-500"  > Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    </div>
}