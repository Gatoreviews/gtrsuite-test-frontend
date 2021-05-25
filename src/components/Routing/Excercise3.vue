<template>
  <div class="routing-exercise3">
    <div class="routing-exercise3__description">
      Cet exercice est validé si le nombre 42 s'affiche ci-dessous (via la query de l'URL) :
    </div>
    <strong><!-- Nombre à afficher ici -->{{ $route.query.id }}</strong>
  </div>
</template>

<script>
export default {
  name: 'RoutingExercise3',
}
</script>
