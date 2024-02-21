import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/Homepage"
import FestivalsPage from "../pages/FestivalsPage/FestivalsPage"
import FestivalDetails from "../pages/FestivalDetailsPage/FestivalDetailsPage"
import EditionsPage from "../pages/EditionsPage/EditionsPage"
import EditionDetailsPage from "../pages/EditionDetailsPage/EditionDetailsPage"
import CreateFestivalPage from "../pages/CreateFestivalPage/CreateFestivalPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import EditFestivalPage from "../pages/EditFestivalPage/EditFestivalPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/festivals/:festivalId" element={<FestivalDetails />} />
            <Route path="/editions" element={<EditionsPage />} />
            <Route path="/editions/:editionId" element={<EditionDetailsPage />} />

            <Route path="/create" element={<CreateFestivalPage />} />
            <Route path="/festivals/:festivalId/edit" element={<EditFestivalPage />} />

            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}

export default AppRoutes