// swipeJS
var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  loop: true,
  // Optional parameters

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  grabCursor: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  navigation: {
    nextEl: ".--next",
    prevEl: ".--pre",
  },
  // Disable preloading of all images
  preloadImages: true,
  // Enable lazy loading
  lazy: true,
  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
var teamslider = new Swiper(".team__wrap", {
  // // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  // Disable preloading of all images
  preloadImages: true,
  // Enable lazy loading
  lazy: true,
  speed: 400,
  freeMode: true,
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
});
//  BACK TO TOp
$("#back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
});
//  MY JS
// menu left
$(".header-wrap .menu").on("click", function () {
  $(".menu-left").toggleClass("active");
  $(".hamburger").toggleClass("active");
  $("main").toggleClass("active");
  $("#overlay").toggleClass("active");
});
// form đăng nhập
$(".btn .btn__login").on("click", function () {
  $(".signup").toggleClass("active");
  $("#overlay").addClass("active");
  $(".header-wrap").toggleClass("active");
  $(".menu-left").removeClass("active");
  $("main").removeClass("active");
  // $('main').hide();
});
$(".btn .btn__signin").on("click", function () {
  $(".register").toggleClass("active");
  $("#overlay").addClass("active");
  $(".header-wrap").toggleClass("active");
  $(".menu-left").removeClass("active");
  $("main").removeClass("active");
  // $('main').hide();
});
// $(".btn-menu").on("click", function(){
//   $("main").addClass("active");
//   $('.menu-left').addClass("active");
//   $("#overlay").toggleClass("active");
// })
$(".close-btn, #overlay").on("click", function () {
  $("#overlay").removeClass("active");
  $(".signup").removeClass("active");
  $(".menu-left").removeClass("active");
  $("main").removeClass("active");
  $(".hamburger").removeClass("active");
  $(".header-wrap").removeClass("active");
  $(".register").removeClass("active");
});
// $( "#overlay",".signup", '.menu-left').keydown(function(event) {
//   if ( event.which == 27 ) {
//     this.removeClass("active");
//    }
// });
document.addEventListener("keyup", function (event) {
  if (event.key == "Escape") {
    $(".close-btn, #overlay").trigger("click");
  }
});
// multiple tab
$(".content .tab_content").hide();
$(".content .tab_content:first-child").show();

$("ul li").click(function () {
  $("ul li").removeClass("active");
  $(this).addClass("active");

  var current_tab = $(this).attr("data-list");
  $(".content .tab_content").hide();
  $("." + current_tab).show();
});
$(document).ready(function () {
  $("#tabs div").hide();
  $("#tabs div:first").show();
  $("#tabs ul li:first").addClass("active");
  $("#tabs ul li a").click(function () {
    $("#tabs ul li").removeClass("active");
    $(this).parent().addClass("active");
    var currentTab = $(this).attr("data-list");
    $("#tabs div").hide();
    $(currentTab).show();
  });
});

// Validate Form
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function validateForm() {
  let name = $.trim($("#fullname").val()),
    phone = $.trim($("#phone").val()),
    email = $.trim($("#email").val()),
    facebook = $.trim($("#facebook").val()),
    skype = $.trim($("#skype").val()),
    formMess = document.querySelectorAll(".form-message");

  if (name == "" || name.length < 6) {
    formMess[0].innerHTML = "Vui lòng nhập đầy đủ họ tên!";
    $("#fullname").addClass("error");
  } else {
    formMess[0].innerHTML = "";
    $("#fullname").removeClass("error");
  }
  if (phone.length == "") {
    formMess[1].innerHTML = "Vui lòng nhập đúng số điện thoại";
    $("#phone").addClass("error");
  } else if (phone.length !== 10) {
    formMess[1].innerHTML = "Vui lòng nhập đúng số điện thoại";
    $("#phone").addClass("error");
  } else {
    formMess[1].innerHTML = "";
    $("#phone").removeClass("error");
  }
  if (email == "") {
    formMess[2].innerHTML = "Vui lòng nhập đúng email";
    $("#email").addClass("error");
  } else if (!isEmail(email)) {
    formMess[2].innerHTML = "Vui lòng nhập đúng email";
    $("#email").addClass("error");
  } else {
    formMess[2].innerHTML = "";
    $("#email").removeClass("error");
  }
  if (facebook.length == "" || facebook.length < 6) {
    formMess[3].innerHTML = "Vui lòng nhập địa chỉ facebook";
    $("#facebook").addClass("error");
  } else {
    formMess[3].innerHTML = "";
    $("#facebook").removeClass("error");
  }
  if (skype.length == "" || skype.length < 6) {
    formMess[4].innerHTML = "Vui lòng nhập Skype";
    $("#skype").addClass("error");
  } else {
    formMess[4].innerHTML = "";
    $("#skype").removeClass("error");
  }
  for (value of formMess) {
    if (value.innerHTML == "") {
      return true;
    } else {
      return false;
    }
  }
}

