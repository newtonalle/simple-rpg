<template>
  <div>
    <div v-if="currentEnemy.type === 'boss'">
      <!-- Current Boss Stats -->

      <div class="row">
        <div class="col-6">
          <p>
            {{ currentEnemy.stats.health }}/{{ currentEnemy.stats.maxHealth }}
            ❤️
          </p>
          <p>{{ currentEnemy.stats.defense }} 🛡️</p>
          <p>{{ currentEnemy.stats.strength }} 👊</p>
        </div>
        <div class="col-6">
          <p>{{ currentEnemy.stats.critChance.toFixed(2) }}% ️💥🍀</p>
          <p>{{ currentEnemy.stats.critDamageMultiplier.toFixed(2) }}x ️💥👊</p>
          <p>{{ currentEnemy.stats.attackDelay }}s per attack</p>
        </div>
      </div>

      <p>
        {{ currentEnemy.bossStats.gridAttackDamage.amount }}
        <span
          v-if="
            currentEnemy.bossStats.gridAttackDamage.type.includes('percentage')
          "
          >%</span
        >
        👊
        <span
          v-if="currentEnemy.bossStats.gridAttackDamage.type.includes('true')"
          >(💔)</span
        >
      </p>
    </div>
    <div v-else>
      <!-- Current Enemy Stats -->

      <div class="row">
        <div class="col-6">
          <p>
            {{ currentEnemy.stats.health }}/{{ currentEnemy.stats.maxHealth }}
            ❤️
          </p>
          <p>{{ currentEnemy.stats.defense }} 🛡️</p>
          <p>{{ currentEnemy.stats.strength }} 👊</p>
        </div>
        <div class="col-6">
          <p>{{ currentEnemy.stats.critChance.toFixed(2) }}% ️💥🍀</p>
          <p>{{ currentEnemy.stats.critDamageMultiplier.toFixed(2) }}x ️💥👊</p>
          <p>{{ currentEnemy.stats.attackDelay }}s per attack</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { currentEnemy: Object },
};
</script>