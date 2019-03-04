<template>
  <div class="ambassadorDetailsPage" v-if="!loading && profile">
    <AmbassadorHero
      :src="profile.coverImage"
      :name="fullName"
      :locationLabel="profile.locationLabel"
      :ambassadorType="profile.ambassadorType"
      :disciplines="profile.disciplines"
      :storeLabel="profile.storeLabel"
    ></AmbassadorHero>
    <v-container>
      <h2 class="display-3 mb-1">Getting to Know <span class="title-pronoun text-capitalize">{{ pronoun }}</span></h2>
      <div v-if="profile.accolades && profile.accolades.length" class="qualifications-hightlight mb-1">{{ profile.accolades[0] }}</div>
      <div class="mb-3">
        <truncate clamp="... more" :length="180" less="less" :text="profile.longBio"/>
      </div>
      <accordion>
        <accordion-content v-if="profile.accolades && profile.accolades.length > 0">
          <div class="info-accordion-header" slot="header">Qualifications</div>
          <ul>
            <li v-for="(accolade, index) in profile.accolades" :key="accolade">
              {{ accolade }}
            </li>
          </ul>
        </accordion-content>
        <accordion-content v-if="profile.whyWeLove">
          <div class="info-accordion-header" slot="header">Why We Love</div>
          <div>{{ profile.whyWeLove }}</div>
        </accordion-content>
        <accordion-content v-if="profile.funFacts && profile.funFacts.length > 0">
          <div class="info-accordion-header" slot="header">Fun Facts</div>
          <ul>
            <li v-for="(fact, index) in profile.funFacts" :key="fact">
              {{ fact }}
            </li>
          </ul>
        </accordion-content>        
      </accordion>
    </v-container>

    <v-container>
      <dot-carousel :title="`${possession} Upcoming Classes`">
        <slide v-for="i in 5" :key="i">
          <v-img class="CarouselImage" src="https://c.stocksy.com/a/Y5L000/z9/81068.jpg" cover height="300" style="filter: grayscale(100);">
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-btn>RSVP</v-btn>
            </v-layout>
          </v-img>
          <h3>Get Grounded, Underground</h3>
          <div>
            <v-icon>access_time</v-icon> 8AM • 1H
            <v-icon>attach_money</v-icon> Free
          </div>
          <div><v-icon>location_on</v-icon> Pacific Centre</div>
        </slide>
      </dot-carousel>
    </v-container>
  </div>
</template>
  
<script>
import { mapActions, mapState } from "vuex";
import truncate from 'vue-truncate-collapsed';
import { Slide } from "vue-carousel";

import AmbassadorHero from "./AmbassadorHero";
import { Accordion, AccordionContent } from "@/components/Base/Accordion";
import { himifier, hisifier } from "@/utils/pronouner";
import DotCarousel from "@/components/Partial/DotCarousel";

export default {
  name: 'Ambassador',
  components: { AmbassadorHero, Accordion, AccordionContent, truncate, DotCarousel, Slide },
  mounted() {
    this.fetchDetails(this.$route.params.id)
  },
  computed: {
    ...mapState({
      profile: state => state.ambassador.details,
      loading: state => state.ambassador.loading,
    }),
    fullName: function () {
      return `${this.profile.firstName} ${this.profile.lastName}`;
    },
    pronoun: function () {
      return himifier(this.profile.gender);
    },
    possession: function () {
      return hisifier(this.profile.gender);
    }
  },
  methods: {
    ...mapActions('ambassador', ['fetchDetails'])
  }
};
</script>

<style lang="styl" scoped>
  .ambassadorDetailsPage {
    > * {
      margin-bottom: 16px;
    }
    .qualifications-hightlight {
      color: rgba(0, 0, 0, 0.4);
    }
    .info-accordion-header {
      color: rgba(0, 0, 0, 0.8);
    }
  }
</style>

<style lang="styl">
  .DotCarousel .DotNav-title {
    text-transform: capitalize;
  }
</style>