async function fetchRepos() {

    try{
        const user = await axios.get('https://api.github.com/users/gabrielpedutti')
        return await axios.get(user.data.repos_url)
    } catch(e){
        console.log(e)
    }
}

function comparar(a, b){
    if (a.pushed_at < b.pushed_at) {
        return 1
    } else if (a.pushed_at > b.pushed_at) {
        return -1
    } else {
        return 0
    }
}

async function atualizarLinguagem(techProject1, techProject2) {
    let circleProject1 = document.querySelector('.project1 .circulo')
    let languageProject1 = document.querySelector('.language1')

    let circleProject2 = document.querySelector('.project2 .circulo')
    let languageProject2 = document.querySelector('.language2')

    if (techProject1 == "JavaScript") {
        circleProject1.style.backgroundColor = '#b1b40b';
        languageProject1.textContent = "JavaScript"
    } else if (techProject1 == "CSS") {
        circleProject1.style.backgroundColor = '#1f04b8';
        languageProject1.textContent = "CSS"
    } else {
        circleProject1.style.backgroundColor = '#d3330b';
        languageProject1.textContent = "HTML"
    }

    if (techProject2 == "JavaScript") {
        circleProject2.style.backgroundColor = '#b1b40b';
        languageProject2.textContent = "JavaScript"
    } else if (techProject2 == "CSS") {
        circleProject2.style.backgroundColor = '#1f04b8';
        languageProject2.textContent = "CSS"
    } else {
        circleProject2.style.backgroundColor = '#d3330b';
        languageProject2.textContent = "HTML"
    }
}

async function atualizarProjetos(){

    const repos = (await fetchRepos()).data.sort(comparar)
    let project1 = repos[0].name
    let project2 = repos[1].name
    let descriptionProject1 = repos[0].description
    let descriptionProject2 = repos[1].description
    let techProject1 = repos[0].language
    let techProject2 = repos[1].language
    let linkProject1 = repos[0].html_url
    let linkProject2 = repos[1].html_url
    titleProject1.innerHTML = `<a href="${linkProject1}">${project1}</a>`
    descricaoProjeto1.textContent = descriptionProject1
    titleProject2.innerHTML = `<a href="${linkProject2}">${project2}</a>`
    descricaoProjeto2.textContent = descriptionProject2
    console.log(repos)
    atualizarLinguagem(techProject1, techProject2)
}

atualizarProjetos()


