new Vue({
  el: "#con",
  data: {
    obinfo: {},
    search: "",
    myData: [],
    myObj: {},
    loaderClass: "loading"
  },
  created: function() {
    // this.getData();
  },
  methods: {
    find() {
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
    },
    // getValue(i) {
    //   this.val = i.Name;
    //   document.getElementsByClassName("option")[0].style.display = "none";
    //   filteredClass = [];
    // },
    getObj(i) {
      console.log(i);
      //this.getValue(i.Name);
      //this.search = i.Name + "(" + i.clasId + ")";
      this.myObj = i;
      document.getElementsByClassName("option-container")[0].style.display =
        "none";
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
      this.search = "";
    }
  }
  // computed: {
  //   filteredClass: function() {
  //     return this.myData.filter(i => {
  //       return i.Name.toLowerCase().includes(this.search.toLowerCase());
  //     });
  //   }
  // }
});
