<template>
  <div class="responsive">
    <div class="responsive__description mb-6">
      Dans cet exercice vous devez adapter le contenu ci-dessous pour qu'il soit compatible sur mobile, tablette et
      résolutions supérieures.<br />
      Pour ce faire, vous devez rajouter le style SCSS manquant (au
      <a href="https://www.alticreation.com/blog/bem-pour-le-css/" target="_blank">format BEM</a>) dans le fichier
      <code>src/views/Responsive.vue</code> en vous basant sur les maquettes
      <a href="responsive-mobile.png" target="_blank">mobile</a>,
      <a href="responsive-tablet.png" target="_blank">tablette</a> et
      <a href="responsive-desktop.png" target="_blank">desktop</a>.<br />
      <strong>Attention :</strong> Vous ne devez pas modifier le HTML.
    </div>
    <div class="mx-n4 mb-4 mx-sm-n6 mb-sm-n6">
      <!-- Début de la section à designer -->
      <div class="responsive__header">
        <v-icon class="responsive__header__menu-toggle">mdi-menu</v-icon>
        <div class="responsive__header__logo">
          <img :src="require('@/assets/images/logo-dark.svg')" width="150" class="responsive__header__logo__img" />
        </div>
        <div class="responsive__header__navigation">
          <div class="responsive__header__navigation__item" v-for="(item, idx) in menu" :key="`navigation-${idx}`">
            <v-icon class="responsive__header__navigation__item__icon">
              {{ item.icon }}
            </v-icon>
            <span class="responsive__header__navigation__item__label">
              {{ item.text }}
            </span>
          </div>
        </div>
      </div>
      <div class="responsive__container">
        <div class="responsive__container__top">
          <div class="responsive__container__top--align-start">
            <div class="responsive__container__top__title">Titre de la page</div>
            <div class="responsive__container__top__breadcrumb">
              <v-icon class="responsive__container__top__breadcrumb__home" color="#b6b6c3">mdi-home</v-icon>
              <div
                class="responsive__container__top__breadcrumb__item"
                v-for="(item, idx) in breadcrumb"
                :key="`breadcrumb-${idx}`"
              >
                <div class="responsive__container__top__breadcrumb__item__separator">•</div>
                {{ item }}
              </div>
            </div>
          </div>
          <div class="responsive__container__top--align-end">
            <v-btn elevation="2" rounded class="responsive__container__top__cta"> Ajouter un élément </v-btn>
          </div>
        </div>
        <div class="responsive__container__elements">
          <v-card
            class="responsive__container__elements__item"
            v-for="(element, idx) in elements"
            :key="`element-${idx}`"
            outlined
          >
            <v-img
              :src="element.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="element.title"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="responsive__navigation-mobile">
        <div class="responsive__navigation-mobile__item" v-for="(item, idx) in menu" :key="`menu-${idx}`">
          <v-icon class="responsive__navigation-mobile__item__icon">
            {{ item.icon }}
          </v-icon>
          <span class="responsive__navigation-mobile__item__label">
            {{ item.text }}
          </span>
        </div>
      </div>
      <!-- Fin de la section à designer -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Responsive',
  data() {
    return {
      breadcrumb: ['Lien 1', 'Lien 2', 'Lien 3'],
      menu: [
        {
          text: 'Menu 1',
          icon: 'mdi-alpha-a-circle',
        },
        {
          text: 'Menu 2',
          icon: 'mdi-alpha-b-circle',
        },
        {
          text: 'Menu 3',
          icon: 'mdi-alpha-c-circle',
        },
        {
          text: 'Menu 4',
          icon: 'mdi-alpha-d-circle',
        },
      ],
      elements: [
        {
          title: 'Titre 1',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 2',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 3',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 4',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 5',
          src: 'https://picsum.photos/200/300',
        },
        {
          title: 'Titre 6',
          src: 'https://picsum.photos/200/300',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.responsive {
  /* Rajouter le SCSS manquant (au format BEM) */
  &__header {
    display: flex;
    align-items: center;
    background-color: lightgray;
    padding: 12px 16px;

    @media (min-width: 768px) {
      padding: 12px 24px;
    }

    &__menu-toggle {
      @media (min-width: 992px) {
        display: none;
      }
    }

    &__logo {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;

      @media (min-width: 992px) {
        flex: initial;
        justify-content: flex-start;
      }
    }

    &__navigation {
      display: none;

      @media (min-width: 992px) {
        display: flex;
        align-items: center;
        margin-left: 48px;
      }

      &__item {
        @media (min-width: 992px) {
          display: flex;
          align-items: center;
          margin-left: 24px;
        }

        &:first-child {
          @media (min-width: 992px) {
            margin-left: 0;
          }
        }

        &__label {
          @media (min-width: 992px) {
            margin-left: 8px;
          }
        }
      }
    }
  }

  &__container {
    padding: 16px 16px 124px 16px;

    @media (min-width: 768px) {
      padding: 24px 24px 80px 24px;
    }

    @media (min-width: 992px) {
      padding: 24px;
    }

    &__top {
      display: flex;
      align-items: center;

      &--align-start {
        flex: 1;
        justify-content: flex-start;
      }

      &--align-end {
        justify-content: flex-end;
      }

      &__title {
        font-size: 1.125rem;
        font-weight: 600;
      }

      &__breadcrumb {
        display: flex;
        align-items: center;
        margin-top: 4px;
        color: #b6b6c3;
        font-size: 0.875rem;

        &__home {
          margin-top: -2px;
          margin-left: -2px;
          font-size: 1.25rem;
        }

        &__item {
          display: flex;
          align-items: center;

          &__separator {
            margin: 0 8px;
          }
        }
      }

      &__cta {
        position: fixed;
        right: 16px;
        bottom: 72px;
        z-index: 2;

        @media (min-width: 768px) {
          position: initial;
        }
      }
    }

    &__elements {
      margin-top: 24px;

      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
      }

      &__item {
        margin-top: 16px;

        @media (min-width: 768px) {
          flex-basis: calc(50% - 24px / 2);
          margin-top: 0;
        }

        @media (min-width: 992px) {
          flex-basis: calc(100% / 3 - 24px * 2 / 3);
        }

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }

  &__navigation-mobile {
    display: flex;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    border-top: 1px solid #eceef4;
    background-color: #fff;
    height: 56px;

    @media (min-width: 992px) {
      display: none;
    }

    &__item {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &__label {
        margin-top: 3px;
        font-size: 0.75rem;
      }
    }
  }
}
</style>
