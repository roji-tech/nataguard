export const api = {
  baseURL: "https://safebump.azurewebsites.net/api",
  register: "https://safebump.azurewebsites.net/api/accounts/register",
  login: "https://safebump.azurewebsites.net/api/accounts/authenticate",
  refresh: "https://safebump.azurewebsites.net/api/refresh/",
  verify_email: "https://safebump.azurewebsites.net/api/accounts/email/confirm",
  resend_verify_email_token:
    "https://safebump.azurewebsites.net/api/accounts/email/confirmationtoken",
  forgot_password:
    "https://safebump.azurewebsites.net/api/accounts/password/resettoken",
  validate_password_token:
    "https://safebump.azurewebsites.net/api/accounts/password/resettoken/validate",
  password_reset:
    "https://safebump.azurewebsites.net/api/accounts/password/reset",
  healthInfo: "/health/info",
};

// $
