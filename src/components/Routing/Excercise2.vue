<template>
  <div class="routing-exercise2">
    <div class="routing-exercise2__description">
      Cet exercice est validé si le nombre 42 s'affiche ci-dessous (via props provenant des params de l'URL) :
    </div>
    <strong><!-- Nombre à afficher ici -->{{ id }}</strong>
  </div>
</template>

<script>
export default {
  name: 'RoutingExercise2',
  props: ['id'],
}
</script>
