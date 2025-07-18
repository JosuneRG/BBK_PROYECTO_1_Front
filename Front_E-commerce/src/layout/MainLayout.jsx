import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"


const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}


export default MainLayout;
