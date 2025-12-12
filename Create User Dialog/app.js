// My Nickname
const users = [
  { username: "tommyzizii", fullname: "Thant Zin Min", email: "tommy@mail.com" },
];

function renderUsers() {
  $("#userTable").empty();

  users.forEach(u => {
    $("#userTable").append(`
      <tr>
        <td>${u.username}</td>
        <td>${u.fullname}</td>
        <td>${u.email}</td>
      </tr>
    `);
  });
}

$(document).ready(function () {
  renderUsers();

  $("#userForm").on("submit", function (e) {
    e.preventDefault();

    const username = $("#username").val().trim();
    const fullname = $("#fullname").val().trim();
    const email = $("#email").val().trim();

    users.push({ username, fullname, email });

    renderUsers();

    // clear
    this.reset();

    // close 
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("userModal")
    );
    modal.hide();
  });
});
