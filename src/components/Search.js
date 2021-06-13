import React, { useState } from "react";
import { TextField, Button, LinearProgress } from "@material-ui/core";
import shrtcode from "../api/shrtcode";

const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

function Search() {
  const [link, setLink] = useState("");
  const [short,setShort] = useState("");
  const [isLoading,setIsLoading] = useState(false);
 
  const validateUrl = (string)=>{
      return string.match(HTTP_URL_VALIDATOR_REGEX);
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      if(validateUrl(link)){
          getLink();
          setLink('');
          setIsLoading(!isLoading);
      }
      else {
          setShort('Please Enter a valid URL');
      }
  }

  const getLink = async ()=>{
    await shrtcode.get(`shorten?url=${link}`).then(res=>{
      setShort(res.data.result.short_link);
      setIsLoading(false);
    }).catch(err=>console.log(err));
  }


  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column",width:'50%' }}>
        <TextField
          style={{ marginBottom: "20px",color:'white',backgroundColor:'white'}}
          label="Enter Your Link"
          variant="filled"
          required
          color="secondary"
          value={link}
          onChange={(e)=>setLink(e.target.value)}
        />
        <Button style={{marginBottom:'20px',backgroundColor:'#F72585',color:'white'}} type="submit" variant="contained" >
          Submit
        </Button>
        {isLoading && <LinearProgress/>}
      </form>

      {short && (
          <div>
              Short Link: {short}
          </div>
      )}
    </>
  );
}

export default Search;
