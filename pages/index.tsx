import { useState } from "react";

export default function IndexPage() {

  const [isloggedIn, setIsLoggedIn] = useState(null);

  return (
    <div className=' h-screen items-center justify-center flex flex-col '>
      <img className='animate-pulse w-40' src={'https://media.istockphoto.com/id/1138644570/vector/shopping-cart-icon-design-cart-icon-symbol-design.jpg?s=612x612&w=0&k=20&c=_lTGkSkJ6ha8ZNiKD8XWVtLNyTjQ74HCu_c4WFio27g='} />
    </div>
  )
}
