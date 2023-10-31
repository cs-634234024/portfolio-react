
import LeftSection from "./sections/mainSection/LeftSection";
import RightSection from "./sections/mainSection/RightSection";

function App() {
  return (
    <div className="max-w-5xl mt-10 mx-auto ">
      <div className="grid grid-cols-[40%_60%] gap-5 ">
        <LeftSection/>
        <RightSection/>
      </div>
    </div>
  );
}

export default App;
