<template>
  <div>
    <carousel
      :perPageCustom="[[320, 2], [640, 4]]"
      :spacePadding="10"
      :mouse-drag="true"
      :loop="true"
      :centerMode="false"
      :scrollPerPage="false"
    >
      <slide v-for="(sl, i) in slides" :key="i" class="CarouselSlide">
        <v-img class="CarouselImage" :src="sl.image" cover height="300">
          <v-layout column fill-height>
            <v-spacer></v-spacer>
            <v-btn>RSVP</v-btn>
          </v-layout>
        </v-img>
        <h3>{{ sl.title }}</h3>
        <div>
          <v-icon>access_time</v-icon> {{ sl.time }} • {{ sl.duration }}
          <v-icon>attach_money</v-icon> {{ sl.price }}
        </div>
        <div><v-icon>location_on</v-icon> {{ sl.venue }}</div>
        <div>with {{ sl.ambassador }}</div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  // This is named as such to avoid collision with the existing <carousel />
  name: "CarouselComponent",
  components: { Carousel, Slide },
  data() {
    return {
      slides: [
        {
          title: "Get Grounded, Underground",
          image: "https://c.stocksy.com/a/Y5L000/z9/81068.jpg",
          time: "8AM",
          duration: "1H",
          price: "Free",
          venue: "Pacific Centre",
          ambassador: "Courtney Bailey"
        },
        {
          title: "Get Grounded, Underground",
          image: "https://c.stocksy.com/a/Y5L000/z9/81068.jpg",
          time: "8AM",
          duration: "1H",
          price: "Free",
          venue: "Pacific Centre",
          ambassador: "Courtney Bailey"
        },
        {
          title: "Get Grounded, Underground",
          image: "https://c.stocksy.com/a/Y5L000/z9/81068.jpg",
          time: "8AM",
          duration: "1H",
          price: "Free",
          venue: "Pacific Centre",
          ambassador: "Courtney Bailey"
        },
        {
          title: "Get Grounded, Underground",
          image: "https://c.stocksy.com/a/Y5L000/z9/81068.jpg",
          time: "8AM",
          duration: "1H",
          price: "Free",
          venue: "Pacific Centre",
          ambassador: "Courtney Bailey"
        },
        {
          title: "Get Grounded, Underground",
          image: "https://c.stocksy.com/a/Y5L000/z9/81068.jpg",
          time: "8AM",
          duration: "1H",
          price: "Free",
          venue: "Pacific Centre",
          ambassador: "Courtney Bailey"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CarouselSlide {
  padding-right: 20px;
}
.CarouselImage {
  filter: grayscale(100%);
}
</style>
