import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {

    return (
        <Routes>



            <Route path="*" element={<h1>404... D:</h1>} />

        </Routes>
    )
}

export default AppRoutes