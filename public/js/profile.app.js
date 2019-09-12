var profileApp = new Vue({
  el: '#profileApp',
  data: {
    people: []
  },
  methods: {
    fetchProfile() {
      // Means the same at this
      fetch('./randomuser.me-sample.json')
      .then(response => response.json())
      .then(json => {profileApp.people = json})
    }
  },
  created() {
    this.fetchProfile()
  }
});
