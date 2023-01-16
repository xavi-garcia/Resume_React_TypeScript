import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects/ProjectItemsContainer";
import { Experience } from "../components/Experience/ExperienceItemsContainer";
import { Education } from "../components/Education/EducationItemsContainer";
import { Footer } from "../components/Footer";
import { MyStack } from "../components/MyStack";

interface Greet{
    greetings: string;
}

export function Home({ greetings} : Greet){
    return (
        <>
            <h1 id="greeting" className="text-center">{greetings}</h1>
            <MyStack />
            <AboutMe />
            <Projects />
            <Experience />
            <Education />
            <Footer />
        </>
    )
}