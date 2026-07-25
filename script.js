// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});


// Form Validation

const form = document.getElementById("contactForm");

const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const text = document.getElementById("message").value.trim();

    console.log(name);
    console.log(email);
    console.log(text);

    if(name==="" || email==="" || text===""){

        message.style.color="red";

        message.textContent="Please fill in all fields.";

        return;

    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        message.style.color="red";

        message.textContent="Enter a valid email.";

        return;

    }

    message.style.color="green";

    message.textContent="Message sent successfully!";

});
// GitHub API
const profileDiv = document.getElementById("githubProfile");
const loading = document.getElementById("loading");
const loadBtn = document.getElementById("loadProfile");
async function loadGitHubProfile(){
    loading.textContent = "Loading...";
    profileDiv.innerHTML = "";
    const response = await fetch(
    "https://api.github.com/users/varshaasvam16-bit"
);
const data = await response.json();
const profile = {

    Name: data.name,

    Username: data.login,

    Followers: data.followers,

    Following: data.following,

    PublicRepos: data.public_repos,

    Location: data.location

};
const details = [];
for (const key in profile) {

    details.push({

        title: key,

        value: profile[key]

    });

}
let html = `
    <img src="${data.avatar_url}" alt="Profile Image">
    <h3>${data.name}</h3>
    <ul>
`;
details.forEach(function(item){

    html += `
        <li>
            <strong>${item.title}:</strong> ${item.value}
        </li>
    `;

});
html += `
    </ul>

    <p>
        <a href="${data.html_url}" target="_blank">
            Visit My GitHub Profile
        </a>
    </p>
`;
profileDiv.innerHTML = html;

loading.textContent = "";
}