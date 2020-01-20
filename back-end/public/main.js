new Vue({
  el: "#con",
  data: {
    obinfo: {},
    id: "",
    val: "",
    search: "",
    myData: [],
    myObj: {}
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      fetch("http://localhost:8080/api/getClasses", requestOptions)
        .then(response => response.json())
        .then(result => {
          this.myData = result;
          console.log(this.myData);
        })
        .catch(error => console.log("error", error));
    },
    getValue(i) {
      this.val = i.Name;
      document.getElementsByClassName("option")[0].style.display = "none";
      filteredClass = [];
    },
    getObj(i) {
      console.log(i);
      this.getValue(i.Name);
      this.search = i.Name + "(" + i.clasId + ")";
      this.myObj = i;
      document.getElementsByClassName("option-container")[0].style.display =
        "none";
    },
    getObInfo() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      let url =
        "http://localhost:8080/classinfo/" +
        this.myObj.clasId +
        "_" +
        myObj.Name;
      fetch(url, requestOptions) //id g damjulna
        .then(response => response.json())
        .then(result => {
          console.log("fetched myData", result[0]);
          this.obinfo = result[0];
        })
        .catch(error => console.log("error", error));
      this.search = "";
    }
  },
  computed: {
    filteredClass: function() {
      return this.myData.filter(i => {
        return i.Name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
});
