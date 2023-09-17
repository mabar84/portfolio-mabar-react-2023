const svgPointer = document.querySelector(".visual .svg-container path");
const visualCard = document.querySelector(".visual-image-wrapper .card");

const infrastructure = () => {
  const legend = document.querySelector(".infrastructure-legend");
  const legendItem = document.querySelectorAll(".legend-item");

  let center = [57.14657487467774, 65.525471911599];

  function init() {
    let map = new ymaps.Map("infrastructure-map", {
      center: center,
      zoom: 13,
    });

    let placemarkNk = new ymaps.Placemark(
      [57.14657487467774, 65.525471911599],
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/nk-red.svg",
        iconImageSize: [450, 450],
        iconImageOffset: [-225, -225],
      }
    );

    let placemark5km = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/5km.svg",
        iconImageSize: [40, 20],
        iconImageOffset: [-20, -225],
      }
    );

    let placemarkRest1 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/rest-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [70, -170],
      }
    );

    let placemarkRest2 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/rest-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [-110, -65],
      }
    );

    let placemarkSport = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/sport-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [-170, -130],
      }
    );

    let placemarkTransport1 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/transport-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [155, -107],
      }
    );

    let placemarkTransport2 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/transport-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [-260, 55],
      }
    );

    let placemarkTransport3 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/transport-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [10, 45],
      }
    );

    let placemarkTransport4 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/transport-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [390, 40],
      }
    );

    let placemarkMedicine1 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/medicine-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [-255, -90],
      }
    );

    let placemarkMedicine2 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/medicine-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [-60, 190],
      }
    );

    let placemarkCafe1 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/cafe-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [-40, -90],
      }
    );

    let placemarkCafe2 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/cafe-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [225, -50],
      }
    );

    let placemarkCafe3 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/cafe-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [205, 80],
      }
    );

    let placemarkCafe4 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Кафе «Огни Сибири»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/4-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [235, 180],
      }
    );

    let placemarkCafe5 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/12-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [100, 100],
      }
    );

    let placemarkCafe6 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/3-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [-90, 100],
      }
    );

    let placemarkChild = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/child-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [-120, 20],
      }
    );

    let placemarkSchool1 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/school-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [10, -315],
      }
    );

    let placemarkSchool2 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/school-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [-340, -40],
      }
    );

    let placemarkSchool3 = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/school-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [430, -30],
      }
    );

    let placemarkStore = new ymaps.Placemark(
      center,
      { hintContent: "<strong>Объект «N»</strong>" },
      {
        iconLayout: "default#image",
        iconImageHref: "img/store-icon.svg",
        iconImageSize: [36, 36],
        iconImageOffset: [25, -50],
      }
    );

    legend.addEventListener("click", (e) => {
      if (e.target.closest(".legend-item")) {
        e.target.classList.toggle("active");

        legendItem[0].classList.contains("active")
          ? placemarkSport.options.set("iconImageHref", "img/sport-icon.svg")
          : placemarkSport.options.set("iconImageHref", "");

        legendItem[1].classList.contains("active")
          ? placemarkChild.options.set("iconImageHref", "img/child-icon.svg")
          : placemarkChild.options.set("iconImageHref", "");

        if (legendItem[2].classList.contains("active")) {
          placemarkRest1.options.set("iconImageHref", "img/rest-icon.svg");
          placemarkRest2.options.set("iconImageHref", "img/rest-icon.svg");
        } else {
          placemarkRest1.options.set("iconImageHref", "");
          placemarkRest2.options.set("iconImageHref", "");
        }

        if (legendItem[3].classList.contains("active")) {
          placemarkCafe1.options.set("iconImageHref", "img/cafe-icon.svg");
          placemarkCafe2.options.set("iconImageHref", "img/cafe-icon.svg");
          placemarkCafe3.options.set("iconImageHref", "img/cafe-icon.svg");
          placemarkCafe4.options.set("iconImageHref", "img/4-icon.svg");
          placemarkCafe5.options.set("iconImageHref", "img/12-icon.svg");
          placemarkCafe6.options.set("iconImageHref", "img/3-icon.svg");
        } else {
          placemarkCafe1.options.set("iconImageHref", "");
          placemarkCafe2.options.set("iconImageHref", "");
          placemarkCafe3.options.set("iconImageHref", "");
          placemarkCafe4.options.set("iconImageHref", "");
          placemarkCafe5.options.set("iconImageHref", "");
          placemarkCafe6.options.set("iconImageHref", "");
        }

        if (legendItem[4].classList.contains("active")) {
          placemarkTransport1.options.set(
            "iconImageHref",
            "img/transport-icon.svg"
          );
          placemarkTransport2.options.set(
            "iconImageHref",
            "img/transport-icon.svg"
          );
          placemarkTransport3.options.set(
            "iconImageHref",
            "img/transport-icon.svg"
          );
          placemarkTransport4.options.set(
            "iconImageHref",
            "img/transport-icon.svg"
          );
        } else {
          placemarkTransport1.options.set("iconImageHref", "");
          placemarkTransport2.options.set("iconImageHref", "");
          placemarkTransport3.options.set("iconImageHref", "");
          placemarkTransport4.options.set("iconImageHref", "");
        }

        if (legendItem[5].classList.contains("active")) {
          placemarkSchool1.options.set("iconImageHref", "img/school-icon.svg");
          placemarkSchool2.options.set("iconImageHref", "img/school-icon.svg");
          placemarkSchool3.options.set("iconImageHref", "img/school-icon.svg");
        } else {
          placemarkSchool1.options.set("iconImageHref", "");
          placemarkSchool2.options.set("iconImageHref", "");
          placemarkSchool3.options.set("iconImageHref", "");
        }

        legendItem[6].classList.contains("active")
          ? placemarkStore.options.set("iconImageHref", "img/store-icon.svg")
          : placemarkStore.options.set("iconImageHref", "");

        if (legendItem[7].classList.contains("active")) {
          placemarkMedicine1.options.set(
            "iconImageHref",
            "img/medicine-icon.svg"
          );
          placemarkMedicine2.options.set(
            "iconImageHref",
            "img/medicine-icon.svg"
          );
        } else {
          placemarkMedicine1.options.set("iconImageHref", "");
          placemarkMedicine2.options.set("iconImageHref", "");
        }
      }
    });

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemarkNk);
    map.geoObjects.add(placemark5km);

    map.geoObjects.add(placemarkRest1);
    map.geoObjects.add(placemarkRest2);

    map.geoObjects.add(placemarkSport);

    map.geoObjects.add(placemarkTransport1);
    map.geoObjects.add(placemarkTransport2);
    map.geoObjects.add(placemarkTransport3);
    map.geoObjects.add(placemarkTransport4);

    map.geoObjects.add(placemarkMedicine1);
    map.geoObjects.add(placemarkMedicine2);

    map.geoObjects.add(placemarkCafe1);
    map.geoObjects.add(placemarkCafe2);
    map.geoObjects.add(placemarkCafe3);
    map.geoObjects.add(placemarkCafe4);
    map.geoObjects.add(placemarkCafe5);
    map.geoObjects.add(placemarkCafe6);

    map.geoObjects.add(placemarkChild);

    map.geoObjects.add(placemarkSchool1);
    map.geoObjects.add(placemarkSchool2);
    map.geoObjects.add(placemarkSchool3);

    map.geoObjects.add(placemarkStore);
  }

  ymaps.ready(init);
};

