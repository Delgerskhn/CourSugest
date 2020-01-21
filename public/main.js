new Vue({
  el: "#con",
  data: {
    obinfo: {},
    search: "",
    myData: [],
    myObj: {},
    loaderClass: "loading",
    isSearched: false,
    MarkArrF: [],
    MarkArrS: [],
    teaF: [],
    teaS: []
  },
  methods: {
    find() {
      if (this.search.length > 4) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = {
          title: this.search
        };
        var requestOptions = {
          method: "POST",
          redirect: "follow",
          headers: myHeaders,
          body: JSON.stringify(raw)
        };
        fetch("/api/findByTitle", requestOptions)
          .then(response => {
            return response.json();
          })
          .then(result => {
            this.myData = result;
            this.loaderClass = "body-info";
            this.isSearched = true;
          })
          .catch(error => console.log("error", error));
      } else {
        this.search = "4-с дээш үсэгтэй үг оруулна уу!";
      }
    },
    getObj(i) {
      this.myObj = i;
      this.isSearched = false;
      this.myData = [];
      this.search = "";
      this.getObInfo();
    },
    getObInfo() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = {
        name: this.myObj.Name,
        id: this.myObj.clasId
      };
      var requestOptions = {
        method: "POST",
        redirect: "follow",
        headers: myHeaders,
        body: JSON.stringify(raw)
      };
      fetch("/api/classinfo", requestOptions) //id g damjulna
        .then(response => response.json())
        .then(result => {
          console.log("fetched myData", result);
          this.obinfo = result.info;
          this.MarkArrF = result.marksfall;
          this.MarkArrS = result.marksspr;
          this.teaS = result.teachersspr.map(function(x) {
            return {
              Name: x.Багшийн_нэр,
              Vote: x.Багшид_өгсөн_санал
            };
          });
          this.teaF = result.teachersfall.map(function(x) {
            return {
              Name: x.Багшийн_нэр,
              Vote: x.Багшид_өгсөн_санал
            };
          });
        })
        .catch(error => console.log("error", error));
    }
  }
});
