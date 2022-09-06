import { Route, Routes } from "react-router-dom";
import { Dashboard, Events, Lessons, LoginPage, Profile, Rewards } from "./pages";
import Layout from './components/Layout'
import Layout2 from "./components/Layout2";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Layout2 />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
