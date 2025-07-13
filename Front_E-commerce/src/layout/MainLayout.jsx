import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function MainLayout() {
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
