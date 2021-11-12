async function fetchSingleUser() {
    let responseBody = await fetch('https://randomuser.me/api/');
    let json = await responseBody.json();
    return json.results[0];
}

async function fetchUsers() {
    const users = [];
    for (let i = 0; i < 5; i++) {
        users[i] = await fetchSingleUser();
    }
    return users;
}

async function displayUserInHtml() {
    const userArr = await fetchUsers(5);
    for (let i = 0; i < userArr.length; i++) {
        let user = userArr[i];
        document.getElementById('img' + i).src = user.picture.medium;
        document.getElementById('name' + i).innerHTML = user.name.first + ' ' + user.name.last;
        document.getElementById('title' + i).innerHTML = 'title:' + user.title;
        document.getElementById('phone' + i).innerHTML = 'phone:' + user.phone;
        document.getElementById('email' + i).innerHTML = user.email;
    }

}

window.onload = async function () {
    await displayUserInHtml();

    document.getElementById('refeshBtn').onclick = async function () {
        await displayUserInHtml();
    }

}