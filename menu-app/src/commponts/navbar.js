import React ,{useState} from 'react';
import { Container , Nav  , Form, Navbar, Button, Row } from 'react-bootstrap';

const  NavScrollExample = ({filterSearch})=> {

  const [searchValue, setSearchValue] = useState('')
  const onSearch = () => {
    filterSearch(searchValue)
      setSearchValue('')
  }

  return (
   <Row>
   
   <Navbar bg="light" expand="lg">
   <Container>
     <Navbar.Brand href="#">مطعم جديد</Navbar.Brand>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarScroll">
       <Nav
         className="me-auto my-2 my-lg-0"
         style={{ maxHeight: '100px' }}
         navbarScroll
       >
       </Nav>
       <Form className="d-flex">
         <Form.Control
           type="search"
           placeholder="أبحث"
           className="me-2"
           aria-label="Search"
           onChange={(e) => setSearchValue(e.target.value)}
           value={searchValue}
         />
         <Button onClick={onSearch} variant="outline-success">بحث </Button>
       </Form>
     </Navbar.Collapse>
   </Container>
 </Navbar>
   </Row>
  );
}

export default NavScrollExample;