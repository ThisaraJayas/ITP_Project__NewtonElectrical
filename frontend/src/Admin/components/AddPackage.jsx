import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
 import "../adminStyles/UpdateUser.css";
import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default function AddPackage() {
  const [open, setOpen] = useState(false);
  const [packageName, setPackageName] = useState("")
  const [packageId, setPackageId] = useState("")
  const [description, setDescription] = useState("")
  const [service1, setService1] = useState("")
  const [service2, setService2] = useState("")
  const [service3, setService3] = useState("")
  const [service4, setService4] = useState("")

  const [service1Price, setService1Price] = useState("")
  const [service2Price, setService2Price] = useState("")
  const [service3Price, setService3Price] = useState("")
  const [service4Price, setService4Price] = useState("")

  const [packagePrice, setPackagePrice] = useState("")
  const [monthlyPrice, setMonthlyPrice] = useState("")
  const [annualPrice, setAnnualPrice] = useState("")

  const [discountMonthly, setDiscountMonthly] = useState(1)
  const [discountAnnual, setDiscountAnnual] = useState(1)

  // const [discountMonthlyPrice, setDiscountMonthlyPrice] = useState("")
  // const [discountAnnualPrice, setDiscountAnnualPrice] = useState("")


  useEffect(() => {
    // Recalculate annual price when monthly price changes
    if (monthlyPrice) {
      setAnnualPrice(parseFloat(monthlyPrice) * 12);
    }
  }, [monthlyPrice]);

  const handleAddPackage = async (e) => {
    e.preventDefault();
    // if (!packageName || !packageId || !description || !service1 || !service2 || !service1Price || !service2Price || !monthlyPrice || !annualPrice || !discountMonthly || !discountAnnual) {
    //   alert("Please fill in all required fields.");
    //   return;
    // }
  
    const packageData = {
      packageName,
      packageId,
      description,
      service1,
      service2,
      service3,
      service4,
      // service1Price: parseFloat(service1Price),
      // service2Price: parseFloat(service2Price),
      // service3Price: parseFloat(service3Price),
      // service4Price: parseFloat(service4Price),
      monthlyPrice: parseFloat(monthlyPrice),
      annualPrice: parseFloat(annualPrice),
      // discountMonthly: parseFloat(discountMonthly),
      // discountAnnual: parseFloat(discountAnnual),
    };
  
    try {
      const result = await axios.post(
        "http://localhost:3000/package/packages",
        packageData
      );
      console.log(result);
      handleClose();
    } catch (error) {
      console.error("Error adding package:", error);
    }
  };
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          style={{ width: "200px", maxHeight: "30px" }}
          className="roleBtn"
          onClick={handleClickOpen}
        >
          Add Package
        </Button>
      </ThemeProvider>

      <Dialog open={open} onClose={handleClose}>
        <div className="formContent" style={{width:"500px"}}>
          <form onSubmit={handleAddPackage}>
            <DialogContent>
              <div className="title">
                <h2>Add Package</h2>
              </div>

              <div className="packageDetails">
                
              <div className="packageDetails">
                  <div className="inputBox">
                    <span className="details">Package Name</span>
                    <input
                      type="text"
                      placeholder="Enter package name"
                      value={packageName}
                      onChange={(e) => setPackageName(e.target.value)}
                    />
                  </div>
                  <div className="inputBox">
                    <span className="details">Package ID</span>
                    <input
                      type="text"
                      placeholder="Enter package ID"
                      value={packageId}
                      onChange={(e) => setPackageId(e.target.value)}
                    />
                  </div>
                  <div className="inputBox">
                    <span className="details">Description</span>
                    <input
                      type="text"
                      placeholder="Enter package description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
            
                  
                  <div className="inputBox">
                    <span className="details">Service 1</span>
                    
                    <input
                      type="text"
                      placeholder="Enter service price"
                      value={service1Price}
                      onChange={(e) => setService1Price(e.target.value)}
                    />
                  </div>
                  <div className="inputBox">
                    <span className="details">Service 2</span>
                    <input
                      type="text"
                      placeholder="Enter service name"
                      value={service2}
                      onChange={(e) => setService2(e.target.value)}
                    />
                    
                  </div>
                  <div className="inputBox">
                    <span className="details">Service 3</span>
                    <input
                      type="text"
                      placeholder="Enter service name"
                      value={service3}
                      onChange={(e) => setService3(e.target.value)}
                    />
                   
                  </div>
                  <div className="inputBox">
                    <span className="details">Service 4</span>
                    <input
                      type="text"
                      placeholder="Enter service name"
                      value={service4}
                      onChange={(e) => setService4(e.target.value)}
                    />
                    
                  </div>
                </div>

                <div className="inputBox">
                  <span className="details">Monthly Price</span>
                  <input
                    type="text"
                    placeholder="Enter monthly price"
                    value={monthlyPrice}
                    onChange={(e) => setMonthlyPrice(e.target.value)}
                  />
                </div>
                <div className="inputBox">
                  <span className="details">Annual Price</span>
                  <input
                    type="text"
                    placeholder="Enter annual price"
                    value={annualPrice}
                    readOnly
                  />
                </div>
                {/* <div className="inputBox">
                  <span className="details">Discount Monthly</span>
                  <input
                    type="text"
                    placeholder="Enter monthly discount"
                    value={discountMonthly}
                    onChange={(e) => setDiscountMonthly(e.target.value)}
                  />
                </div>
                <div className="inputBox">
                  <span className="details">Discount Annual</span>
                  <input
                    type="text"
                    placeholder="Enter annual discount"
                    value={discountAnnual}
                    onChange={(e) => setDiscountAnnual(e.target.value)}
                  />
                </div> */}
              </div>
            </DialogContent>
            <DialogActions style={{ marginBottom: "10%" }}>
              <Button variant="contained" type="submit">
                Add
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </form>
        </div>
      </Dialog>
    </React.Fragment>
  );
}