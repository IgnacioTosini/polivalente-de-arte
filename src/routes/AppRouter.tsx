import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"
import { InstitutionalPage } from "../pages/InstitutionalPage/InstitutionalPage"
import { EspecialidadesPage } from "../pages/EspecialidadesPage/EspecialidadesPage"
import { GaleriaPage } from "../pages/GaleriaPage/GaleriaPage"
import { ContactoPage } from "../pages/ContactoPage/ContactoPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"

export const AppRouter = () => {
    return (
        <Suspense fallback>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/institucional" element={<InstitutionalPage />} />
                <Route path="/galeria" element={<GaleriaPage />} />
                <Route path="/especialidades" element={<EspecialidadesPage />} />
                <Route path="/contacto" element={<ContactoPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}
