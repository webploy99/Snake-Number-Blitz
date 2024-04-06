// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/snake-number-blitz/id6482290871";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/32/36/84/323684ab-41d6-0324-fc64-c8b6001e7a24/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};
var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;

// ======== get img url ========
imgUrl ({
  img1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  img2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  img3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  img4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  img5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/7c/6d/18/7c6d1845-896e-9aa8-be4d-9a30dbf68d1a/5f02ac79-d6ae-4358-b0bf-414c4455d225_Des_11.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1c/f7/71/1cf771d6-043a-9e9b-d5d4-dac8b113f2cc/cefff060-a163-4235-a86f-7ea95a8d9183_Des_12.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/25/66/72/256672c8-a205-3bf5-cb94-4e35fb57d55c/8767e2cc-02e8-4e55-a87e-c6e97f0d9452_Des_13.jpg/434x0w.webp",
})

function imgUrl ({img1, img2, img3, img4, img5, appImg1, appImg2, appImg3}) {
  document.getElementById('img1').src = img1
  document.getElementById('img2').src = img2
  document.getElementById('img3').src = img3
  document.getElementById('img4').src = img4
  document.getElementById('img5').src = img5
  document.getElementById('pic1').src = appImg1
  document.getElementById('pic2').src = appImg2
  document.getElementById('pic3').src = appImg3
}