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
    // this.getClass();
    // getDun();
    this.getBagsh();
  },
  methods: {
    jishe() {
      console.log(bagsh);
    },
    getClass() {
      //tsetsneegiin select ugugduluu beldeh heseg
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      let data;
      fetch(
        "http://data.num.edu.mn/dataset/8679868d-004a-4a25-b4c1-0a9d36ba4945/resource/838e4aa1-b0fa-40c1-a7e4-71b9cb47fcfb/download/-2018-autumn.json",
        requestOptions
      )
        .then(response => response.json())
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
    getBagsh() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      let data;
      fetch(
        " http://data.num.edu.mn/dataset/787c396b-9ccc-4687-bd3a-71c345bc7fe3/resource/9901ef64-5539-4e05-9b70-1feffaecd615/download/-2018-autumn.json",
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          bagsh = result;
          console.log(bagsh);
        })
        .catch(error => console.log("error", error));
    }
  }
});
