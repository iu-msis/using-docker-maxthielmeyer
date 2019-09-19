var profileApp = new Vue({
  el: '#profileApp',
  data: {
    people: []
  },
  methods: {
    fetchProfile() {
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => {profileApp.people = json})
    },
    onSubmit(){
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => {profileApp.people = json})
    }
  },
  created() {
    this.fetchProfile()
  }
});
