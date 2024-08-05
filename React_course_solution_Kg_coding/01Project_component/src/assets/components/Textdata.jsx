import React from 'react'

function Textdata({dataname,datatime}) {
  return (
    <div className=' mt-3 '>
       <div class="container text-center">
     
      <div class="row">
        <div class="col-6">{dataname}</div>
        <div class="col-4">{datatime}</div>
        <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
      </div>
    </div>
    </div>
  )
}

export default Textdata
