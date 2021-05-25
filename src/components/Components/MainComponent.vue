<template>
  <div class="components-main-component">
    <div class="components-main-component__title font-weight-bold text-subtitle-1 mb-4">Composant principal</div>
    <div class="mb-12">
      <v-text-field
        v-model="textfield"
        placeholder="Valeur à passer au sous-composant"
        solo
        hide-details
      ></v-text-field>

      <v-divider class="my-6" />

      <div>
        Le bouton du sous-composant a été cliqué <strong>{{ buttonClicked }}</strong> fois.
      </div>

      <v-divider class="my-6" />

      <v-switch v-model="switchValue" inset hide-details label="Valeur à transmettre au dernier composant"></v-switch>
    </div>
    <SubComponent :value="textfield" @onButtonClick="onClick" />
  </div>
</template>

<script>
import SubComponent from '@/components/Components/SubComponent.vue'

export default {
  name: 'ComponentsMainComponent',
  components: {
    SubComponent,
  },
  data() {
    return {
      textfield: '',
      buttonClicked: 0,
      switchValue: false,
    }
  },
  provide() {
    return {
      switchValue: () => this.switchValue,
    }
  },
  methods: {
    onClick(value) {
      this.buttonClicked = value
    },
  },
}
</script>

<style lang="scss" scoped>
.components-main-component {
}
</style>
