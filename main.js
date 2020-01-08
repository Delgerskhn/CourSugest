new Vue({
  el: ".container",
  data: {
    msg: "message",
    class: [],
    surguuli: "",
    tenhim: "",
    hicheel: "Биеийн тамир (Ерөнхий суурь)",
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
      let filter = this.bagsh.filter(
        data => data.Хичээлийн_нэр === this.hicheel
      );
      let avg = filter[0].Санал_өгсөн_суралцагчийн_тоо / filter.length;
      filter.forEach(element => {
        element.index = element.Багшид_өгсөн_санал / avg;
      });
      this.bagsh = filter;
      this.bagsh.sort((a, b) => {
        return a.index < b.index ? 1 : -1;
      });
      this.isLoad = true;
      console.log(this.bagsh);
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
      fetch(
        " http://data.num.edu.mn/dataset/787c396b-9ccc-4687-bd3a-71c345bc7fe3/resource/9901ef64-5539-4e05-9b70-1feffaecd615/download/-2018-autumn.json",
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          this.bagsh = result;
        })
        .catch(error => console.log("error", error));
    }
  }
});
