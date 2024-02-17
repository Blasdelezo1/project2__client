import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Homepage"
import Festivals from "../pages/Festivals"
import FestivalDetails from "../pages/FestivalDetails"
import Editions from "../pages/Edtions"
import EditionsDetails from "../pages/EditionDetails"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/festivals/:festivalId" element={<FestivalDetails />} />
            <Route path="/editions" element={<Editions />} />
            <Route path="/editions/:editionId" element={<EditionsDetails />} />

            <Route path="*" element={<h1>404... D:</h1>} />

        </Routes>
    )
}

export default AppRoutes