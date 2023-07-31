import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Posts from "./sections/Posts/Posts";

const App = () => {
    return (
        <div className="max-w-[1920px] mx-auto ">
          <Header/>
          <Posts/>
          <Footer/>
        </div>
    );
};

export default App;