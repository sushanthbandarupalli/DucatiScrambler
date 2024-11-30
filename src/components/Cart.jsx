import React  from "react";
const Cart = () => {
  return (
    
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        class="tgs-cards"
        style={{
          marginBottom: "60px",
          width: "40%",
          border: "2px solid black",
          padding: "20px",
        }}
      >
        
            <article class="tgs-card">
              
              <div class="tgs-card--img-container">
                <img
                  style={{height:"280px",marginLeft:"200px"}}
                  src="./images/3.png"
                  alt="dark bike"
                  class="tgs-card--img"
                />
              </div>
              <p
                class="btn btn-yellow tgs-card--yellow-btn"
                style={{ width: "100px", height: "40px", cursor: "pointer" }}
 
              >
                Check Details
              </p>
            </article>
         
          
        
      </div>
      <div
        style={{
          width: "40%",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginBottom: "100px" }}>Total Price Details</h2>
        <h3>Price : 100000/-</h3>
        <h3>GST 18% : 18000/-</h3>
        <h2>Totat Price : 118000/-</h2>
        <button
          style={{
            width: "38%",
            height: "62px",
            fontSize: "16px",
            backgroundImage: "linear-gradient(to bottom, red, #c00)",
            fontWeight: "700",
            marginTop: "50px",
          }}
          
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
