import '@styles/globsl.css';


export const metadata={
    title:"Promptopia",
    description:"Discover and Share AI Prompts"
}
const RootLayout = () => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;