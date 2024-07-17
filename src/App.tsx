import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "@/pages/index/index"
import BookmarkPage from '@/pages/bookmark/index'
import { RecoilRoot } from "recoil"


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MainPage />}></Route>
          <Route index path="/search/:id" element={<MainPage />}></Route>
          <Route index path="/bookmark" element={<BookmarkPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    
  )
}

export default App