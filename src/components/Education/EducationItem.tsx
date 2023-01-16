import {Card} from 'react-bootstrap';

type EducationItemProps = {
    id: number,
    institution: string,
    degree: string,
    years: string,
}

export function EducationItem({id, institution, degree, years} : EducationItemProps){
    return(
        <Card id="cardEducation">
            <Card.Body className='d-flex flex-column'>
                <Card.Title id="educationText" className='d-flex justify-content-space-between  align-items-baseline mb-4'>{degree}</Card.Title>
                <Card.Subtitle  className="mb-2"><i id="educationSubText">{years}</i></Card.Subtitle>
                <Card.Text className="mb-2">{institution}</Card.Text>      
            </Card.Body>
        </Card>
    );
}