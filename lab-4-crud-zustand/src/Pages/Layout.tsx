import { Link, Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <menu style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            width: "100%"
          }}>
            <Link to={'/'}>Home</Link>   
            <Link to={'/blog'}>Post</Link>   
            <Link to={'/blog/new'}>New Post</Link>   
          </menu>
        </nav>
      </header> 
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout