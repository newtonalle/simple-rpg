<template>
  <div>
    <h3 id="iconLabelsSectorWiki">Icon Labels</h3>

    <br />
    <br />

    <div class="row">
      <div class="col-4">
        <p>
          👊 (Strength) Indicates how much damage the character will do to their
          target if they hit them
        </p>
        <br />

        <p>
          👊⚡ (Attack Speed) Indicates the speed at which the character will be
          able to attack their target again
        </p>
        <br />

        <p>
          🛡️ (Defense/Defence) Indicates how much damage the character will be
          able to block before having damage dealt to their health (note that
          the minimum damage is 1, and that the defense will always round down
          if its not a whole number [0.5 🛡️ is the same as 0 🛡️ for example])
        </p>
        <br />

        <p>
          ❤️ (Max Health) Indicates how much damage the character can take
          before dying
        </p>
        <br />

        <p>
          🦶💨 (Move Speed) Indicates how much fast the player can move inside a
          boss fight (the calculations goes as follows: wait time = 1 - (move
          speed / 10))
        </p>
        <br />

        <p>
          🪄 (Mana Cost) Indicates how much mana will be spent upon using the
          item's skill/ability
        </p>
        <br />
      </div>

      <div class="col-4">
        <p>
          ⛏⚡ (Mining Speed) Indicates how fast the character will be able to
          mine ores again
        </p>
        <br />

        <p>
          ⛏🍀 (Mining Luck) Indicates how much XP & Items the player will
          receive per ore mined (the calculations goes as follows: (base drop) +
          (1 every 10 ⛏🍀), for every remaining mining luck, the character has
          much percentage of gaining another item [a character with 52⛏🍀 gains
          the base drop, plus 5 items & has 2% chance of gaining another item]),
          the XP gain is proportional to the number of items gained
        </p>
        <br />

        <p>
          🪓⚡ (Foraging Speed) Indicates how fast the character will be able to
          forage plants again
        </p>
        <br />

        <p>
          🪓🍀 (Foraging Luck) Indicates how much XP & Items the player will
          receive per plant foraged (the calculations goes as follows: (base
          drop) + (1 every 10🪓🍀), for every remaining foraging luck, the
          character has much percentage of gaining another item [a character
          with 52🪓🍀 gains the base drop, plus 5 items & has 2% chance of
          gaining another item]), the XP gain is proportional to the number of
          items gained
        </p>
        <br />
      </div>
      <div class="col-4">
        <p>
          💗🗡️ (Active Regeneration) Indicates how much health the item will
          heal every time you hit an enemy
        </p>
        <br />

        <p>
          💗🛡️ (Passive Regeneration) Indicates how much health the item will
          heal every turn, (in a boss fight, every 10 seconds)
        </p>
        <br />

        <p>
          %💥🍀 (Crit Chance) Indicates how likely the character is to land a
          critical hit on an enemy
        </p>
        <br />

        <p>
          x💥👊 (Crit Damage Multiplier) Indicates how much extra damage a
          critical hit dealt by the character will do when compared to a normal
          hit (If the character has 10👊 & 2x💥👊, they will do 20 base damage
          if they land a critical hit)
        </p>
        <br />

        <p>
          %🎯 (Aiming Accuracy) Indicates the chance the character has to land a
          hit with the weapon they are using (this stat is exclusive to
          ranged-aiming weapons)
        </p>
        <br />

        <p>
          🏹 (Arrow Space) Indicates how many arrows can be equipped per battle
          (exclusive to quivers)
        </p>
        <br />
      </div>
    </div>
  </div>
</template>