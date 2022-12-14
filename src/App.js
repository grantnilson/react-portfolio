import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./components/Theme";
import GlobalStyle from "./globalStyles";

//components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation(); 
  return (
    <>
    <GlobalStyle/>

    <ThemeProvider theme = {LightTheme}>
    <AnimatePresence exitBeforeEnter >
      
        <Switch location={location} key={location.pathname}>
          <Route exact path = "/main" component ={Main}/>
          <Route exact path = "/about" component ={AboutPage}/>
          <Route exact path = "/blog" component ={BlogPage}/>
          <Route exact path = "/skills" component ={MySkillsPage}/>
          <Route exact path = "/work" component ={WorkPage}/>
        </Switch>
      
    </AnimatePresence>
    </ThemeProvider>
    </>
  )
    
}

export default App

