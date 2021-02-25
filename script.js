let target = document.getElementById('shaqo_doon_jobs');
const url = 'https://api.shaqodoon.ro/jobs/';
const city = 'Cluj-Napoca';

const createAndInsertJob = (image, title, company, location, link) => {
    let shaqoJob = document.createElement('div');
    shaqoJob.classList.add('shaqo_doon_job');
    target.appendChild(shaqoJob);

    let shaqoImg = document.createElement('img');
    shaqoImg.classList.add('shaqo_doon_img');
    shaqoJob.appendChild(shaqoImg);
    shaqoImg.src = '';
    // shaqoImg.alt = title;

    let shaqoDescription = document.createElement('div');
    shaqoDescription.classList.add('shaqo_doon_job_description');
    shaqoJob.appendChild(shaqoDescription);

    let shaqoJobTitle = document.createElement('h2');
    shaqoJobTitle.classList.add('shaqo_doon_job_title');
    shaqoDescription.appendChild(shaqoJobTitle);
    shaqoJobTitle.innerHTML = title;

    let shaqoLocation = document.createElement('div');
    shaqoLocation.classList.add('shaqo_doon_location');
    shaqoDescription.appendChild(shaqoLocation);

    let shaqoImgCompany = document.createElement('img');
    shaqoLocation.appendChild(shaqoImgCompany);
    shaqoImgCompany.src = './assets/company.png';
    shaqoImgCompany.alt = 'company icon';

    let shaqoJobCompany = document.createElement('p');
    shaqoJobCompany.classList.add('shaqo_doon_job_company');
    shaqoLocation.appendChild(shaqoJobCompany);
    shaqoJobCompany.innerHTML = company;

    let shaqoImgLocation = document.createElement('img');
    shaqoImgLocation.classList.add('shaqo_doon_img_location');
    shaqoLocation.appendChild(shaqoImgLocation);
    shaqoImgLocation.src = './assets/location.jpg';
    shaqoImgLocation.alt = 'location icon';

    let shaqoJobLocation = document.createElement('p');
    shaqoJobLocation.classList.add('shaqo_doon_job_location');
    shaqoLocation.appendChild(shaqoJobLocation);
    shaqoJobLocation.innerHTML = location;

    let shaqoDetails = document.createElement('a');
    shaqoDetails.classList.add('shaqo_doon_details');
    shaqoJob.appendChild(shaqoDetails);
    shaqoDetails.innerHTML = 'DETALII';
    shaqoDetails.target = '_blank';
    shaqoDetails.href = link;
}

const insertShaqoDoonLink = () => {
    const poworedBy = document.createElement('div');
    poworedBy.classList.add('shaqo_doon_powered_by');
    target.appendChild(poworedBy);

    const poworedByText = document.createElement('p');
    poworedBy.appendChild(poworedByText);
    poworedByText.innerHTML = 'powered by';

    const poworedByLink = document.createElement('a');
    poworedBy.appendChild(poworedByLink);
    poworedByLink.innerHTML = 'shaqodoon.';
    poworedByLink.target = '_blank';
    poworedByLink.href = 'https://shaqodoon.ro/locuri-de-munca';
}

const getData = () => {
    fetch('https://api.shaqodoon.ro/jobs/?country=Rom%C3%A2nia')
        .then(response => response.json())
        .then(data =>
        // console.log(data.jobs)
        {
            data.jobs.forEach((job, index) => {
                if (index < 2) {
                    createAndInsertJob('', job.title, job.company, `${job.city}, ${job.country}`, job.link)
                }
            })
            insertShaqoDoonLink();
        }
        );
}

getData()

const insertStyleInHead = () => {
    const theHead = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style.css';
    link.media = 'all';
    theHead.appendChild(link)
}

insertStyleInHead();



