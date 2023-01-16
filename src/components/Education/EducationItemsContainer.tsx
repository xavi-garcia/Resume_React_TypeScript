import {Col, Row} from 'react-bootstrap';
import educationItems from '../../data/education.json';
import { EducationItem } from './EducationItem';

export function Education(){
    return(
        <>
        <h1 className="text-center">Education</h1>
        <Row md={2} xs={1} lg={3} className='g-3'>
            {educationItems.map(item => (
                <Col key={item.id}>
                    <EducationItem {...item}/>
                </Col>
            ))}
        </Row>
        <hr />
        </>
    );
}