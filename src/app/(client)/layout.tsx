import React from 'react'
import Footer from './_components/footer'
import Header from './_components/header'

const ClientLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section>
        <Header />
        <main className='min-h-screen w-auto'>
            {children}
        </main>
        <Footer />
    </section>
  )
}

export default ClientLayout