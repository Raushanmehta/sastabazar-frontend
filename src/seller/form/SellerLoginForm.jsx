import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useAppDispatch } from "../../state/Store";
import { sendLoginSignupOtp } from "../../state/authSlice";

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();
  const [otpSent, setOtpSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("Login data:", values);
      // dispatch(loginSeller(values))
    },
  });

  const handleSendOtp = () => {
    if (!formik.values.email) {
      formik.setFieldError("email", "Email is required");
      return;
    }

    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
    setOtpSent(true);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-center font-bold text-2xl text-primary pb-5">
        Login As Seller
      </h1>

      <div className="space-y-5 mb-4">
        <TextField
          label="Email"
          name="email"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{mb:2}}
        />

        {otpSent && (
          <div className="space-y-4">
            <p className="font-medium text-sm text-gray-400">
              Enter OTP sent to your email
            </p>

            <MuiOtpInput
              length={6}
              value={formik.values.otp}
              onChange={(value) =>
                formik.setFieldValue("otp", value)
              }
              TextFieldsProps={{
                size: "small",
                error: formik.touched.otp && Boolean(formik.errors.otp),
              }}
            />
          </div>
        )}

        <Button
          type="button"
          onClick={handleSendOtp}
          variant="contained"
          fullWidth
          sx={{ py: "11px" ,mb:2}}
        >
          Send OTP
        </Button>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ py: "11px" }}
          disabled={!otpSent || formik.values.otp.length !== 6}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default SellerLoginForm;
