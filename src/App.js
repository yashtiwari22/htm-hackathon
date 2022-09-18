import "./App.css"
import Homepage from "../src/components/Homepage"
import Issues from "../src/components/Issues"
import Blogs from "../src/components/Blogs";
import ContactUs from "../src/components/ContactUs";
import Footer from "./components/Footer";
import Tweets from "./components/Tweets"

function App() {
  return (
    <div className="app">
      <Homepage/>
      <Issues/>
      <Tweets/>
      <Blogs />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
