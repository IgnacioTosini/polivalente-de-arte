import { Header } from "./components/Header/Header"
import { AppRouter } from "./routes/AppRouter"
import { Footer } from "./components/Footer/Footer"
import { PageHeader } from "./components/PageHeader/PageHeader"
import { useLocation } from "react-router-dom"

const pageHeaders: Record<string, { title: string; subtitle: string }> = {
  '/institucional': { title: 'Institucional', subtitle: 'Conoce más sobre nuestra escuela, su historia y autoridades' },
  '/galeria': { title: 'Galería', subtitle: 'Trabajos de nuestros estudiantes y eventos destacados' },
  '/especialidades': { title: 'Especialidades', subtitle: 'Conoce nuestras áreas de formación artística' },
  '/contacto': { title: 'Contacto', subtitle: 'Estamos aquí para responder tus consultas' },
}

export const PolivalenteDeArteApp = () => {
  const location = useLocation()
  const path = location.pathname
  const isnotInicio = path !== '/'
  const headerData = pageHeaders[path]

  return (
    <>
      <Header />
      {isnotInicio && headerData && (
        <PageHeader title={headerData.title} subtitle={headerData.subtitle} />
      )}
      <AppRouter />
      <Footer />
    </>
  )
}