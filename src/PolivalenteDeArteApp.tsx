import { Header } from "./components/Header/Header"
import { AppRouter } from "./routes/AppRouter"
import { Footer } from "./components/Footer/Footer"

export const PolivalenteDeArteApp = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

