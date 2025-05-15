import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"

export const AppRouter = () => {
    return (
        <Suspense fallback>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Suspense>
    )
}
