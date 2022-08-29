console.log('data added')

const loadDataByApi = () =>{
    const url = 'https://randomuser.me/api/?results=50';
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data.results))
}

const showData = (datas)=>{
    datas.forEach(data => {
        const {email,gender,name,picture} = data;
        const {title,first,last} = name;
        const mainDiv = document.getElementById('main-container');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
                      <div class="card">
                        <img src="${picture.large}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h3>Name: ${title} ${first} ${last}</h3>
                          <h5 class="card-title">email:${email}</h5>
                          <h5>Gender: ${gender}</h5>
                          <button type="button" class="btn btn-primary">See More</button>
                        </div>
                      </div>
        `
        mainDiv.appendChild(div)

    })
}

loadDataByApi()