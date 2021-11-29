<template>
  <div>
    <v-btn @click="increase">Click</v-btn>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    count: 1,
  }),
  methods: {
    increase() {
      return (this.count += 1);
    },
  },
};
</script>
