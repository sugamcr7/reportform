import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../components/images/ahaan.jpg";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import "./home.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isDiaryOpen, setIsDiaryOpen] = useState(false);
  


  const onSubmit = (data) => {
    const newData = {
      ...data,
      file: data.file[0] ? URL.createObjectURL(data.file[0]) : null,
    };
    handleSubmit(newData);
    console.log("Form Data:", data);
    toast.success("Form submitted successfully!");
    setTimeout(() => {
      reset();
      setIsDiaryOpen(false); // Close the diary after submission
    }, 1000);
    navigate("/table", { state: { formData: newData } });
  };

  return (
    <div className="diary-container">
      <div
        className={`diary-cover ${isDiaryOpen ? "open" : ""}`}
        onClick={() => setIsDiaryOpen(true)}
      >
        <img
          src={Logo} // Replace with your image path
          alt="Company Logo"
          className="diary-logo"
        />
      </div>

      <div className={`diary-content ${isDiaryOpen ? "show" : ""}`}>
        <Container maxWidth="sm">
          <Paper elevation={1} sx={{ padding: 2 }}>
            <Typography variant="h5" mb={2} align="center">
              Submit Your Daily Report
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                sx={{
                  "& label": {
                    color: "#000", // Default label color
                  },
                  "& label.Mui-focused": {
                    color: "#000", // Label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#000", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#000", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000", // Border color when focused
                    },
                  },
                }}
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />

              <TextField
                fullWidth
                type="date"
                margin="normal"
                sx={{
                  "& label": {
                    color: "#000", // Default label color
                  },
                  "& label.Mui-focused": {
                    color: "#000", // Label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#000", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#000", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000", // Border color when focused
                    },
                  },
                }}
                {...register("date", { required: "Date is required" })}
                error={!!errors.date}
                helperText={errors.date?.message}
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                fullWidth
                label="Designation"
                margin="normal"
                sx={{
                  "& label": {
                    color: "#000", // Default label color
                  },
                  "& label.Mui-focused": {
                    color: "#000", // Label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#000", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#000", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000", // Border color when focused
                    },
                  },
                }}
                {...register("designation", {
                  required: "Designation is required",
                })}
                error={!!errors.designation}
                helperText={errors.designation?.message}
              />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="time"
                    label="Starting Time"
                    margin="normal"
                    sx={{
                      "& label": {
                        color: "#000", // Default label color
                      },
                      "& label.Mui-focused": {
                        color: "#000", // Label color when focused
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#000", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#000", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000", // Border color when focused
                        },
                      },
                    }}
                    {...register("startTime", {
                      required: "Start time is required",
                    })}
                    error={!!errors.startTime}
                    helperText={errors.startTime?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="time"
                    label="Ending Time"
                    margin="normal"
                    sx={{
                      "& label": {
                        color: "#000", // Default label color
                      },
                      "& label.Mui-focused": {
                        color: "#000", // Label color when focused
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#000", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#000", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000", // Border color when focused
                        },
                      },
                    }}
                    {...register("endTime", {
                      required: "End time is required",
                    })}
                    error={!!errors.endTime}
                    helperText={errors.endTime?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                margin="normal"
                sx={{
                  "& label": {
                    color: "#000", // Default label color
                  },
                  "& label.Mui-focused": {
                    color: "#000", // Label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#000", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#000", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000", // Border color when focused
                    },
                  },
                }}
                {...register("description", {
                  required: "Description is required",
                })}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
              <Grid item xs={12}>
                <TextField
                  type="file"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ accept: "image/*,.pdf,.doc,.docx" }}
                  fullWidth
                  {...register("file")}
                />
              </Grid>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Home;
