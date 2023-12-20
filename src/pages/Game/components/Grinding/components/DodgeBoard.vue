<template>
  <div>
    <!-- <div
      v-for="(line, indexasd) in currentDodgeBoard.attackBoard"
      :key="indexasd"
    >
      <span v-for="(space, indexasdd) in line" :key="indexasdd">
        {{ space[currentDodgeBoard.currentAttackStep] }}</span
      >
    </div> -->
    <canvas id="dodgeBoardCanvas" :width="300" :height="300" />
  </div>
</template>

<script>
export default {
  data: () => ({
    plannedMove: -1,

    boardSize: 300,
    inBetweenSpaceMargin: 5,
    playerLocationOutline: 5,

    enemyAttackSpeed: 250,
    attackingSetIntervalId: 24522,
  }),
  computed: {
    currentDodgeBoard() {
      return this.$store.getters.getCurrentDodgeBoard;
    },
    currentEnemy() {
      return this.$store.getters.getCurrentEnemy;
    },
  },
  methods: {
    updateCanvas() {
      if (this.currentEnemy.label && this.currentEnemy.type === "boss") {
        const playerPos = this.currentDodgeBoard.playerPos;
        const attackBoard = this.currentDodgeBoard.attackBoard;
        const currentStep = this.currentDodgeBoard.currentAttackStep;

        var canvas = document.getElementById("dodgeBoardCanvas");

        if (!canvas) {
          return;
        }

        var ctx = canvas.getContext("2d");

        attackBoard.forEach((line, lineIndex) => {
          line.forEach((space, spaceIndex) => {
            switch (space[currentStep]) {
              case 0:
                ctx.fillStyle = "#000000"; // Empty
                break;

              case 1:
                ctx.fillStyle = "#FF0000"; // Attack
                break;

              case 2:
                ctx.fillStyle = "#ffff00"; // Warning
                break;

              default:
                ctx.fillStyle = "#000000"; // Default
                break;
            }

            ctx.fillRect(
              (this.boardSize / 6) * spaceIndex, // X Start
              (this.boardSize / 6) * lineIndex, // Y Start
              this.boardSize / 6 - this.inBetweenSpaceMargin, // X Size
              this.boardSize / 6 - this.inBetweenSpaceMargin // Y Size
            );
          });
        });

        ctx.fillStyle = "#89f0a4";
        ctx.fillRect(
          (this.boardSize / 6) * playerPos[1] + this.playerLocationOutline, // X Start
          (this.boardSize / 6) * playerPos[0] + this.playerLocationOutline, // Y Start
          this.boardSize / 6 -
            this.inBetweenSpaceMargin -
            this.playerLocationOutline * 2, // X Size
          this.boardSize / 6 -
            this.inBetweenSpaceMargin -
            this.playerLocationOutline * 2 // Y Size
        );

        if (attackBoard[playerPos[0]][playerPos[1]][currentStep] === 1) {
          if (this.currentEnemy.label) {
            this.$store.dispatch("attack", {
              user: "currentEnemy",
              target: "player",
            });
          }
        }
      }
    },

    keyPressHandle(keyCode) {
      if (keyCode.key === "a") {
        this.$store.dispatch("playerMove", 0);
      } else if (keyCode.key === "w") {
        this.$store.dispatch("playerMove", 1);
      } else if (keyCode.key === "d") {
        this.$store.dispatch("playerMove", 2);
      } else if (keyCode.key === "s") {
        this.$store.dispatch("playerMove", 3);
      }
      this.updateCanvas();
    },

    stepAttackBoard() {
      this.$store.dispatch("stepAttackBoard");
      this.updateCanvas();
    },
  },
  mounted() {
    window.addEventListener("keydown", this.keyPressHandle);

    this.attackingSetIntervalId = setInterval(() => {
      this.stepAttackBoard();
    }, this.enemyAttackSpeed);
  },

  destroyed() {
    clearInterval(this.attackingSetIntervalId);
    window.removeEventListener("keydown", this.keyPressHandle);
  },
};
</script>