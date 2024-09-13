import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const MainLayout = ({children, title}) => {
  return (
    <div className='main-layout'>
        <Header/>
        <div className="">
          {title}
        </div>
        <main className='main'>{children}

        </main>
     
        <Footer/>
    </div>
  )
}
