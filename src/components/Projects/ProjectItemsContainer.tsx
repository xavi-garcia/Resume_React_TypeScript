import {Col, Row} from 'react-bootstrap';
import projectItems from '../../data/projects.json';
import { ProjectItem } from './ProjectItem';

export function Projects(){
    return(
        <>
        <h1 className="text-center">Projects</h1>
        <Row md={2} xs={1} lg={3} className='g-3'>
            {projectItems.map(project => (
                <Col key={project.id}>
                    <ProjectItem {...project}/>
                </Col>
            ))}
        </Row>
        <h5 id="contactinfo" className="text-center">For more projects please visit my <a className="alinks" href='https://github.com/xavi-garcia'>GitHub</a></h5>
        <hr />
        </>
    );
}