 import React from "react";

 const ApprovalCard = props => {

     return (
         <div style={Styles.approvalBox} > {props.children} </div>
     )
 }

 const Styles ={
     approvalBox: {border: "1px solid #ededed", width: "300px", borderRadius: "20px", color: "red", backgroundColor: "#efefef", padding: "10px", marginTop: "20px"},
 }

 export default ApprovalCard;