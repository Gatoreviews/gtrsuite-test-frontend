<template>
  <div class="components">
    <div class="components__description mb-6">
      Dans cet exercice vous devez réaliser une séries de tâches concernant la communication entre les composants :
      <ul>
        <li>
          <strong>Exercice n°1</strong> : Transmettre la valeur du champ du <strong>composant principal</strong> au
          <strong>sous-composant</strong>.
        </li>
        <li>
          <strong>Exercice n°2</strong> : Récupérer le nombre de clic du bouton du <strong>sous-composant</strong> vers
          le <strong>composant principal</strong>.
        </li>
        <li>
          <strong>Exercice n°3</strong> : Transmettre l'état du switch du <strong>composant principal</strong> vers le
          <strong>dernier composant</strong> de façon <strong>optimisée</strong>.
        </li>
      </ul>
      Pour ce faire, vous devez rajouter le code manquant dans les différents composants du dossier
      <code>src/components/Components</code>.
    </div>
    <MainComponent />
  </div>
</template>

<script>
import MainComponent from '@/components/Components/MainComponent.vue'

export default {
  name: 'Components',
  components: {
    MainComponent,
  },
}
</script>
