let submitBtn = document.getElementById("submit");

const info = {
    student_name: '',
    email: '',
    address: '',
    gender: '',
}

const getData = () => {
    info.student_name = document.getElementById('name').value;
    info.email = document.getElementById('email').value;
    info.address = document.getElementById('address').value;
    info.gender = document.querySelector('input[name="male-female"]:checked').value;
   

    if (localStorage.getItem("infoSection") === null) {
        infoItem = [];
    }
    else {
        infoItem = JSON.parse(localStorage.getItem("infoSection"))
    }
    infoItem.push(info);
    localStorage.setItem("infoSection", JSON.stringify(infoItem));
}

const showData = () => {
    let cardContainer = document.getElementById("cardContainer");

    let cards = '';

    let getLocalStorage = localStorage.getItem("infoSection");

    if (getLocalStorage === null) {
        console.log("null");
    }
    else {
        cardDivArr = JSON.parse(getLocalStorage);

        cardDivArr.forEach((item, index) => {

            cards += `<div class="card">
            <div class="info">
                <p>Name : ${item.student_name}</p>
                <p>Email : ${item.email}</p>
                <p>address : ${item.address}</p>
                <p>Gender : ${item.gender}</p>
                <button onclick="deleteData(${index})">Delete</button>
            </div>
        </div>`;
        })
    }
    cardContainer.innerHTML = cards;
}

const deleteData = (index) => {
    let getList = JSON.parse(localStorage.getItem("infoSection"));
    getList.splice(index, 1);

    localStorage.setItem("infoSection", JSON.stringify(getList));
    window.location.reload();
}

showData();

submitBtn.addEventListener(('click'), () => {
    getData();
    showData();
})