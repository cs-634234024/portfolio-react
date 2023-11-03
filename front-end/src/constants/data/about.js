import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import profile from '../../assets/images/profile.jpg'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
export const data = [{
    id: 'about1',
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


    descriptions: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecatifugiat commodi iure deserunt debitis itaque at soluta dolore error.Expedita distinctio magni doloribus'],
    skills: [
        ["Javascript", "Typescript", 'Basic Java', 'Basic Dart'],
        ["React", "Tailwind CSS", 'NodeJs Express', 'Flutter']
    ],
    picture: profile,
}]