infrastructure();

const offices = () => {
  const offices = document.querySelector(".offices");
  const accordeons = document.querySelectorAll(".accordeon");

  let center = [57.128537400027296, 65.50427173032505];

  function init() {
    let map = new ymaps.Map("offices-map", {
      center: center,
      zoom: 13,
    });

    let placemarkAivazovsky = new ymaps.Placemark(
      [57.16572330968088, 65.58576752869228],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/offices-icon-A.svg",
        iconImageSize: [40, 40],
        // iconImageOffset: [50, -50],
      }
    );

    let placemarkPreobrMsk = new ymaps.Placemark(
      [57.11864398978612, 65.47840661653922],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/offices-icon-butterfly.svg",
        iconImageSize: [40, 40],
        // iconImageOffset: [50, -50],
      }
    );

    let placemarkPreobr = new ymaps.Placemark(
      [57.115778035116584, 65.50061695382176],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/offices-icon-butterfly.svg",
        iconImageSize: [40, 40],
        iconImageOffset: [0, -20],
      }
    );

    let placemarkNikolsky = new ymaps.Placemark(
      [57.101168338156825, 65.50522822705527],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/nk-icon-gray.svg",
        iconImageSize: [40, 40],
        iconImageOffset: [0, -20],
      }
    );

    let placemarkGallery = new ymaps.Placemark(
      [57.1525766283302, 65.53097836554646],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/offices-icon-butterfly.svg",
        iconImageSize: [40, 40],
        iconImageOffset: [-10, 10],
      }
    );

    offices.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.closest(".accordeon-top")) {
        if (e.target.closest(".accordeon").classList.contains("active")) {
          accordeons.forEach((item) => item.classList.remove("active"));
        } else {
          accordeons.forEach((item) => item.classList.remove("active"));
          e.target.closest(".accordeon").classList.add("active");
        }

        accordeons[0].classList.contains("active")
          ? placemarkAivazovsky.options.set(
              "iconImageHref",
              "img/offices-a-blue.svg"
            )
          : placemarkAivazovsky.options.set(
              "iconImageHref",
              "img/offices-icon-A.svg"
            );
        accordeons[1].classList.contains("active")
          ? placemarkPreobrMsk.options.set(
              "iconImageHref",
              "img/offices-butterfly-blue.svg"
            )
          : placemarkPreobrMsk.options.set(
              "iconImageHref",
              "img/offices-icon-butterfly.svg"
            );
        accordeons[2].classList.contains("active")
          ? placemarkPreobr.options.set(
              "iconImageHref",
              "img/offices-butterfly-blue.svg"
            )
          : placemarkPreobr.options.set(
              "iconImageHref",
              "img/offices-icon-butterfly.svg"
            );
        accordeons[3].classList.contains("active")
          ? placemarkNikolsky.options.set(
              "iconImageHref",
              "img/offices-nk-blue.svg"
            )
          : placemarkNikolsky.options.set(
              "iconImageHref",
              "img/nk-icon-gray.svg"
            );
        accordeons[4].classList.contains("active")
          ? placemarkGallery.options.set(
              "iconImageHref",
              "img/offices-butterfly-blue.svg"
            )
          : placemarkGallery.options.set(
              "iconImageHref",
              "img/offices-icon-butterfly.svg"
            );
      }
    });

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemarkAivazovsky);
    map.geoObjects.add(placemarkPreobrMsk);
    map.geoObjects.add(placemarkPreobr);
    map.geoObjects.add(placemarkNikolsky);
    map.geoObjects.add(placemarkGallery);

    // map.addEventListener("click", (e) => {
    //   console.log(e.target);
    // });
    // placemarkAivazovsky.addEventListener("click", () => {
    //   console.log("123");
    // });
  }

  ymaps.ready(init);
};

offices();

const area = document.getElementsByTagName("area");
const linkMaparea = document.getElementById("link-maparea");

let widthImage = 1920 - window.screen.width;

linkMaparea.addEventListener("mouseenter", () => {
  linkMaparea.addEventListener("click", (e) => {
    e.preventDefault();
  });

  visualCard.classList.add("show");

  visualCard.addEventListener("mouseenter", () => {
    visualCard.classList.add("show");
    visualCard.addEventListener("mouseleave", () => {
      visualCard.classList.remove("show");
    });
  });

  linkMaparea.addEventListener("mouseleave", () => {
    visualCard.classList.remove("show");
  });
});

if (window.screen.width < 992) widthImage = 929;
if (window.screen.width < 640) widthImage = 1079;

let arrCoord = area[0].coords.split(",");

for (let i = 0; i < arrCoord.length; i++) {
  arrCoord[i] = arrCoord[i] - widthImage;
  i++;
}

area[0].coords = arrCoord;
