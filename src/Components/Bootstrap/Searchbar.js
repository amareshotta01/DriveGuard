import { Button, Col,Form, Row } from "react-bootstrap";

export default function SearchBar() {
  return (
    <>
    <style>{
        `.float{
            float:right
        }`
    }

    </style>
    <div className="mt-4 float">
      <Row>
        <Col sm={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
    </>
  );
}