// test
//www.cfdtraining.vn/api/danh-sach-khoa-hoc
// https://www.cfdtraining.vn/api/contact: POST - name, phone, email, title, content
// https://www.cfdtraining.vn/api/cap-nhat-thong-tin-ca-nhan: POST - name, phone, email, facebook
// https://www.cfdtraining.vn/api/dang-ky-khoa-hoc : POST - name, phone, email, facebook
// https://www.cfdtraining.vn/api/dang-nhap : POST - username, password
// https://www.cfdtraining.vn/api/hoc-vien-khoa-hoc: GET
let homepage = document.querySelector(".homepage");
if (homepage) {
  fetch("https://www.cfdtraining.vn/api/danh-sach-khoa-hoc")
    .then((res) => res.json())
    .then((res) => {
      let htmlonline = "";
      let htmloffline = "";
      for (let i in res) {
        let thumbnail = JSON.parse(res[i].thubnail);

        let course = `<div class="course">
  
    <a href="course-detail.html" class="course__img"><img src="https://www.cfdtraining.vn/${thumbnail.link}" alt=""></a>
    <a href="course-detail.html" class="course__name">
        <h3>${res[i].title}</h3>
    </a>
    <p>${res[i].short_description}</p>
    <div class="teacher">
        <div class="teacher__infor">
            <img src="img/member.jpg" alt="teacher">
            <span>${res[i].cfd_teacher[0].title}</span>
        </div>
        <div class="detail">
            <a href="course-detail.html"><span>Đăng ký</span></a>
        </div>
    </div>
  </div>`;

        if (res[i].course_type === "online") {
          htmlonline += course;
        } else {
          htmloffline += course;
        }
      }
      document.querySelector(".online-courses__wrap").innerHTML = htmlonline;
      document.querySelector(".offline-courses__wrap").innerHTML = htmloffline;
    });
}

function dangnhap() {
  let username = document.querySelector("#tab_1 #email").value.trim();
  let password = document
    .querySelector(".signup-form .form-group #password")
    .value.trim();
  console.log(username, password);
  fetch("https://www.cfdtraining.vn/api/dang-nhap", {
    method: "POST",
    headers: {
      "Contend-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}
// let btnSubmit = (document.querySelector(
//   ".signup-form .form-submit"
// ).onclick = dangnhap());

if (validateForm()) {
  function contact() {
    // let name = document.querySelector(".user-detail #tab_1 #fullname").value,
    // phone = document.querySelector(".user-detail #tab_1 #phone").value,
    // email = document.querySelector(".user-detail #tab_1 #email").value,
    // facebook = document.querySelector(".user-detail #tab_1 #facebook").value,
    // skype = document.querySelector(".user-detail #tab_1 #skype").value;
    fetch("https://www.cfdtraining.vn/api/contact", {
      method: "POST",
      headers: {
        "Contend-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        facebook,
        skype,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  contact();
}

let userDetail = document.querySelector(".user-detail");
if (userDetail) {
  fetch("https://www.cfdtraining.vn/api/hoc-vien-khoa-hoc")
    .then((res) => res.json())
    .then((res) => {
      
      let user = "";
      for (i in res) {
        let thumbnail = JSON.parse(res[i].thubnail);
        let course = `<div class="course">
                                <div class="course__img">
                                    <img src="https://www.cfdtraining.vn/${thumbnail.link}" alt="">

                                </div>
                                <div class="course__infor">
                                    <h2>${res[i].title}</h2>
                                    <p>Khai giảng ngày ${res[i].opening_time}</p>
                                    <div class="process">
                                        <div class="time">
                                            <i>&oplus;</i><span>54 giờ</span>
                                        </div>
                                        <div class="video">
                                            <span>${res[i].count_video} video</span>
                                        </div>
                                        <div class="students">
                                            <i>	&otimes;</i>
                                            <span>${res[i].number_student_default} học viên</span>
                                        </div>
                                    </div>
                                    <a class="btn-continue" href="">
                                        <span>tiếp tục học</span>
                                    </a>

                                </div>
                                
                            </div>`
        user += course;
      }
      document.querySelector("#tab_2 ").innerHTML = user;
    });
}
