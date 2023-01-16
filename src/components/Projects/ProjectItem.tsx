import {Card} from 'react-bootstrap';

type ProjectItemProps = {
    id: number,
    name: string,
    imgUrl: string,
    link: string,
    technologies: string,
    summary: string,
};

export function ProjectItem({id, name, imgUrl, link,  technologies, summary} : ProjectItemProps){
    return(
        <Card id="card">
            <a id="links" href={link}>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title id="cardText" className='d-flex justify-content-space-between  align-items-baseline mb-4'>{name}</Card.Title>
                <Card.Subtitle  className="mb-2"><i id="cardSubText">{technologies}</i></Card.Subtitle>
                <Card.Text className="mb-2 text-muted">{summary}</Card.Text>
            </Card.Body>
            </a>
        </Card>
    );
}