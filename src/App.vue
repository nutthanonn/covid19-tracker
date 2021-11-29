<template>
  <div>
    <v-btn elevatio="24"> Click </v-btn>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    count: 1,
    name: "nut",
  }),
  methods: {
    increase() {
      return (this.count += 1);
    },
    inputFunc(e) {
      return (this.name = e.target.value);
    },
    submitForm() {
      alert("submit ful");
    },
  },
};
</script>
