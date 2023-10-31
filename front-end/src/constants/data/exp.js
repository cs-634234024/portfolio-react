import { faBook} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const data = [
    {   id: 'data1' , 
        date: "2019-2022",
        title: "Fullstack · Sport Analysis System",
        link: {
            type : faGithub , 
            link : '#'
        },

        
        descriptions: [
            "· Developed a bot for web scraping to extract various statistics and real-time odds.",
            "· Developed a real-time statistical analysis system for football betting and investing, which conducted extensive data analysis over four years, showing consistent positive returns on selected matches that were placed by selected conditions.",
            "· Designed and implemented a customizable condition system to identify betting opportunities that are capable of generating 3,000% of the average annual profit.",
            "· Designed and implemented an automated betting system.",
            "· Designed and Implemented a responsive web application for displaying real-time statistics and configuring the automated betting system.",
            "· Utilized load balancing and reverse proxy to ensure smooth system performance and handle increased user traffic.",
            "· Developed a notification system to send alerts to the Line application when there are matches that meet the specified conditions.",
        ],
        skills: [
            ["React", "Redux-Saga", "Antd"],
            ["Playwright", "Nginx", "NodeJS", "MongoDB"]
        ],
        picture: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    },
    {   
        id: 'data2' , 
        date: "2013-2018",
        title: "Police Officer",
        link: {
            type : faGithub , 
            link : '#'
        },
        descriptions: [],
        skills: [],
        picture: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 'data3' , 
        date: "2012-2012",
        title: "Middleware System Engineer · IBM",
        link: {
            type : faGithub , 
            link : '#'
        },
        descriptions: [
            "· Implemented and on-going support Middleware infrastructure for internal project.",
        ],
        skills: [
            ["IBM Websphere", "Linux"],
        ],
        picture: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
];