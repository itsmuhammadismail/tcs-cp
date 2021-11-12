
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


   const  groupedData = (dataRecord, dataLimit ) => {
    let recordRange = 0;
    let totalRecordRange = dataLimit;
    const groupedGraphData = [];
    let getTotalRecords = Math.ceil(dataRecord.length / dataLimit); // get limited data divided by limit
    
    for (let i = 0 ; i < getTotalRecords; i++ ) {
      const chunksData = dataRecord.slice(recordRange, totalRecordRange); // limited data to

      // const sumOftoTalGrouped = this.sumOfTotalRecordData(chunksData);
      // totalRecordRange += totalRecordRange + dataLimit;
      totalRecordRange += dataLimit;
      recordRange += dataLimit;

      groupedGraphData.push(chunksData);

    }
    return groupedGraphData;
  }

  const getLocalStorage = (keyName) => {
   return JSON.parse(localStorage.getItem(keyName));
  }

  const getCurrentOrigin = (id) => {
    const getorigin = getLocalStorage('costcenters');
   return getorigin.find((data)=>data.id == id);
  }

  const getCountrybyOriginId = (originId) => {
    const getcurrentOrigin = getCurrentOrigin(originId);
    const getcountry = getLocalStorage('countries');
    return getcountry.find((data) => data.id == getcurrentOrigin.fk_country);
  }
  
  const getCityById = (id) => {
    const getCity = getLocalStorage('pkcities');
    return getCity.find((data)=> data.id == id);
  }

module.exports = {
    uploadFileValidations,
    groupedData,
    getLocalStorage,
    getCurrentOrigin,
    getCountrybyOriginId,
    getCityById
}

// export {
    
// }