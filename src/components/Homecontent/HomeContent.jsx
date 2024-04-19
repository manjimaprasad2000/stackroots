import React from 'react'
import './assets/Home.css'
import { TypeAnimation } from 'react-type-animation';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import pdfUrl from './assets/image/brochure.pdf'
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Card,
  CardContent,
  Rating,
  Typography,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Tab,
} from "@mui/material";
const HomeContent = () => {
  const emailregex = `[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}`
  const mobileRegex = /^[0-9]{10}$/;

  const schema = yup.object().shape({

    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").matches(emailregex,"Email is Invalid"),
    phone: yup.string().required("Phone is required").matches(mobileRegex,"Invalid Phone number"),
    location: yup.string().required("Location is required"),
    look: yup.string().required("Category for is required"),
    budget: yup.string().required("Budget for is required"),
    description: yup.string().required("Description is required"),


  })
  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      look: "",
      budget: "",
      description: "",
    },
  })

  const downloadPdf = () => {
    // Replace 'url_to_your_pdf_file.pdf' with the actual URL of the PDF file you want to download

    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the PDF file URL
    link.href = pdfUrl;
    // Set the download attribute to force the browser to download the file instead of navigating to it
    link.download = 'brochure.pdf';
    // Append the anchor element to the document body
    document.body.appendChild(link);
    // Trigger a click event on the anchor element
    link.click();
    // Remove the anchor element from the document body after the download is initiated
    document.body.removeChild(link);
  };
  const submitQute = () => {

  }
  return (
    <div className='homecontent'>
      <div className='homebanner'>
        <div className="container">
          <div class="row typewriter">
            <div className="col-6">
              <TypeAnimation
                style={{ whiteSpace: 'pre-line', height: '195px', display: 'block', color: "#fff", fontSize: "30px", fontWeight: "700", margin: "150px 0 0", lineHeight: "1.6" }}
                sequence={[
                  `CREATOR OF BLOCKCHAIN APPLICATIONS\nFOR ALL BUSINESS. BEST WEB\nAPPLICATION DEVELOPMENT COMPANY.`,
                  1000,
                  '',
                ]}
                repeat={Infinity}
              />
              <Button onClick={downloadPdf} variant="contained" style={{ marginBottom: "150px", background: "linear-gradient(rgb(0, 154, 222) 0%, rgb(0, 87, 169) 100%)", borderRadius: "8px", padding: "7px 10px" }}>Download</Button>
            </div>

          </div>

        </div>
        <div className="fixed-button" data-toggle="modal" data-target="#exampleModal">
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended" >
              Get Quote
            </Fab>
          </Box>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content modal_full">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Get A Quote</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{color:"white"}}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body form_body">
              <div style={{marginBottom:"10px"}}>
                <h4>Drop us a line</h4>
                Post your requirements here and we will contact you Shortly</div>
              <form onSubmit={handleSubmit(submitQute)} className='form_input'>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField id="outlined-basic" label="Enter your name" variant="outlined" {...register("name")} />

                    <span className="text-red-500 text-xs">{errors.name?.message}</span>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField id="outlined-basic" label="Email Addresss" variant="outlined" {...register("email")} />

                    <span className="text-red-500 text-xs">{errors.email?.message}</span>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField id="outlined-basic" label="Phone" variant="outlined" {...register("phone")} />

                    <span className="text-red-500 text-xs">{errors.phone?.message}</span>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField id="outlined-basic" label="Location" variant="outlined" {...register("location")} />

                    <span className="text-red-500 text-xs">{errors.location?.message}</span>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField id="outlined-basic" label="Looking for" variant="outlined" {...register("look")} select >
                      <MenuItem value='1'>E-COMMERCE</MenuItem>
                      <MenuItem value='2'>ERP</MenuItem>
                      <MenuItem value='3'>MOBILE APPLICATION</MenuItem>
                      <MenuItem value='4'>WEB APPLICATION</MenuItem>
                    </TextField>

                    <span className="text-red-500 text-xs">{errors.look?.message}</span>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} lg={6}>
                    <TextField id="outlined-basic" label="Budget" variant="outlined" {...register("budget")} select>
                    <MenuItem value='1'>Less than $750</MenuItem>
                      <MenuItem value='2'>$750-$1000</MenuItem>
                      <MenuItem value='3'>$1000-$2500</MenuItem>
                    </TextField>

                    <span className="text-red-500 text-xs">{errors.budget?.message}</span>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item md={12} sm={12} xs={12} lg={12}>
                    <TextField id="outlined-basic" label="Describe your project" variant="outlined" {...register("description")} />

                    <span className="text-red-500 text-xs">{errors.description?.message}</span>
                  </Grid>

                </Grid>
                <Grid container spacing={2}>
                  <Grid item md={12} sm={12} xs={12} lg={12}>
                    <Button type='submit' variant="contained" style={{ width: "100%" }}>SUBMIT</Button>
                  </Grid>
                </Grid>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
