const params = new URLSearchParams(window.location.search);
const useId = params.get("userId");
console.log(params);
console.log(useId);

async function fetchUseIdDetails() {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${useId}`
  );
  const data = await responce.json();
  data.forEach((user) => {
    resultUsers(user);
  });
  console.log(data);
}

fetchUseIdDetails();

const result = document.querySelector(".result");

function resultUsers(user) {
  result.innerHTML += `
  <div class="row justify-content-center align-items-center">
  <div class="card col-lg-6 col-md-4 text-center mt-4">
      <h2><strong>Id</strong>:${user.userId}</h2>
      <h2><strong>Number</strong>:${user.id}</h2>
      <h2><strong>Title</strong>:${user.title}</h2>
      
      <p>Body:${user.body}</p>
    </div></div>`;
}
