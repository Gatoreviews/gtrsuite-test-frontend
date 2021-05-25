<template>
  <div class="translations">
    <div class="translations__description mb-6">
      Dans cet exercice vous devez utiliser
      <a href="https://kazupon.github.io/vue-i18n/" target="_blank">Vue i18n</a> (déjà initialisé dans le projet) afin
      d'afficher des traductions en <strong>Français</strong> et en <strong>Anglais</strong> en utilisant le sélecteur
      de langue.<br />
      Pour ce faire, vous devez remplacer le code entre commentaire qui se trouve dans le fichier
      <code>src/views/Translations.vue</code> et rajouter les traductions dans les fichiers
      <code>src/i18n/languages/fr.json</code> et <code>src/i18n/languages/en.json</code>.
    </div>
    <v-select solo :items="locales" v-model="data" @change="onChange" />
    <div class="mb-6">
      <div class="font-weight-bold text-subtitle-1">Exercice n°1 :</div>
      <div class="mb-2">Remplacer la phrase ci-dessous par une traduction i18n.</div>
      <em>> {{ $t('translations.first') }}</em>
    </div>
    <div class="mb-6">
      <div class="font-weight-bold text-subtitle-1">Exercice n°2 :</div>
      <div class="mb-2">
        Remplacer la phrase ci-dessous par une traduction i18n utilisant la variable <code>hours</code>.
      </div>
      <em>
        >
        {{
          $t('translations.second', {
            hours,
          })
        }}
      </em>
    </div>
    <div class="font-weight-bold text-subtitle-1">Exercice n°3 :</div>
    <div class="mb-2">
      <div>
        Remplacer la phrase ci-dessous par une traduction i18n utilisant la variable <code>nbResults</code> et gérant la
        pluralisation lorsque l'on change sa valeur.
      </div>
    </div>
    <v-select outlined :items="results" v-model="nbResults" label="Valeur de nbResults"></v-select>
    <div>
      <em>> {{ $tc('translations.third', nbResults, { nbResults }) }}</em>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Translations',
  mounted() {
    this.$i18n.locale = 'fr'
  },
  data() {
    return {
      data: 'fr',
      locales: [
        {
          text: 'Français',
          value: 'fr',
        },
        {
          text: 'English',
          value: 'en',
        },
      ],
      hours: '24',
      results: [0, 1, 5],
      nbResults: 0,
    }
  },
  methods: {
    onChange(locale) {
      this.$i18n.locale = locale
    },
  },
}
</script>
