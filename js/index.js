document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("github-form");
  const inputValue = document.getElementById("search");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(`https://api.github.com/search/users?q=${inputValue.value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        
        const ul = document.getElementById("user-list");
        let li = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");

        li.innerHTML = `<a href=${data.items[0].url}>${data.items[0].login}</a>`;
        li.setAttribute("id", "first-li");

        li2.innerHTML = `<a href=${data.items[0].url}><img src=${
          data.items[0].avatar_url
        } width=${180} height=${180}></a>`;
        li3.innerHTML = `<a href=${data.items[0].url}>Link to profile</a>`;

        ul.appendChild(li);
        ul.appendChild(li2);
        ul.appendChild(li3);
      });
  });
});
