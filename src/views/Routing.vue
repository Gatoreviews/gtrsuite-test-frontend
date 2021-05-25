<!-- NE PAS MODIFIER CE FICHIER -->
<template>
  <div class="routing">
    <div class="routing__description mb-6">
      Dans cet exercice vous devez réaliser une séries de tâches concernant le routing :
      <ul>
        <li>
          <strong>Exercice n°1</strong> : Afficher la valeur contenue dans les paramètres de l'URL quand on clique sur
          le <strong>lien 1</strong>.
        </li>
        <li>
          <strong>Exercice n°2</strong> : Afficher la valeur contenue dans les paramètres de l'URL quand on clique sur
          le <strong>lien 2</strong> en tant que <strong>props</strong>.
        </li>
        <li>
          <strong>Exercice n°3</strong> : Afficher la valeur contenue dans la query de l'URL quand on clique sur le
          <strong>lien 3</strong>.
        </li>
        <li>
          <strong>Exercice n°4</strong> : Afficher la valeur 42 en tant que <strong>props</strong> lorsque l'on clique
          sur le <strong>lien 4</strong>.
        </li>
      </ul>
      Pour ce faire, vous devez rajouter le code manquant dans les différents composants du dossier
      <code>src/components/Routing</code> ainsi que les routes manquantes du fichier
      <code>src/router/router.js</code> en dessous de la ligne commentée.
    </div>
    <div class="routing__actions mb-6">
      <v-btn rounded to="/routing/ex1/42"> Lien 1 </v-btn>
      <v-btn rounded to="/routing/ex2/42"> Lien 2 </v-btn>
      <v-btn rounded to="/routing/ex3?id=42"> Lien 3 </v-btn>
      <v-btn rounded to="/routing/ex4"> Lien 4 </v-btn>
    </div>
    <router-view class="routing__view" />
  </div>
</template>

<script>
export default {
  name: 'Routing',
}
</script>

<style lang="scss" scoped>
.routing {
  &__actions {
    display: flex;
    justify-content: space-around;
  }

  &__view {
    text-align: center;
  }
}
</style>
