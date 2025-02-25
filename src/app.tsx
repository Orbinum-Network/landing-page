import { BrowserRouter, Route, Routes } from "react-router";
import { CareersPage, ContactPage, ErrorPage, HomePage, PrivacyPolicyPage, RoadmapPage, TermsPage, TokenomicsPage } from './pages';
import { NavFooLayout } from './layout';
import { ScrollToTop } from "./components/common";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<NavFooLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/roadmap" element={<RoadmapPage />} />
                    <Route path="/tokenomics" element={<TokenomicsPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/careers/:id" element={<CareersPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;