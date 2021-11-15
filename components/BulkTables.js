import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Tab from "react-bootstrap/Tab";
import Failed from "./Tables/Bulk/Failed";
import Uploaded from "./Tables/Bulk/Uploaded";
import Success from "./Tables/Bulk/Success";

const BulkTables = () => {
  return (
    <div className="">
      <Tabs
        defaultActiveKey="uploaded"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="uploaded" title="Uploaded">
          <Uploaded/>
        </Tab>
        <Tab eventKey="success" title="Success">
          <Success/>
        </Tab>
        <Tab eventKey="failed" title="Failed">
          <Failed />
        </Tab>
      </Tabs>
    </div>
  );
};

export default BulkTables;
