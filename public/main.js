new Vue({
  el: "#con",
  data: {
    obinfo: {},
    search: "",
    myData: [],
    myObj: {},
    loaderClass: "loading"
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
            console.log(response);
            return response.json();
          })
          .then(result => {
            this.myData = result;
            this.loaderClass = "body-info";
            console.log(this.myData);
          })
          .catch(error => console.log("error", error));
        console.log(this.myData);
        document.getElementsByClassName("option-container")[0].style.display =
          "block";
      } else {
        this.search = "4-с дээш урттай үг оруулна уу?";
      }
    },
    getObj(i) {
      console.log(i);
      this.myObj = i;
      document.getElementsByClassName("option-container")[0].style.display =
        "none";
      this.myData = [];
      this.search = "";
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
          this.obinfo = result[0];
        })
        .catch(error => console.log("error", error));
    }
  }
});
