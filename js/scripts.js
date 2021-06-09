$(document).ready(function () {
  $('a').click(function () {
    $('a').removeClass("active");
    $(this).addClass("active");
  });
}); // section navbar active change

// form handled with formspree.io API
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("contactForm");
  var status = document.getElementById("contactForm-status");

  // Success and Error functions

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Talk to you soon!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem sending the message.";
  }

  // Handle submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// Function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}