import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"
import { InstitutionalPage } from "../pages/InstitutionalPage/InstitutionalPage"

export const AppRouter = () => {
    return (
        <Suspense fallback>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/institucional" element={<InstitutionalPage />} />
            </Routes>
        </Suspense>
    )
}
