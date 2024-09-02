import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidebar } from '../Sidebar'

export const UserLayout = ({title, children}) => {
  return (
    <div className='d-flex min-vh-100'>
        <div className="side-menu bg-dark text-light">
<Sidebar/>
        </div>
        <div className="right-menu w-100">
            <Header/>
            <div className="p-3">
                <h4>{title}</h4>
                <hr />
            </div>
            <main className='main'>
                {children}
            </main>
            <Footer/>
        </div>
    </div>
  )
}
