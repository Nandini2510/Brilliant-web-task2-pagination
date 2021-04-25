import React,{useState} from 'react'
import Navigation from './components/Navigation'
import {Container,Row, Col} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import "../../Brilliant-web-task1/src/Components/node_modules/bootstrap/dist/css/bootstrap.min.css"
import Pagination from './components/Pagination';
import puzzle from './components/listofpuzzles';

function App() {
  var i=0;
  const [puzzles, setPuzzle] = useState(puzzle[i]);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentPerPage] = useState(1);
  const styles = {
    grid: {
        paddingLeft: 0,
        paddingRight: 0
       
    },
    row: {
        marginLeft: 0,
        marginRight: 0
    },
    col: {
        paddingLeft: 0,
        paddingRight: 0
    }
};

 

 // Change page
 const paginate = (pageNumber) => {
   setCurrentPage(pageNumber);
   setPuzzle(puzzle[pageNumber]);
  
 }
  return (
   <div>
     <Navigation/>
     <Container fluid style={styles.grid}>
       <Row className="bg-color"  style={styles.row}>
         <Col md={4} style={styles.col}>
          <div className="black-bg">
          <p className="back"><i class="fa fa-angle-left" aria-hidden="true" ></i> &nbsp;Back</p>
          <h3 className="logic">Logic</h3>

          </div>
         </Col>
         <Col className="second-col" md={8}>
         <Row>
         <Col md={8}  className="col1">
         
           <div>
             {puzzles}
           </div>
           
       
         </Col>
         <Col md={4} className="col2">
            <Pagination paginate={paginate}/>
         </Col>
         
       </Row>
       </Col>
       </Row>
      

     </Container>
   </div>
  );
}

export default App;
