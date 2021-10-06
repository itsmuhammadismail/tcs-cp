import { Drawer, Button, Radio, Space } from "antd";
import { useState } from "react";

const App = ({ visible, setVisible }) => {
  const [placement, setPlacement] = useState("left");

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      {/* <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space> */}
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <p>Some abc...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;
