import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./global.css"

import { UseQueryPageView } from "./views/UseQuery";
import { UseInfinityQuery } from "./views/UseInfinityQuery";

import { UseMutation } from "./views/UseMutation";
import { NavList } from "./NavList";

const queryclient = new QueryClient({
    defaultOptions : {
        queries : {
            staleTime : ((1000 * 60) * 60) * 24,
            gcTime : ((1000 * 60) * 60) * 1,
            // refetchOnMount: false,       // ✅ 마운트 시 재요청 막기
            refetchOnWindowFocus: false, // ✅ 포커스 시 재요청 막기
            retry : false,
        }
    }
})

function App() {

  return (
    <BrowserRouter>
      <NavList/>
      <main className="w-[450px] h-[500px] m-[10px] px-[20px] border rounded-[10px]">
        <QueryClientProvider client={queryclient}>
          <Routes>
            <Route index element={<UseInfinityQuery/>} />
            <Route path="/detail/:id" element={<UseQueryPageView/>} />
            <Route path="/add" element={<UseMutation/>} />
          </Routes>

          <ReactQueryDevtools/>
        </QueryClientProvider>
      </main>
    </BrowserRouter>
  )
}

export default App
