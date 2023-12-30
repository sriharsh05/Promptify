import '@styles/globals.css'

export const metadata = {
    title: 'Promptify',
    description: 'DIscover and share AI propmts',
}
const RootLayout = ({children}) => {
  return (
   <html>
    <body>
        <div className ="main">
            <div className='gradient'/>
        </div>

        <main className='app'>
            {children}
        </main>
    </body>
   </html>
  )
}

export default RootLayout