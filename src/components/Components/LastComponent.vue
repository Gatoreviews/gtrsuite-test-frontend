<template>
  <div class="components-last-component">
    <div class="components-last-component__title font-weight-bold text-subtitle-1 mb-4">Dernier Composant</div>
    <div>
      L'état du switch du composant principal est : <strong><!-- valeur à renseigner ici -->{{ switchValue() }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsLastComponent',
  inject: ['switchValue'],
}
</script>
