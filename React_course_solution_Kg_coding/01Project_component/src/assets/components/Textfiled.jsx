import React from "react";

function Textfiled() {
  return (
    <div class="container text-center">
     
      <div class="row">
        <div class="col-6"><input type="text" placeholder="Enter your text here"></input></div>
        <div class="col-4"><input type="date"/></div>
        <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
      </div>
    </div>
  );
}

export default Textfiled;
