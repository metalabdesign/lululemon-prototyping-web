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
            <li v-for="(accolade, index) in profile.accolades" :key="index">
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
            <li v-for="(fact, index) in profile.funFacts" :key="index">
              {{ fact }}
            </li>
          </ul>
        </accordion-content>        
      </accordion>
    </v-container>
  </div>
</template>
  
<script>
import { mapActions, mapState } from "vuex";
import AmbassadorHero from "./AmbassadorHero";
import { Accordion, AccordionContent } from "@/components/Base/Accordion";
import truncate from 'vue-truncate-collapsed';
import { himifier } from "@/utils/pronouner";

export default {
  name: 'Ambassador',
  components: { AmbassadorHero, Accordion, AccordionContent, truncate },
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
