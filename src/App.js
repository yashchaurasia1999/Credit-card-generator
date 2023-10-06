import CardDetails from "./components/CardDetails";
import { useEffect, useState } from "react";



function App() {
  const [cardNo, setCardNo] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(0);
  const [cvv, setCvv] = useState("");
  const [flag,setFlag]=useState(false);
  const [err,setErr]=useState('')
  const [errc,setErrc]=useState('')
 
  let currYear=new Date().getFullYear()
  
  

  const handleCardNo=(e)=>{
    // console.log(e.target.value)
    const cleanedValue = e.target.value.replace(/\D/g, '').slice(0, 16);;
    const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 - ');
    setCardNo(formattedValue);
  }
  const dataFill = (e) => {

   
    console.log("hello")
    e.preventDefault();
    console.log(month)

    let expCard=/^\d{4} - \d{4} - \d{4} - \d{4}$/
    let expCvv=/^\d{3}$/
    console.log("hello")
    let count=0;
    if(expCard.test(cardNo))
    {
      console.log(cardNo)
      count++;
    }
    else {
      setErr("please enter corret card Number")
      setTimeout(() => {
        setErr('')
      }, 4000);

    }
    if(expCvv.test(cvv))
    {
      console.log(cvv)
      count++;
    }
    else
    {
      setErrc("please enter correct cvv")
      setTimeout(() => {
        setErrc('')
      }, 4000);
    }
 
   
    if(count==2)  setFlag(true)
    
   
   
   
  }
 
  
  
  return (
    <>
      <div className="container m-0 con">
        <div className="row">
          <div className="col-md-4" style={{backgroundColor:'#003049'}}>
            
             {
              <CardDetails  cardNo={cardNo} cvv={cvv} month={month} year={year} flag={flag}/> 
              
             }
        
            
          </div>
          <div className="col-md-8"style={{backgroundColor:'#b0c4b1'}}>
          <form className="credit-card" style={{backgroundColor:"white"}} onSubmit={(e)=>dataFill}>
              <div className="form-header">
                <h4 className="title">Credit card detail</h4>
            
              </div>

              <div className="form-body">
                {/* <!-- Card Number --> */}
                <input
                  type="text"
                  className="card-number"
                  value={cardNo}
                  onChange={handleCardNo}
                  placeholder="Card Number"
                />
                <p className="fs-6" style={{color:'red'}}>{err}</p>

                {/* <!-- Date Field --> */}
                <div className="date-field">
                  <div className="month">
                    <select
                      name="Month"
                      value={month}
                      onChange={(e)=>setMonth(e.target.value)}
                    >
                      <option value="Select">Select...</option>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select>
                    
                  </div>
                  <div className="year">
                    <select
                      name="Year"
                      value={year}
                      onChange={(e)=>setYear(e.target.value)}
                    >
                      <option value="Select">Select...</option>
                      <option value="2016">{currYear}</option>
                      <option value="2017">{currYear+=1}</option>
                      <option value="2018">{currYear+=1}</option>
                      <option value="2019">{currYear+=1}</option>
                      <option value="2020">{currYear+=1}</option>
                      <option value="2021">{currYear+=1}</option>
                      <option value="2022">{currYear+=1}</option>
                      <option value="2023">{currYear+=1}</option>
                      <option value="2024">{currYear+=1}</option>
                  
                    </select>
                    
                  </div>
                </div>

                <div className="card-verification">
                  <div className="cvv-input">
                    <input
                      type="password"
                      value={cvv}
                      onChange={(e)=>{    const newCvv = e.target.value.replace(/\D/g, '').slice(0, 3);
                      setCvv(newCvv);
                  }}
                      placeholder="CVV"
                    
                    />
                    
                    <p className="fs-6" style={{color:'red'}}>{errc}</p>
                  </div>
                  <div className="cvv-details">
                    <p>3 or 4 digits usually found on the signature strip</p>
                  </div>
                </div>

                <button
                  className="proceed-btn"
                  type="submit"
                  style={{backgroundColor:'#1d2d44' , color:'white'}}
                  onClick={dataFill}
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default App;
