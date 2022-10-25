const projectsDiv = document.getElementById('project-container')

const getProjects = () => {
    fetch('/api/projects')
    .then(response => response.json())
    .then(data => data.forEach((project) => createCard(project)))
    .catch(err => console.log(err))
}


const createCard = (project) => {

    const cardEl = document.createElement('div')
    cardEl.classList.add('card')
    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header','bg-primary','text-light','p-2','m-0')

    cardHeader.innerHTML = `${project.title} </br>`

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body','bg-light')

    cardBody.innerHTML = `<p>${project.details}</p>
    <p>${project.yarn}</p>`

    cardEl.appendChild(cardHeader)
    cardEl.appendChild(cardBody)

    projectsDiv.appendChild(cardEl)
}

getProjects()