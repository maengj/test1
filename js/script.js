console.log("completed");
console.log($(window).width());
console.log($(window).height());
// 현재 브라우저 창의 가로 너비(px)를 console에 출력.
// 현재 브라우저 화면의 가로세로 길이를 변수 wWidth, wHeight에 저장함.
let wWidth = $(window).width();
let wHeight = $(window).height();
console.log(wWidth);
console.log(wHeight);

// mousemove가 일어날 때 마다 mouse X,Y 값을 구해서 적용하는 기능
$(document).mousemove(function (e) {
  // 문서(document) 전체에서 마우스가 움직일 때마다 e(event)에 대해 함수를 실행한다.
  $("#status").html(e.pageX + "," + e.pageY);
  // id가 'status'인 요소의 안쪽 HTML 내용을 "X좌표, Y좌표" 값을 불러와서 표시한다.
  $(".box").css("width", e.pageX);
  // class가 'box'인 요소의 width를 마우스 X좌표(px 단위) 값으로 설정한다.

  $(".box").css("height", e.pageY);
  // class가 'box'인 요소의 height를 마우스 Y좌표(px 단위) 값으로 설정한다.
});

$(document).on("mousemove", function (event) {
  //문서 전체에서 마우스가 움직일 때마다 마우스 이벤트를 감지해서 뒤의 함수를 작동해라~
  //   console.log(event); > 요 event안의 엄청나게 많은 기능들 중에 우리는 pageX, pageY를 가져와서쓰는것
  //마우스 X,Y 좌표 값을 변수 mouseX, Y에 각각 담아라
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  //1. 마우스 이동에 따라 배경 이미지 위치 움직이게 하게
  //   $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY}%`);
  //mouseY 값은 사실상 적용이 안되고 있는 상태, 그치만 각각 값을 넣어줘야하기 떄문에 적용
  console.log(mouseX / 10);
  //`수식을 넣을때 활용
  // // 마우스 X, Y좌표를 전체 창 너비로 나눈 뒤 100을 곱해서 퍼센트로 바꾼다.
  let percentX = (mouseX / $(window).width()) * 100;
  let percentY = (mouseY / $(window).height()) * 100;
  //   let percentX = (mouseX / $(window).wWidth) * 100;
  //   let percentY = (mouseY / $(window).wHeight) * 100;
  // 계산된 퍼센트 값을 object-position의 X, Y 값으로 적용한다.
  $(".bg-img").css("object-position", `${percentX}% ${percentY}%`);

  //2. 고양이 이미지 커서 따라다니게 하기
  //   //   이미지의 가로세로 값을 각각 변수에 할당함.
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();
  //   //   let imgWidth = $(".cat-img").width() / 2;
  //   //   let imgHeight = $(".cat-img").height() / 2;

  //   //이미지의 left, top 값을 가로세로 절반만큼 빼면, 커서 위치에 이미지 중심이 오도록 적용됨
  //   $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  //   $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
  $(".cat-img").css("left", mouseX - imgWidth + "px");
  $(".cat-img").css("top", mouseY - imgHeight + "px");
});
