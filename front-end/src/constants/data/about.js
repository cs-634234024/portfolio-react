import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import profile from '../../assets/images/profile.jpg'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
export const data = [{
    id: 'about1',
    date: "06-05-2001",
    title: 'My Portfolio ',
    link: [{
        type : faGithub,
        link : 'https://github.com/cs-634234024/' 
    },
    {
        type :faFacebook ,
        link : '#'
    },
    {
        type : faInstagram ,
        link : '#'
    }
    ],


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
        [ "Javascript", "Typescript", 'Basic Java', 'Basic Dart'],
        [ "React", "Tailwind CSS", 'NodeJs Express', 'Flutter']
    ],
    picture: profile,
} ]