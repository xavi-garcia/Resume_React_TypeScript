import {Col, Row} from 'react-bootstrap';
import experienceItems from '../../data/experience.json';
import { ExperienceItem } from './ExperienceItem';

export function Experience(){
    return(
        <>
        <h1 className="text-center">Experience</h1>
        <Row  md={2} xs={1} lg={3} className='g-3'>
            {experienceItems.map(experience => (
            <ExperienceItem key={experience.id} {...experience}/>
            ))}
        </Row>
        <hr />
        </>
    );
}