// import React from 'react'

import type { ReactNode } from "react";

type HeaderProps = {
    image: {
        src : string;
        alt: string;
    };
    children: ReactNode
}

const Header = ({image, children}: HeaderProps) => {
  return (
    <div>
        <img className="image" src={image.src} alt={image.alt}/>
        {children}
    </div>
  )
}

export default Header