<template>
  <div class="wrapper">
    <div class="bg-animation">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </div>
    <div class="controls">
      <select name="" id="" v-model="selectedOption">
        <option
          v-for="(option, key) in searchOptions"
          :key="key"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
      <input type="number" v-model="selectedNumber" />
      <button @click="getData">Search</button>
    </div>

    <div class="container">
      <div class="header">
        <div class="icon"></div>
        <h1 class="title">{{ selectedOption }} #{{ selectedNumber }}</h1>
      </div>
      <div class="info">
        <div class="first-column"></div>

        <div class="second-column">
          <div>
            <div
              v-for="(obj, index, key) in data"
              :key="key"
              class="characters"
            >
              <h3 class="subtitle" v-if="typeof obj === 'string'">
                {{ index }}
              </h3>
              <ul v-if="typeof obj === 'string'">
                {{
                  obj
                }}
              </ul>
            </div>

            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedNumber: 1,
      selectedOption: "people",
      searchOptions: [
        "films",
        "planets",
        "people",
        "starships",
        "species",
        "vehicles",
      ],
      data: {},
    };
  },
  methods: {
    getData() {
      fetch(
        `https://swapi.dev/api/${this.selectedOption}/${this.selectedNumber}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("SUCCESS");
          this.data = data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
