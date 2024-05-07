import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import DialogContentText from "@mui/material/DialogContentText";
import "../adminStyles/UpdateUser.css";
import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";


const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default function UpdatePackage({ package_id }) {
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


  useEffect(() => {
    // Recalculate annual price when monthly price changes
    if (monthlyPrice) {
      setAnnualPrice(parseFloat(monthlyPrice) * 12);
    }
  }, [monthlyPrice]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/package/packages/${package_id}`
        );
        console.log("API Response:", response.data); // Log the response data
        const packageData = response.data;
        setPackageName(packageData.readPackage.packageName);
        setPackageId(packageData.readPackage.packageId);
        setDescription(packageData.readPackage.description);
        setService1(packageData.readPackage.service1);
        setService2(packageData.readPackage.service2);
        setService3(packageData.readPackage.service3);
        setService4(packageData.readPackage.service4);
        setService1Price(packageData.readPackage.service1Price);
        setService2Price(packageData.readPackage.service2Price);
        setService3Price(packageData.readPackage.service3Price);
        setService4Price(packageData.readPackage.service4Price);
        setPackagePrice(packageData.readPackage.packagePrice);
        setMonthlyPrice(packageData.readPackage.monthlyPrice);
        setAnnualPrice(packageData.readPackage.annualPrice);
        setDiscountMonthly(packageData.readPackage.discountMonthly);
        setDiscountAnnual(packageData.readPackage.discountAnnual);
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };

    fetchData(); // Call fetchData when component mounts or packageId changes
  }, [package_id]); // Dependency array ensures useEffect runs when packageId changes

  console.log(package_id)

const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`http://localhost:3000/package/packages/${package_id}`, {
      packageName,
      packageId,
      description,
      service1,
      service2,
      service3,
      service4,
      service1Price,
      service2Price,
      service3Price,
      service4Price,
      packagePrice,
      monthlyPrice,
      annualPrice,
      discountMonthly,
      discountAnnual
    });
    console.log("Package updated successfully!");
    handleClose();
  } catch (err) {
    console.error("Error updating package:", err);
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
          style={{ width: "100%", maxHeight: "30px" }}
          className="roleBtn"
          onClick={handleClickOpen}
        >
          Update
        </Button>
      </ThemeProvider>

      <Dialog open={open} onClose={handleClose}>
      <div className="formContent" style={{width:"500px"}}>
          <form onSubmit={handleUpdate}>
            <DialogContent>
              <div className="title">
                <h2>Update Package</h2>
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
                      placeholder="Enter service name"
                      value={service1}
                      onChange={(e) => setService1(e.target.value)}
                    />
                    <input
                      type="number"
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
                    <input
                      type="number"
                      placeholder="Enter service price"
                      value={service2Price}
                      onChange={(e) => setService2Price(e.target.value)}
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
                    <input
                      type="number"
                      placeholder="Enter service price"
                      value={service3Price}
                      onChange={(e) => setService3Price(e.target.value)}
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
                    <input
                      type="number"
                      placeholder="Enter service price"
                      value={service4Price}
                      onChange={(e) => setService4Price(e.target.value)}
                    />
                  </div>
                </div>

                <div className="inputBox">
                  <span className="details">Monthly Price</span>
                  <input
                    type="number"
                    placeholder="Enter monthly price"
                    value={monthlyPrice}
                    onChange={(e) => setMonthlyPrice(e.target.value)}
                  />
                </div>
                <div className="inputBox">
                  <span className="details">Annual Price</span>
                  <input
                    type="number"
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
                Update
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </form>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
