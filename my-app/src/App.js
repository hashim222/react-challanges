import css from "./App.module.css";
import ContentAPIHooks from "./components/ContentAPIHooks";
// import ContentAPI from "./components/ContentAPI";
// import HookPractice from "./components/HookPractice";
// import ContentHooks from "./components/ContentHooks";
// import Sidebar from "./components/Sidebar";
// import NavBarForm from "./components/NavBarForm";
// import Content from "./components/Content";
// import NavBarSimple from "./components/NavBarSimple";


function App() {
  return (
    <div className={css.App}>
      <ContentAPIHooks />
      {/* <ContentAPI /> */}
      {/* <HookPractice /> */}
      {/* Add your components here */}
      {/* <ContentHooks />
      <NavBarForm />
      <Sidebar /> */}
      {/* <Content /> */}
    </div>
  );
}

export default App;