import '@styles/global.css';
import Nav from '@Components/Nav';
import Provider from '@Components/Provider';

export const metadata={
    title:"SollydZAi",
    description:"Discover and Share AI Prompts"
}
const RootLayout = ( {children} ) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;