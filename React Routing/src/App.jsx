import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { Routes,Route } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Layout from './Components/Layout'
import UserId from './Components/UserId'
import Login from './Components/Login'
import Search from './Components/Search'
// import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Settings from './Components/Settings'
import { lazy, Suspense } from 'react'
import FetchUsers from './Components/FetchUsers'
import PostLists from './Components/PostLists'
import PostListDetails from './Components/PostListDetails'
import AxiosUsers from './Components/AxiosUsers'
import Todos from './Components/Todos'
import Users from './Components/Users'
import UserDetails from './Components/UserDetails'
import DocumentTitle from './Hooks/DocumentTitle'
import Windowsize from './Hooks/Windowsize'
import StopWatch from './Hooks/StopWatch'
import Auto_Fetch from './Hooks/Auto_Fetch'
import Auto_Focus from './Hooks/Auto_Focus'
import PreviousValue from './Hooks/PreviousValue'
import Timer from './Hooks/Timer'
import ThemePage from './Hooks/ThemePage'
import LoginPage from './Hooks/LoginPage'
import ProfilePage from './Hooks/ProfilePage'
import ProtectedRoute from './Hooks/ProctectedRoute'
//import Counter from './Hooks/Counter'
import Todolist_Reducer from './Hooks/Todolist_Reducer'
import Filteredlist_useMemo from './Hooks/Filteredlist_useMemo'
import Parent from './Hooks/MemoizedChild'
import NotesApp from './Hooks/NotesApp'
import Theme from './CustomHooks/Theme'
import Counter from './CustomHooks/Counter'
import PersistedTodoList from './CustomHooks/PersistedTodoList'
import NotesApp2 from './CustomHooks/Peristant _Notes_search'


// const Dashboard=lazy(()=>import("./Components/Dashboard"));

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/*<section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>*/}
      
      {/*<Navbar/>*/}
       {/* layout routing */}
      {/* <Routes>
        
        {/* <Route path="/" element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="search" element={<Search/>}/>
        </Route>
        <Route path='/user/:id' element={<UserId/>}/>
        <Route path='/dashboard' element={ 
          <Suspense fallback={<p>Loading Dashboard....</p>}>
            <Dashboard/>
        </Suspense>}>
        <Route path='profile' element={<Profile/>}/>
        <Route path='settings' element={<Settings/>}/>
        </Route>
      </Routes> */}
      {/* <FetchUsers/>
      <AxiosUsers/>
      <Todos/> */}
      {/* Mini project routes */}
      {/* <Routes>
        <Route path='/' element={<PostLists/>}></Route>
        <Route path='/posts/:id' element={<PostListDetails/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/users/:id' element={<UserDetails/>}></Route>
        <Route path='/todos' element={<Todos/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes> */}

      
      {/*  Hooks concepts */}


      {/* <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={
               <ProtectedRoute>
                    <ProfilePage />
                 </ProtectedRoute>
            } />
      </Routes>
      <DocumentTitle/>
      <Windowsize/>
      <StopWatch/>  
      <Auto_Fetch/>
      <Auto_Focus/>    
      <PreviousValue/>
      <Timer/>
      <ThemePage/>
      <Counter/>
      <Todolist_Reducer/>
      <Filteredlist_useMemo/>
      <Parent/> */}

     {/*  Mini Project */}

     {/* <NotesApp/> */}

     {/* Custom Hooks assignments */}

     <Counter/>
     <Theme/>
      <PersistedTodoList/>
      <NotesApp2/>
      

    </> 

  )
}

export default App
