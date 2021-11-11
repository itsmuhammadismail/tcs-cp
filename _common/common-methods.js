
const uploadFileValidations = (file) => {
    const response = {error: false , msg: 'something went wrong'};
    if (!file) {
      response.error = true;
      response.msg = "file not found";

    } else if (!file.name.match(/\.(csv|xls|xlsx)$/)) {
      response.error = true;
      response.msg = "Please select valid file";
    }
    return response;
  }

module.exports = {
    uploadFileValidations
}

// export {
    
// }