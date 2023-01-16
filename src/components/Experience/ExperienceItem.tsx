import {Container} from 'react-bootstrap';

type ExperienceProps = {
    id: number,
    title: string,
    company: string,
    time: string,
    description: string,
}

export function ExperienceItem({id, title, company, time, description} : ExperienceProps){
    return(
        <Container id="experience" className='d-flex flex-column'>
                <h5 id="positions" >{title}</h5>
                <h5 id="company" className='d-flex justify-content-between  align-items-baseline mb-4'>
                <span className="fs-2"><i id="company">{company}</i></span>
                <span className="ms-2"><i id="company">{time}</i></span>
                </h5>
                <p className="">{description}</p>
        </Container>
    );
}