let error = {
  name: "",
  email: "",
  fname:"",
  mname:"",
  phno:"",
  aadhar:"",
  aadharimg:"",
  address:"",
  training:"",
  dob:"",
  password: "",
  repassword: "",
  regno:"",
};
function validateInput(prop, value) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  const nameRegex = /^[a-zA-Z-' ]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const currDate = new Date();

  // console.log(prop, value)
  if (prop === "name") {
    if (value.length === 0) error.name = `Please provide your ${prop}`;
    else if (value.length <= 2) error.name = `${prop} is too short`;
    else if (value.length > 30) error.name = `${prop} is too long`;
    else if (nameRegex.test(value) === false)
      error.name = `Only letters, spaces, hyphens, and apostrophes allowed.`;
  }

  if (prop === "aadhar") {
    if (value.length === 0) error.aadhar = `Please provide your aadhar no.`;
    else if (value.length !== 12)
      error.aadhar = `Please enter a Valid aadhar-Id(12 digit long).`;
  }

  if (prop === "email") {
    if (value.length === 0) error.email = `Please provide your email id.`;
    else if (emailRegex.test(value)===false)
      error.email = `Please enter a Valid email-id.`;
  }

  if(prop === "dob"){
    if(value.length===0){
      error.dob = `Please provide your dob.`;
    }
    const Birthdate = new Date(value);
    const timeDiff = currDate.getTime()- Birthdate.getTime();
    const diffInYears = timeDiff / (1000 * 60 * 60 * 24 * 365.25);
    const age = Math.floor(diffInYears);
    if(age<=16) error.dob="you are not eligible."
  }

  if (prop === "phno") {
    if (value.length === 0) error.phno = `Please Enter a ${prop}`;
    else if (value.length !== 10)
      error.phno = `${prop} should be 10 digit number only.`;
  }

  if (prop === "password") {
    if (value.length === 0) error.password = `Please Enter a ${prop}`;
    else if (passwordRegex.test(value) === false)
      error.password = `${prop} should have atleast 6 character, one uppercase letter, one digit, one special character`;
  }
  if (prop === "repassword") {
    if (value.length === 0) error.repassword = `Please Enter a ${prop}`;
    else if (passwordRegex.test(value) === false)
      error.repassword = `${prop} should have atleast 6 character, one uppercase letter, one digit, one special character`;
  }


  if (prop === "address") {
    if (value.length === 0) error.address = `Please provide an ${prop}`;
    else if (value.length <= 5) error.address = `${prop} is too short`;
    else if (value.length > 200) error.address = `${prop} is too long`;
  }

  if (prop === "fname") {
    if (value.length === 0) error.fname = `Please provide your ${prop}`;
    else if (value.length <= 2) error.fname = `${prop} is too short`;
    else if (value.length > 30) error.fname = `${prop} is too long`;
    else if (nameRegex.test(value) === false)
      error.name = `Only letters, spaces, hyphens, and apostrophes allowed.`;
  }

  if (prop === "mname") {
    if (value.length === 0) error.mname = `Please provide your ${prop}`;
    else if (value.length <= 2) error.mname = `${prop} is too short`;
    else if (value.length > 30) error.mname = `${prop} is too long`;
    else if (nameRegex.test(value) === false)
      error.mname = `Only letters, spaces, hyphens, and apostrophes allowed.`;
  }

  if (prop === "training") {
    if (value.length === 0) error.training = `Please provide your ${prop}`;
    else if (value.length <= 2) error.training = `${prop} is too short`;
    else if (value.length > 30) error.training = `${prop} is too long`;
    else if (nameRegex.test(value) === false)
      error.training = `Only letters, spaces, hyphens, and apostrophes allowed.`;
  }
  if(prop === "regno"){
    if(value.length===0)error.regno = "Please provide your Registration number";
  }
  if (prop === "regAuth") {
    if (value.length === 0)
      error.regAuth = "Please provide Registration Authority name";
  }
  if(prop === "aadharimg"){
    const maxSize = 1024 * 1024;
    if (value === null)
      error.aadharimg = `please provide an image of .jpg, .jpeg, .png type`;
    else if (value.size > maxSize)
      error.aadharimg = "image size should be less than 500kb";
  }
}

export const validate = (values) => {
  console.log(values);
  //Login Signup Validation
  if (values.name !== undefined) validateInput("name", values.name);
  if(values.aadhar !== undefined) validateInput("aadhar", values.aadhar);
  if(values.aadharimg!==undefined) validateInput("aadharimg", values.aadharimg)
  if (values.email !== undefined) validateInput("email", values.email);
  if(values.dob!==undefined) validateInput("dob", values.dob);
  if (values.phno !== undefined) validateInput("phno", values.phno);
  if (values.password !== undefined) validateInput("password", values.password);
  if (values.repassword !== undefined)validateInput("repassword", values.repassword);

  if (values.address !== undefined) validateInput("address", values.address);
  if (values.fname !== undefined) validateInput("fname", values.fname);
  if (values.mname !== undefined) validateInput("mname", values.mname);
  if (values.training !== undefined) validateInput("training", values.training);

  if(values.regno!==undefined)validateInput("regno", values.regno);
  if(values.regAuth !==undefined)validateInput("regAuth", values.regAuth);
  return error;
};
