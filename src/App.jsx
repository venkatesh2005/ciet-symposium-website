import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Developers from "./pages/Developers";
import Committee from "./pages/Committee";  
import StudentCommittee from "./pages/StudentCommittee";
import StaffCommittee from "./pages/StaffCommittee";

// Department Pages
import CSE from "./pages/departments/cse/cse";
import IT from "./pages/departments/it/it";
import AIDS from "./pages/departments/ai_ds/ai_ds";
import EEE from "./pages/departments/eee/eee";
import ECE from "./pages/departments/ece/ece";
import CIVIL from "./pages/departments/civil/civil";
import MECH from "./pages/departments/mech/mech";
import MCT from "./pages/departments/mct/mct";
import MBA from "./pages/departments/mba/mba";

// CSE Events
import TechnicalEventsCSE from "./pages/departments/cse/events/TechnicalEvents";
import NonTechnicalEventsCSE from "./pages/departments/cse/events/NonTechnicalEvents";
import FlagshipEventsCSE from "./pages/departments/cse/events/FlagshipEvents";

// IT Events
import TechnicalEventsIT from "./pages/departments/it/events/TechnicalEvents";
import NonTechnicalEventsIT from "./pages/departments/it/events/NonTechnicalEvents";
import FlagshipEventsIT from "./pages/departments/it/events/FlagshipEvents";

// AI & DS Events
import TechnicalEventsAIDS from "./pages/departments/ai_ds/events/TechnicalEvents";
import NonTechnicalEventsAIDS from "./pages/departments/ai_ds/events/NonTechnicalEvents";
import FlagshipEventsAIDS from "./pages/departments/ai_ds/events/FlagshipEvents";


// // EEE Events
import TechnicalEventsEEE from "./pages/departments/eee/events/TechnicalEvents";
import NonTechnicalEventsEEE from "./pages/departments/eee/events/NonTechnicalEvents";
import FlagshipEventsEEE from "./pages/departments/eee/events/FlagshipEvents";

// ECE Events
import TechnicalEventsECE from "./pages/departments/ece/events/TechnicalEvents";
import NonTechnicalEventsECE from "./pages/departments/ece/events/NonTechnicalEvents";
import FlagshipEventsECE from "./pages/departments/ece/events/FlagshipEvents";


// CIVIL Events
import TechnicalEventsCIVIL from "./pages/departments/civil/events/TechnicalEvents";
import NonTechnicalEventsCIVIL from "./pages/departments/civil/events/NonTechnicalEvents";
import FlagshipEventsCIVIL from "./pages/departments/civil/events/FlagshipEvents";


// // MECH Events
import TechnicalEventsMECH from "./pages/departments/mech/events/TechnicalEvents";
import NonTechnicalEventsMECH from "./pages/departments/mech/events/NonTechnicalEvents";
import FlagshipEventsMECH from "./pages/departments/mech/events/FlagshipEvents";


// MCT Events
import TechnicalEventsMCT from "./pages/departments/mct/events/TechnicalEvents";
import NonTechnicalEventsMCT from "./pages/departments/mct/events/NonTechnicalEvents";
import FlagshipEventsMCT from "./pages/departments/mct/events/FlagshipEvents";

// // MBA Events
import TechnicalEventsMBA from "./pages/departments/mba/events/TechnicalEvents";
import NonTechnicalEventsMBA from "./pages/departments/mba/events/NonTechnicalEvents";
import FlagshipEventsMBA from "./pages/departments/mba/events/FlagshipEvents";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/departments/cse" element={<CSE />} />
            <Route path="/departments/it" element={<IT />} />
            <Route path="/departments/ai_ds" element={<AIDS />} />
            <Route path="/departments/eee" element={<EEE />} />
            <Route path="/departments/mct" element={<MCT />} />
            <Route path="/departments/civil" element={<CIVIL />} />
            <Route path="/departments/ece" element={<ECE />} />
            <Route path="/departments/mech" element={<MECH />} />
            <Route path="/departments/mba" element={<MBA />} />

           {/* ✅ Committee Sections */}
           <Route path="/committee" element={<Committee />} /> {/* Optional */}
            <Route path="/committee/student" element={<StudentCommittee />} />
            <Route path="/committee/staff" element={<StaffCommittee />} />

            {/* CSE Department Event Routing */}
            <Route path="/events/cse/technical/:eventId" element={<TechnicalEventsCSE />} />
            <Route path="/events/cse/nontechnical/:eventId" element={<NonTechnicalEventsCSE />} />
            <Route path="/events/cse/flagship/:eventId" element={<FlagshipEventsCSE />} />

            {/* IT Department Event Routing */}
            <Route path="/events/it/technical/:eventId" element={<TechnicalEventsIT />} />
            <Route path="/events/it/nontechnical/:eventId" element={<NonTechnicalEventsIT />} />
            <Route path="/events/it/flagship/:eventId" element={<FlagshipEventsIT />} />

            {/* AI & DS Department Event Routing */}
            <Route path="/events/ai_ds/technical/:eventId" element={<TechnicalEventsAIDS />} />
            <Route path="/events/ai_ds/nontechnical/:eventId" element={<NonTechnicalEventsAIDS />} />
            <Route path="/events/ai_ds/flagship/:eventId" element={<FlagshipEventsAIDS />} />


            {/* EEE Department Event Routing */}
            <Route path="/events/eee/technical/:eventId" element={<TechnicalEventsEEE />} />
            <Route path="/events/eee/nontechnical/:eventId" element={<NonTechnicalEventsEEE />} />
            <Route path="/events/eee/flagship/:eventId" element={<FlagshipEventsEEE />} />


            {/* ECE Department Event Routing */}
            <Route path="/events/ece/technical/:eventId" element={<TechnicalEventsECE />} />
            <Route path="/events/ece/nontechnical/:eventId" element={<NonTechnicalEventsECE />} />
            <Route path="/events/ece/flagship/:eventId" element={<FlagshipEventsECE />} />

            {/* CIVIL Department Event Routing */}
            <Route path="/events/civil/technical/:eventId" element={<TechnicalEventsCIVIL />} />
            <Route path="/events/civil/nontechnical/:eventId" element={<NonTechnicalEventsCIVIL />} />
            <Route path="/events/civil/flagship/:eventId" element={<FlagshipEventsCIVIL />} />


            {/* MECH Department Event Routing */}
            <Route path="/events/mech/technical/:eventId" element={<TechnicalEventsMECH />} />
            <Route path="/events/mech/nontechnical/:eventId" element={<NonTechnicalEventsMECH />} />
            <Route path="/events/mech/flagship/:eventId" element={<FlagshipEventsMECH />} />


            {/* MCT Department Event Routing */}
            <Route path="/events/mct/technical/:eventId" element={<TechnicalEventsMCT />} />
            <Route path="/events/mct/nontechnical/:eventId" element={<NonTechnicalEventsMCT />} />
            <Route path="/events/mct/flagship/:eventId" element={<FlagshipEventsMCT />} />

            {/* MBA Department Event Routing */}
            <Route path="/events/mba/technical/:eventId" element={<TechnicalEventsMBA />} />
            <Route path="/events/mba/nontechnical/:eventId" element={<NonTechnicalEventsMBA />} />
            <Route path="/events/mba/flagship/:eventId" element={<FlagshipEventsMBA />} />

        </Routes>
    );
};

export default App;
