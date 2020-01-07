new Vue({
  el: ".container",
  data: {
    msg: "my message",
    class: {},
    surguuli: "",
    tenhim: "",
    hicheel: ""
  },
  created() {
    getClass();
  },
  methods: {
    jishe() {},
    getClass() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      let data;
      fetch(
        "http://data.num.edu.mn/dataset/8679868d-004a-4a25-b4c1-0a9d36ba4945/resource/838e4aa1-b0fa-40c1-a7e4-71b9cb47fcfb/download/-2018-autumn.json",
        requestOptions
      )
        .then(response => response.text())
        .then(result => (data = result))
        .catch(error => console.log("error", error));
    }
  }
});
