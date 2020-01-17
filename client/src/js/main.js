new Vue({
  el: ".main",
  data: {
    msg: "message",
    class: [],
    surguuli: "",
    tenhim: "Биеийн тамирын тэнхим",
    hicheel: "Биеийн тамир (Ерөнхий суурь)",
    dun: [],
    bagsh: [],
    isLoad: false,
    isDun: false
  },
  created() {
    this.getClass();
    // getDun();
    this.getBagsh();
    this.getDun();
  },
  computed: {
    getBagsh() {}
  },
  watch: {},
  methods: {
    search() {
      this.teacherIndex();
      this.produceMarks();
      console.log(this.bagsh);
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
          console.log("fetched class");
          this.class = result;
        })
        .catch(error => console.log("error", error));
      console.log("getclass");
    },
    produceMarks(tenhim, hicheel) {
      //dungee bolovsruulah heseg
      //songogdson hicheeliin dung return hiine
      let filter = this.dun.filter(
        data =>
          data.Хичээлийн_харьялах_нэгж === this.tenhim &&
          data.Хичээлийн_нэр === this.hicheel
      );
      this.dun = filter;
      this.isDun = true;
    },
    tenhim(surguuli) {
      let tenhimuud = [];

      return tenhimuud;
    },
    teacherIndex(hicheel) {
      //tuhain hichel derh bagsh nariin sanaliin indexiig return hiine
      let filter = this.bagsh.filter(
        data => data.Хичээлийн_нэр === this.hicheel
      );
      let avg = filter[0].Санал_өгсөн_суралцагчийн_тоо / filter.length;
      filter.forEach(element => {
        element.index = element.Багшид_өгсөн_санал / avg;
      });
      filter.sort((a, b) => {
        return a.index < b.index ? 1 : -1;
      });
      this.bagsh = filter;
      this.isLoad = true;
    },
    getDun() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      //tsetse
      fetch(
        "http://data.num.edu.mn/dataset/b22cc3d9-412b-4919-a777-6aa954dc110b/resource/a40b1a18-be1d-49c2-9e6e-c18f887ca763/download/-2018-autumn.json",
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          console.log("fetched dun");
          this.dun = result;
        })
        .catch(error => console.log("error", error));
    },
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
// tsetse-iin bicsen heseg ehelj bn hihi
new Vue({
  el: ".search",
  data: {
    hicheel: [],
    myData: []
  },
  methods: {
    getData() {
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
          console.log("fetched myData");
          this.myData = result;
          console.log(this.myData);
        })
        .catch(error => console.log("error", error));
    }
  }
});
