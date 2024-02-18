import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Homepage"
import Festivals from "../pages/Festivals"
import FestivalDetails from "../pages/FestivalDetails"
import Editions from "../pages/Edtions"
import EditionDetails from "../pages/EditionDetails"
import CreateFestivalPage from "../pages/CreateFestivalPage"
import NotFoundPage from "../pages/NotFoundPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/festivals/:festivalId" element={<FestivalDetails />} />
            <Route path="/editions" element={<Editions />} />
<<<<<<< HEAD
            <Route path="/editions/:editionId" element={<EditionsDetails />} />
            <Route path="/editions/:id" element={<EditionsDetails />} />
            <Route path="/create" element={<CreateFestivalPage />} />
=======
            <Route path="/editions/:editionId" element={<EditionDetails />} />
>>>>>>> 93c4e26b7d43eecbb07adfab3784cc7d2bc756fa

            <Route path="/create" element={<CreateFestivalPage />} />


            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}

export default AppRoutes