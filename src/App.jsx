import Navbar from "./component/Navbar";
import ImageSection from "./component/ImageSection";
import TextGroup from "./component/TextGroup";

function App() {
  return (
    <div className=" w-[100%] h-[100vh] sm:block lg:flex overflow-hidden">
      <div className="w-[100%] lg:w-[55%] ">
        <Navbar />
        <TextGroup/>
      </div>
      <div className="lg:w-[55%] lg:h-[100vh] sm:flex sm:w-[100%] sm:h-[50%]">
          <ImageSection/>
      </div>
      <div className="hidden lg:flex  w-[10%] h-[100vh] bg-transparent items-center absolute left-0 right-0 m-auto">
      <svg className="h-full " fill="white" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
      </div>
    </div>
    
  );
}

export default App;

