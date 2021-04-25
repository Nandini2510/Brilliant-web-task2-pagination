import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

export default function Puzzle6() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={8}>
                        <ol>
                            <li>
                            There is exactly 1 false statement in this list.
                            </li>
                            <li>
                            There is exactly 2 false statement in this list.
                            </li>
                            <li>
                            There is exactly 3 false statement in this list.
                            </li>
                        </ol>
                        <p>How many <strong>false</strong> statements are there in the list above?</p>
                    </Col>
                   
                </Row>
            </Container>
            
        </div>
    )
}
