async function getTodo() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await responce.json();

  console.log(data);

  data.forEach((user) => {
    addDocument(user);
  });
}

const container = document.querySelector(".container");

function addDocument(user) {
  container.innerHTML += `
  <div class="row justify-content-center align-items-center">
        <div class="col-12 text-center mt-5">
          <div class="card text-bg-warning mb-3">
            <div class="card-body">
              <h3 class="card-title">${user.name}</h3>
              <h5>ID:${user.id}</h5>
              <div
                class="icons d-flex justify-content-center align-items-center text-center"
              >
                <div
                  onclick="ToDoBtn(${user.id},'document')"
                  class="btn border me-1 personelDocuments"
                >
                  <i class="bi bi-person-circle"></i>
                </div>
                <div
                  onclick="ToDoBtn(${user.id},'address')"
                  class="btn border me-1 personelAddress"
                >
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div
                  onclick="ToDoBtn(${user.id},'company')"
                  class="btn border me-1 companyAddress"
                >
                  <i class="bi bi-building-fill"></i>
                </div>
                <div
                  onclick="ToDoBtn(${user.id},'contact')"
                  class="btn border me-1 contactInformation"
                >
                  <i class="bi bi-telephone-fill"></i>
                </div>
              </div>
              <div class="content row">
                <div class="document display pt-3">
                  UserName:${user.username}<br />
                  Email:${user.email}<br />
                </div>
                <div class="address display">
                  Street:${user.address.street}<br />
                  Suite:${user.address.suite}<br />
                  City:${user.address.city}<br />
                  Zipcode:${user.address.zipcode}<br />
                </div>
                <div class="company display">
                  Name: ${user.company.name}<br />
                  CatchPhrase: ${user.company.catchPhrase}<br />
                  Bs: ${user.company.bs}<br />
                </div>
                <div class="contact display">
                  E-mail: ${user.email}<br />
                  Phone: ${user.phone}<br />
                  Website: ${user.website}<br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}

getTodo();

function ToDoBtn(id, type) {
  const types = ["document", "address", "company", "contact"];
  if (types.includes(type)) {
    const elements = document.querySelectorAll(`.${type}`);
    const button = document.querySelectorAll(`.${type}Btn`);
    if (elements.length > 0 && elements[id - 1]) {
      if (elements[id - 1].classList.contains("display")) {
        elements[id - 1].classList.remove("display");
        button[id - 1].classList.add("display");
      } else {
        elements[id - 1].classList.add("display");
        button[id - 1].classList.remove("display");
      }
    }
  }
}
