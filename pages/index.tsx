import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { checkSession, presistSessionData } from "@/redux/session/sessionSlice";

export default function IndexPage() {
  const { token } = useAppSelector(presistSessionData);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (token !== null) {
      router.push("/home")
    }
    else { router.push("/auth/login") }
    return () => { }
  }, [token])

  useEffect(() => {
    dispatch(checkSession());
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <img className='w-40 animate-pulse' src={'https://media.istockphoto.com/id/1138644570/vector/shopping-cart-icon-design-cart-icon-symbol-design.jpg?s=612x612&w=0&k=20&c=_lTGkSkJ6ha8ZNiKD8XWVtLNyTjQ74HCu_c4WFio27g='} />
    </div>
  )
}
