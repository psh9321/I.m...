import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseFormPageView from './views/UseForm'
import FormProviderPageView from './views/FormProvider'
import { NavList } from './NavList'
import UseControllerPageView from './views/UseController'
import UseformStatePageView from './views/UseFormState'

function App() {

  return (
    <BrowserRouter>
    <main className='mt-[20px] ml-[20px]'>
        <p className='mb-[10px] text-[1.6rem] font-bold'>react-hook-form / zod</p>
        <NavList/>
        <Routes>
          <Route index element={<UseFormPageView/>} />  
          <Route path='/formProvider' element={<FormProviderPageView/>} />
          <Route path='/useController' element={<UseControllerPageView/>} />
          <Route path='/useFormState' element={<UseformStatePageView/>} />
        </Routes>  
    </main>

      
    </BrowserRouter>
  )
}

export default App
