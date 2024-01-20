<template>
  <div>
    <div class="row">
      <div class="col">
        <p>{{ player.stats.health }}/{{ equippedPlayer.maxHealth }} ❤️</p>
        <p>{{ player.stats.mana }}/{{ equippedPlayer.maxMana }} 🪄</p>
        <p>{{ player.coins }} 🪙</p>
      </div>
      <div class="col">
        <p>
          {{ equippedPlayer.strength }} 👊<span v-if="equippedPlayer.trueDamage"
            >💔</span
          >
        </p>
        <p>{{ equippedPlayer.defense.toFixed(1) }} 🛡️</p>
        <p>{{ equippedPlayer.attackSpeed }}⚡👊</p>
        <p>{{ equippedPlayer.activeRegeneration }}💗🗡️</p>
        <p>{{ equippedPlayer.passiveRegeneration }}💗🛡️</p>
      </div>
      <div class="col">
        <p>{{ equippedPlayer.critChance.toFixed(2) }}% 💥🍀</p>
        <p>{{ equippedPlayer.critDamageMultiplier.toFixed(2) }}x 💥👊</p>
        <p>{{ equippedPlayer.moveSpeed }}🦶💨</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { player: Object, equippedPlayer: Object },
};
</script>