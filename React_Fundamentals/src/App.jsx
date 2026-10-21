import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greetings from './Components/Greetings'
import UserCard from './Components/UserCard'
import Button from './Components/Button'
import Counter from './Components/Counter'
import Toggle from './Components/Toggle'
import Tip_Calculator from './Components/Tip_Calculator'
import ThemeSwitcher from './Components/ThemeSwitcher'
import Login from './Components/Login'
import ControlledForm from './Components/ControlledForm'
import TodoList from './Components/TodoList'
import Products from './Components/Products'
import ExpenseTracker from './Components/ExpenseTracker'

function App() {
  const [count, setCount] = useState(0)
  function handleSave() {
        alert("Saved Sucessfully")
      }
      function handleDelete() {
        alert("Deleted Sucessfully")
      }

  return (
    <>
    {/*
      <section id="center">
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
      <section id="spacer"></section>
      */}
      <Greetings name="Sumithra"/><br />
      <UserCard name="Mark" email_id="mark@gmail.com" role="Associate"/> <br />
      <UserCard name="Jenela" email_id="jenela@gmail.com" role="Analyst"/> <br />
      <UserCard name="Peter" email_id="peter@gmail.com" role="Manager"/> <br />
      <Button  label="Save" variant="primary" onClick={handleSave} /> <br />
      <Button  label="Delete" variant="danger" onClick={handleDelete} /> <br />
      <Counter/> <br />
      <Toggle/> <br />
      <Tip_Calculator/> <br />
      <ThemeSwitcher/> <br />
      <Login/> <br />
      <ControlledForm/> <br />
      <TodoList/> <br />
      <Products/> <br />
      <ExpenseTracker/> <br />
    </>
  )
}

export default App
