import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Tab from "react-bootstrap/Tab";
import Failed from "./Tables/Bulk/Failed";

const BulkTables = () => {
  return (
    <div className="">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Hello 1
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Hello 2
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Failed />
        </Tab>
      </Tabs>
    </div>
  );
};

export default BulkTables;
