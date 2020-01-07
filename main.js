new Vue({
  el: ".container",
  data: {
    msg: "my message",
    class: [],
    surguuli: "",
    tenhim: "",
    hicheel: "",
    dun: [],
    bagsh: [],
    isLoad: false
  },
  created() {
    getClass();
    getDun();
    getBagsh();
  },
  methods: {
    jishe() {
        //3 selectiin songogdson medeelliig surguli, tenhim, hichel ru hadgalna
    },
    getClass() {
      //tsetsneegiin select ugugduluu beldeh heseg
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      let data;
      fetch(
        "http://data.num.edu.mn/dataset/d522ffe5-e540-4ddd-b02f-4eb8ce70243d/resource/ed9ef2cd-5283-4ca0-95a2-4483c7017371/download/-2017-autumn.json",
        requestOptions
      )
        .then(response => response.text())
        .then(result => (data = result))
        .catch(error => console.log("error", error));
    },
    produceMarks(tenhim, hicheel) {
      //dungee bolovsruulah heseg
      //songogdson hicheeliin dung return hiine
    },
    teacherIndex(hicheel) {
      //tuhain hichel derh bagsh nariin sanaliin indexiig return hiine
    },
    getDun() {},
    getClass() {}
  }
});
