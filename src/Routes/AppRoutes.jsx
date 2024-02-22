import { Route, Routes } from "react-router-dom"

import HomePage from "../pages/HomePage/Homepage"

import FestivalsPage from "../pages/FestivalsPage/FestivalsPage"
import EditionsPage from "../pages/EditionsPage/EditionsPage"

import FestivalDetailsPage from "../pages/FestivalDetailsPage/FestivalDetailsPage"
import EditionDetailsPage from "../pages/EditionDetailsPage/EditionDetailsPage"

import CreateFestivalPage from "../pages/CreateFestivalPage/CreateFestivalPage"
import CreateEditionPage from "../pages/CreateEditionPage/CreateEditionPage"

import EditFestivalPage from "../pages/EditFestivalPage/EditFestivalPage"
import EditEditionPage from "../pages/EditEditionPage/EditEditionPage"

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/editions" element={<EditionsPage />} />

            <Route path="/festivals/:festivalId" element={<FestivalDetailsPage />} />
            <Route path="/editions/:editionId" element={<EditionDetailsPage />} />

            <Route path="/create-festival" element={<CreateFestivalPage />} />
            <Route path="/create-edition" element={<CreateEditionPage />} />

            <Route path="/festivals/:festivalId/edit" element={<EditFestivalPage />} />
            <Route path="/editions/:editionId/edit" element={<EditEditionPage />} />


            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}

export default AppRoutes