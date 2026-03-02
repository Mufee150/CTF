import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Congrats from "./pages/Congrats";
import Odysseus from "./pages/Odysseus";
import Penelope from "./pages/Penelope";
import Telemachus from "./pages/Telemachus";
import Athena from "./pages/Athena";
import Poseidon from "./pages/Poseidon";
import Zeus from "./pages/Zeus";
import Hermes from "./pages/Hermes";
import Calypso from "./pages/Calypso";
import Circe from "./pages/Circe";
import Sirens from "./pages/Sirens";
import Ares from "./pages/Ares";
import Hades from "./pages/Hades";
import Apollo from "./pages/Apollo";
import Hephaestus from "./pages/Hephaestus";
import Artemis from "./pages/Artemis";
import ProtectedChallenge from "./components/ProtectedChallenge";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/congrats" element={<Congrats />} />

      {/* Protected Challenges - users can only access their current challenge */}
      <Route path="/challenge/odysseus" element={<ProtectedChallenge challengeName="odysseus"><Odysseus /></ProtectedChallenge>} />
      <Route path="/challenge/penelope" element={<ProtectedChallenge challengeName="penelope"><Penelope /></ProtectedChallenge>} />
      <Route path="/challenge/telemachus" element={<ProtectedChallenge challengeName="telemachus"><Telemachus /></ProtectedChallenge>} />
      <Route path="/challenge/athena" element={<ProtectedChallenge challengeName="athena"><Athena /></ProtectedChallenge>} />
      <Route path="/challenge/poseidon" element={<ProtectedChallenge challengeName="poseidon"><Poseidon /></ProtectedChallenge>} />
      <Route path="/challenge/zeus" element={<ProtectedChallenge challengeName="zeus"><Zeus /></ProtectedChallenge>} />
      <Route path="/challenge/hermes" element={<ProtectedChallenge challengeName="hermes"><Hermes /></ProtectedChallenge>} />
      <Route path="/challenge/calypso" element={<ProtectedChallenge challengeName="calypso"><Calypso /></ProtectedChallenge>} />
      <Route path="/challenge/circe" element={<ProtectedChallenge challengeName="circe"><Circe /></ProtectedChallenge>} />
      <Route path="/challenge/sirens" element={<ProtectedChallenge challengeName="sirens"><Sirens /></ProtectedChallenge>} />
      <Route path="/challenge/ares" element={<ProtectedChallenge challengeName="ares"><Ares /></ProtectedChallenge>} />
      <Route path="/challenge/hades" element={<ProtectedChallenge challengeName="hades"><Hades /></ProtectedChallenge>} />
      <Route path="/challenge/apollo" element={<ProtectedChallenge challengeName="apollo"><Apollo /></ProtectedChallenge>} />
      <Route path="/challenge/hephaestus" element={<ProtectedChallenge challengeName="hephaestus"><Hephaestus /></ProtectedChallenge>} />
      <Route path="/challenge/artemis" element={<ProtectedChallenge challengeName="artemis"><Artemis /></ProtectedChallenge>} />

      {/* Numeric aliases - also protected */}
      <Route path="/challenge/1" element={<ProtectedChallenge challengeName="odysseus"><Odysseus /></ProtectedChallenge>} />
      <Route path="/challenge/2" element={<ProtectedChallenge challengeName="penelope"><Penelope /></ProtectedChallenge>} />
      <Route path="/challenge/3" element={<ProtectedChallenge challengeName="telemachus"><Telemachus /></ProtectedChallenge>} />
      <Route path="/challenge/4" element={<ProtectedChallenge challengeName="athena"><Athena /></ProtectedChallenge>} />
      <Route path="/challenge/5" element={<ProtectedChallenge challengeName="poseidon"><Poseidon /></ProtectedChallenge>} />
      <Route path="/challenge/6" element={<ProtectedChallenge challengeName="zeus"><Zeus /></ProtectedChallenge>} />
      <Route path="/challenge/7" element={<ProtectedChallenge challengeName="hermes"><Hermes /></ProtectedChallenge>} />
      <Route path="/challenge/8" element={<ProtectedChallenge challengeName="calypso"><Calypso /></ProtectedChallenge>} />
      <Route path="/challenge/9" element={<ProtectedChallenge challengeName="circe"><Circe /></ProtectedChallenge>} />
      <Route path="/challenge/10" element={<ProtectedChallenge challengeName="sirens"><Sirens /></ProtectedChallenge>} />
      <Route path="/challenge/11" element={<ProtectedChallenge challengeName="ares"><Ares /></ProtectedChallenge>} />
      <Route path="/challenge/12" element={<ProtectedChallenge challengeName="hades"><Hades /></ProtectedChallenge>} />
      <Route path="/challenge/13" element={<ProtectedChallenge challengeName="apollo"><Apollo /></ProtectedChallenge>} />
      <Route path="/challenge/14" element={<ProtectedChallenge challengeName="hephaestus"><Hephaestus /></ProtectedChallenge>} />
      <Route path="/challenge/15" element={<ProtectedChallenge challengeName="artemis"><Artemis /></ProtectedChallenge>} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
