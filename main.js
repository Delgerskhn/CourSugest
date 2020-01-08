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
    this.getClass();
    this.getDun();
    this.getBagsh();
  },
  methods: {
    jishe() {
      console.log("jishe");
    },
    save(data) {
      this.bagsh = data;
    },
    getClass() {
      //tsetsneegiin select ugugduluu beldeh heseg
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      fetch(
        "http://data.num.edu.mn/dataset/d522ffe5-e540-4ddd-b02f-4eb8ce70243d/resource/ed9ef2cd-5283-4ca0-95a2-4483c7017371/download/-2017-autumn.json",
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.bagsh = result;
        })
        .catch(error => console.log("error", error));
      console.log("getclass");
    },
    produceMarks(tenhim, hicheel) {
      //dungee bolovsruulah heseg
      //songogdson hicheeliin dung return hiine
    },
    teacherIndex(hicheel) {
      //tuhain hichel derh bagsh nariin sanaliin indexiig return hiine
    },
    getDun() {},
    getBagsh() {}
  }
});
