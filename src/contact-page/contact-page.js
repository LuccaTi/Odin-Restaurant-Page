import "./styles.css";
import githubIcon from "./assets/icons/github-icon.png";
import linkedinIcon from "./assets/icons/linkedin-icon.png";

const contactPage = {
    createContactPage() {
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('content', 'contact');

        const createContactDiv = () => {
            const div = document.createElement('div');
            div.classList.add('contact-div');
            return div;
        };

        const title = document.createElement('h2');
        title.textContent = 'Contact Us';
        const contactTitleDiv = createContactDiv();
        contactTitleDiv.setAttribute('id', 'title-div');
        contactTitleDiv.append(title);
        contactDiv.append(contactTitleDiv);

        const credentialsDiv = createContactDiv();
        const author = document.createElement('h3');
        author.textContent = 'Lucca de Almeida Tirelli';
        const email = document.createElement('h4');
        email.textContent = 'tirellilucca@gmail.com';
        
        const portfolio = document.createElement('h4');
        
        const githubLink = document.createElement('a');
        githubLink.href = 'https://github.com/LuccaTi';
        githubLink.target = '_blank';
        const githubIconImg = document.createElement('img');
        githubIconImg.src = githubIcon;
        githubIconImg.alt = 'Github Icon';
        githubIconImg.setAttribute('id', 'github-icon');
        githubLink.append(githubIconImg);

        const linkedinLink = document.createElement('a');
        linkedinLink.href = 'https://www.linkedin.com/in/lucca-tirelli/';
        linkedinLink.target = '_blank';
        const linkedinIconImg = document.createElement('img');
        linkedinIconImg.src = linkedinIcon;
        linkedinIconImg.alt = 'Linkedin Icon';
        linkedinIconImg.setAttribute('id', 'linkedin-icon');
        linkedinLink.append(linkedinIconImg);

        portfolio.append(githubLink, linkedinLink);

        credentialsDiv.append(author, email,portfolio);
        contactDiv.append(credentialsDiv);

        return contactDiv;
    }
}

export { contactPage };