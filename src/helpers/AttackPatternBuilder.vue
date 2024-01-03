<template>
  <div>
    <div>
      <p>0 - Empty</p>
      <p>1 - Attack</p>
      <p>2 - Warning</p>

      <br />

      <p>To start a new pattern, press F5</p>
    </div>
    <div v-if="!startedPattern">
      <p>Grid Size:</p>
      <input
        style="width: 70px"
        type="number"
        v-model="gridSize"
        placeholder="Insert grid size"
      />
      <br />
      <br />
      <br />
      <button @click="startPattern()" class="btn btn-success">
        Start Pattern
      </button>
    </div>
    <div v-else>
      <br />
      <br />
      <button @click="stepCreate" class="btn btn-success">Next Step</button>
      <br />
      <br />
      <div
        v-for="(lineC, lineCIndex) in currentGrid"
        :key="`${lineCIndex}-lineCIndex`"
      >
        <span
          v-for="(spaceC, spaceCIndex) in lineC"
          :key="`${spaceCIndex}-spaceCIndex`"
        >
          <input
            style="width: 70px; margin-left: 10px"
            type="number"
            v-model="currentGrid[lineCIndex][spaceCIndex]"
            :placeholder="`[${lineCIndex}][${spaceCIndex}]`"
          />
        </span>
        <br />
        <br />
      </div>

      <br />
      <br />

      <!-- All Grids -->
      <div
        v-for="(stepCounter, stepIndex) in fullGrid[0][0]"
        :key="`${stepIndex}-stepIndexin`"
      >
        <p>#{{ stepIndex }}</p>
        <!-- Time Grid -->

        <div
          v-for="(line, lineIndex) in fullGrid"
          :key="`${lineIndex}-lineIndexin`"
        >
          <!-- Line -->
          <span
            v-for="(space, spaceIndex) in line"
            :key="`${spaceIndex}-spaceIndexin`"
          >
            <!-- Space {{stepIndex}} -->

            {{ space[stepIndex] }}
          </span>
        </div>
        <br />
      </div>
      <p>{{ fullGrid }}</p>

      <br />

      <button @click="resetPattern()" class="btn btn-danger">
        Reset Pattern
      </button>
    </div>
  </div>
</template>

<script>
const clonedeep = require("lodash.clonedeep");
export default {
  data: () => ({
    gridSize: 6,
    startedPattern: false,
    currentGrid: [],

    fullGrid: [],
  }),
  methods: {
    stepCreate() {
      this.currentGrid.forEach((line, lineIndex) => {
        line.forEach((space, spaceIndex) => {
          this.fullGrid[lineIndex][spaceIndex].push(Number(space));
        });
      });
    },

    startPattern() {
      let line = [];

      for (let index = 0; index < this.gridSize; index++) {
        line.push(0);
      }

      for (let index = 0; index < this.gridSize; index++) {
        this.currentGrid.push(clonedeep(line));
      }

      let lineTridimension = [];

      for (let index = 0; index < this.gridSize; index++) {
        lineTridimension.push([]);
      }

      for (let index = 0; index < this.gridSize; index++) {
        this.fullGrid.push(clonedeep(lineTridimension));
      }

      this.startedPattern = true;
    },

    resetPattern() {
      if (
        confirm(
          "This will erase the current pattern being built, are you sure you want to continue?"
        )
      ) {
        this.gridSize = 6;
        this.currentGrid = [];
        this.fullGrid = [];
        this.startedPattern = false;
      }
    },
  },
};
</script>