import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import profile from '../../assets/images/profile.jpg'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
export const data = [{
    id: 'project1',
    date: "06-05-2001",
    title: 'My Portfolio ',
    link: [{
        type: faGithub,
        link: 'https://github.com/cs-634234024/'
    },
    {
        type: faFacebook,
        link: '#'
    },
    {
        type: faInstagram,
        link: '#'
    }
    ],


    descriptions: [
        "· Developed a bot for web scraping to extract various statistics and real-time odds.",
    ],
    skills: [
        ["Javascript", "Typescript", 'Basic Java', 'Basic Dart'],
        ["React", "Tailwind CSS", 'NodeJs Express', 'Flutter']
    ],
    picture: profile,
}]