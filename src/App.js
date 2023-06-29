import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { Col, Row, Select } from "antd";
import { useState } from "react";

const variants = [
  "primary",
  "outline-primary",
  "danger",
  "outline-danger",
  "warning",
  "outline-warning",
  "success",
  "outline-success",
  "info",
  "outline-info",
  "secondary",
  "outline-secondary",
  "indigo",
  "outline-indigo",
  "violet",
  "outline-violet",
];

function App() {
  const [variantValue, setVariantValue] = useState("primary");

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Developed By Rakasiwi Surya</p>
        <p>Antd Custom Button</p>

        <div
          style={{
            margin: 20,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 20,
            width: 200,
          }}
        >
          <Button block variant={variantValue}>
            {variantValue}
          </Button>

          <Select
            value={variantValue}
            onChange={(value) => setVariantValue(value)}
            style={{ width: "100%" }}
          >
            {variants.length > 0 &&
              variants.map((variant, index) => (
                <Select.Option key={`variant-${index}`} value={variant}>
                  {variant}
                </Select.Option>
              ))}
          </Select>
        </div>

        <div style={{ margin: 20 }}>
          <code
            style={{
              fontFamily: "monospace",
              fontSize: 14,
              padding: 15,
              backgroundColor: "white",
              borderRadius: 10,
              color: "GrayText",
            }}
          >
            {`<Button variant="${variantValue}">${variantValue}</Button>`}
          </code>
        </div>

        <div style={{ margin: 20 }}>
          <Row gutter={[16, 16]}>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="primary">
                Primary
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="outline-primary">
                Outline Primary
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="danger">
                Danger
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="outline-danger">
                Outline Danger
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="warning">
                Warning
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="outline-warning">
                Outline Warning
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="success">
                Success
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="outline-success">
                Outline Success
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="info">
                Info
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="outline-info">
                Outline Info
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="secondary">
                Secondary
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="outline-secondary">
                Outline Secondary
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="indigo">
                Indigo
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="outline-indigo">
                Outline Indigo
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="violet">
                Violet
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Button block variant="outline-violet">
                Outline Violet
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
