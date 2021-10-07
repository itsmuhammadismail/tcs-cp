import Card from "./Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Shipments = () => {
  return (
    <Card heading="Shipments Details">
      <div className="flex gap-6">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Pieces / Flayers <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              COD Amount (PKR) <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Box Availablity <span className="text-[#FF0000]">*</span>
            </label>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="box"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Weight (KG) <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Fragile <span className="text-[#FF0000]">*</span>
            </label>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="box"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Height (inches) <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Length (inches) <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3 ">
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label2">
              Origin <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label2">
              Services <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label2">Insurance/Declared Value</label>
            <input type="text" className="input" />
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label2">
              Shipment Details <span className="text-[#FF0000]">*</span>
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label2">
              Remarks <span className="text-[#FF0000]">*</span>
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label2">
              Width(inches) <span className="text-[#FF0000]">*</span>
            </label>
            <input type="text" className="input2" />
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label2">
              Print Option <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Shipments;
