<template>
  <div class="seo">
    <div class="seo__description mb-6">
      Dans cet exercice vous devez analyser l'image ci-dessous et expliquer ce que vous appliqueriez en termes de
      semantique SEO (h1, h2, meta, etc...). Vous devez également donner un exemple de données structurées pour cette
      page au format JSON-LD en vous basant sur la structure
      <a href="https://schema.org/docs/documents.html" target="_blank">Schema.org</a>.
    </div>
    <v-img :src="require('@/assets/images/seo.png')" />
    <script type="application/ld+json">
      {
        "@context": "http://schema.org/",
        "@type": "Product",
        "name": "ASUS F17-TUF766LI-HX188T",
        "image": [
          "https://media.materiel.net/r900/products/MN0005686548_1_0005787169.jpg",
          "https://media.materiel.net/r900/products/MN0005675415_1_0005675959_0005684223_0005787163.jpg",
          "https://media.materiel.net/r900/products/MN0005675416_1_0005675960_0005684224_0005787164.jpg",
          "https://media.materiel.net/r900/products/MN0005675417_1_0005675961_0005684225_0005787165.jpg",
          "https://media.materiel.net/r900/products/MN0005675418_1_0005675962_0005684226_0005787166.jpg",
          "https://media.materiel.net/r900/products/MN0005675419_1_0005675963_0005684227_0005787167.jpg",
          "https://media.materiel.net/r900/products/MN0005675420_1_0005675964_0005684228_0005787168.jpg"
        ],
        "description": "Avec le PC Portable Gamer Asus F17 TUF766LI-HX188T, Asus renouvelle sa gamme TUF (The Ultimate Force) ! Il profite de l'arrivée des nouvelles cartes graphiques NVIDIA pour s'équiper d'une GTX 1650Ti et d'un processeur Intel de génération Comet Lake avec le Core i5-10300H. Le reste des composants n'est pas en reste : dalle IPS 144 Hz Full HD bord à bord et stockage SSD grosse capacité sont de la partie pour vous offrir une expérience de jeu intense !",
        "mpn": "90NR03S1-M03910",
        "sku": "AR202011240248",
        "brand": {
          "@type": "Brand",
          "name": "ASUS"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "9",
          "reviewCount": "2",
          "bestRating": "10",
          "worstRating": "0"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "availability": "http://schema.org/InStock",
          "itemCondition": "http://schema.org/NewCondition",
          "price": "1099.94",
          "url": "https://www.materiel.net/produit/202011240248.html"
        }
      }
    </script>
  </div>
</template>

<script>
export default {
  name: 'Seo',
}
</script>

<style lang="scss" scoped>
.seo {
}
</style>
