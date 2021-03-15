import React from "react";
// import { List, ListItem, ListItemText } from "@material-ui/core";
var value = 0;
var value1 = 0;
function Showresult(props) {
  return (
    
    // <div className="container">
    //   <div className="row">
       

    //     <div className="col-sm">
    //       {props.pass.map((item) => {
    //         value1 =props.pass1
    //                  .filter((car) => {
    //                   return car.CarrierId === item.OutboundLeg.CarrierIds[0];
    //               })
    //                 .map((carrier) => carrier.Name)
    //                 return value1
    //       })}
    //     </div>

      
    //       {props.pass.map((item) => {
    //         return  <div>
    //           {item.MinPrice} 
           
    //         </div>
    //       })}
        

        

       
    //     {/* value1= props.pass1
    //           //           .filter((car) => {
    //           //         return car.CarrierId === item.OutboundLeg.CarrierIds[0];
    //           //           })
    //           //          .map((carrier) => carrier.Name)
    //           //          return value1,value
    //           //  }) */}
    //   </div>
    // </div>

    // //  {/* <div class="row">
    // // {props.pass.map((item) => (
    // //   <div class="col-sm">
    // //       primary={item.MinPrice}
    // //       secondary={props.pass1
    // //         .filter((car) => {
    // //           return car.CarrierId === item.OutboundLeg.CarrierIds[0];
    // //         })
    // //         .map((carrier) => carrier.Name)}
    // //   </div>
    // // )} */}
  
<table class="table table-dark">
  <thead>
    <tr>
      
      <th scope="col">Flight Name</th>
      <th scope="col">Flight Price</th>
      <th scope="col">Flight Time</th>
      <th scope="col"></th>

      
    </tr>
  </thead>
  <tbody>
    {props.pass.map((item) => {
             value1 =props.pass1
                    .filter((car) => {
                      return car.CarrierId === item.OutboundLeg.CarrierIds[0];
                  })
                   .map((carrier) => carrier.Name)
                   return <tr>
                    
                      <td>{value1}</td>
                      <td>{item.MinPrice}</td>
                      <td></td>
                      <td><button type="button" class="btn btn-primary">Book</button></td>
                      </tr>
        })}

        
    
    
  </tbody>
</table>


  );
}

export default Showresult;
