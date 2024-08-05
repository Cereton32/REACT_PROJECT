import Textdata from "./assets/components/Textdata";
import Textfiled from "./assets/components/Textfiled";

function App(){
  return<>
  <center className=" mt-5"> <h1>Todo-App</h1>
  <Textfiled></Textfiled>
  <Textdata dataname={"Study React-Javascript"} datatime={"31-agu-2002"}></Textdata>
    <Textdata dataname={"Cooking the food at "} datatime={"31-agu-2024"}></Textdata>
  </center>

  </>

}

export default App;