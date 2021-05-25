<template>
  <div class="tests">
    <div class="tests__description mb-6">
      Dnas cet exercice vous allez devoir écrire des tests unitaires (avec
      <a href="https://jestjs.io/docs/getting-started" target="_blank">Jest</a>) pour le premier composant et des tests
      end-to-end (avec <a href="https://docs.cypress.io/guides/overview/why-cypress" target="_blank">Cypress</a>) pour
      le second.<br />
      Pour ce faire vous devez rajouter le code manquant dans le fichier <code>tests/unit/test1.spec.js</code> pour la
      partie tests unitaires (concerne le composant <code>src/components/Tests/Test1.vue</code>) et dans le fichier
      <code>tests/e2e/specs/test2.js</code> pour la partie tests e2e (concerne le composant
      <code>src/components/Tests/Test2.vue</code>).
    </div>
    <div class="tests__content">
      <Test1 />
      <Test2 />
    </div>
  </div>
</template>

<script>
import Test1 from '@/components/Tests/Test1.vue'
import Test2 from '@/components/Tests/Test2.vue'

export default {
  name: 'Tests',
  components: {
    Test1,
    Test2,
  },
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.tests {
  &__content {
    display: flex;
    gap: 24px;
    width: 100%;
  }
}
</style>
