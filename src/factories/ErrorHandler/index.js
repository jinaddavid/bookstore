export const handleError = (error) => {
  let message;
  let defaultMessage = 'Something went wrong, try again please.';
  console.log(error.response);
  if (error.response) {
    if (error.response.status === 403)
      message = 'You do not have the required permission';
    else if ((error.response.status >= 500) & (error.response.status < 600)) {
      message = defaultMessage;
    } else {
      message =
        error.response.data.error_msg ||
        error.response.data.message ||
        error.response.data.Message ||
        error.response.data.title ||
        defaultMessage;
    }
  } else if (error.request) {
    message = error.error_msg;
  } else {
    message = error.error_msg;
  }
  return message;
};
export const handleErrorWithReason = (error) => {
  let message;
  let defaultMessage = 'Something went wrong, try again please.';
  if (error.response) {
    if (error.response.status === 403)
      message = 'You do not have the required permission';
    else if ((error.response.status >= 500) & (error.response.status < 600)) {
      message = defaultMessage;
    } else {
      let Errormessage =
        error.response.data.error ||
        error.response.data.message ||
        error.response.data.Message ||
        error.response.data.title ||
        defaultMessage;
      let Reasons = error.response.data.validationMessages || [];
      let ReasonForError = '';
      if (Reasons.length > 0) {
        ReasonForError = `\n Reasons :  ${Reasons.join(', ')} `;
      }
      message = `${Errormessage} ${ReasonForError}`;
    }
  } else if (error.request) {
    message = error.message;
  } else {
    message = error.message;
  }
  return message;
};
export const handleProcessError = (err) =>
  err.response === 1 ? err.message : false;
