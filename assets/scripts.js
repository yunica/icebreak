const { createApp } = Vue;

createApp({
  data() {
    return {
      message: {},
      questions_done: [],
      questions_all: [...questions]
    }
  },
  computed: {
    usageQuestions() {
      // `this` points to the component instance
      return this.questions_done.map(i => i.question)
    }
  },
  methods: {
    doSomething() {
      const index = Math.floor(Math.random() * this.questions_all.length);
      const item = this.questions_all[index];
      this.questions_done = [...this.questions_done, item]
      this.message = {...item};
      this.questions_all = this.questions_all.filter(item_ => item_ !== item)

    }
  }

}).mount('#app')