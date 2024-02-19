import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Homepage"
import FestivalsPage from "../pages/FestivalsPage"
import FestivalDetails from "../pages/FestivalDetailsPage"
import Editions from "../pages/Edtions"
import EditionDetails from "../pages/EditionDetails"
import CreateFestivalPage from "../pages/CreateFestivalPage"
import NotFoundPage from "../pages/NotFoundPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/festivals/:festivalId" element={<FestivalDetails />} />
            <Route path="/editions" element={<Editions />} />
            <Route path="/editions/:editionId" element={<EditionDetails />} />
            {/* <Route path="/editions/:id" element={<EditionDetails />} /> */}
            <Route path="/create" element={<CreateFestivalPage />} />
            {/* <Route path="/editions/:editionId" element={<EditionDetails />} /> */}

            {/* <Route path="/create" element={<CreateFestivalPage />} /> */}


            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}

export default AppRoutes