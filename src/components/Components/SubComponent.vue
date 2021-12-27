<template>
  <div class="components-sub-component">
    <div class="components-sub-component__title font-weight-bold text-subtitle-1 mb-4">Sous Composant</div>
    <div class="mb-12">
      <div>
        La valeur du champ du composant principal doit s'afficher ici :
        <strong><!-- Renseigner la valeur ici --></strong>
      </div>
      <v-divider class="my-6" />
      <v-btn>Incrémentation du compteur parent</v-btn>
    </div>
    <LastComponent />
  </div>
</template>

<script>
import LastComponent from '@/components/Components/LastComponent.vue'

export default {
  name: 'ComponentsSubComponent',
  data() {
    return {
      buttonClicked: 0,
    }
  },
  components: {
    LastComponent,
  },
}
</script>
