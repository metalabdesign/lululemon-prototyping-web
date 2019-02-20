import yoga from "../assets/yoga@2x.png"
import { dashedToCamelObject } from "../utils/dashedToCamel";
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const ambassadors = [
  {
    id: 2,
    "first-name": "Matt",
    "last-name": "Bielby",
    "gender": "male",
    "ambassador-type": "store",
    "short-bio": "lululemon stories",
    "long-bio": "Nothing feels better than the feeling of being able to tackle the activities I love with the people I love- without hesitation. That and the endorphins! Aaron's passion for movement bursts through the seams of everything he does. Enter his latest endeavor: MOVR, an app aimed at bringing personal training into your hands. Moments with Aaron always include a little sweat and a lot of laughs.",
    "why-we-love": "this is why we love the ambassador",
    "reasons-we-sweat": null,
    "goals": null,
    "accolades": ["Honours Student", "Can jump 10 feet high"],
    "fun-facts": ["City Champ Grade 7 Cross Country", "Like PB and J"],
    "spotify-playlist": null,
    "featured": false,
    "role": "ambassador",
    "instagram-url": null,
    "facebook-url": null,
    "twitter-url": null,
    "avatar-img-url": "http://res.cloudinary.com/lululemon/image/upload/v1471974966/hub/bnw9lsdwlvbtmnqh65hk.jpg",
    "avatar-img-path": "v1471974966/hub/bnw9lsdwlvbtmnqh65hk.jpg",
    "email": "publishercreator5@lululemon.com",
    "cover-image": yoga,
    "location-label": "Vancouver, BC, Canada",
    "store-label": "Rush Street",
    "store-id": 21,
    "nested-object": { test: 123 },
    "disciplines": ["Barre", "Yoga"],
  },
  {
    id: 2,
    "first-name": "Chloe",
    "last-name": "Berge",
    "gender": "female",
    "ambassador-type": "elite",
    "short-bio": "I'm happiest when I'm sleeping under the stars, heading to the airport, or cracking open a new book. ",
    "long-bio": "I'm happiest when I'm sleeping under the stars, heading to the airport, or cracking open a new book. ",
    "why-we-love": "this is why we love the ambassador",
    "reasons-we-sweat": ["To get fit", "That's what the body does", "Hunger"],
    "goals": ["To be one with the earth", "Eat pizza for 30 days straight"],
    "accolades": null,
    "fun-facts": null,
    "spotify-playlist": null,
    "featured": true,
    "role": "ambassador",
    "instagram-url": null,
    "facebook-url": null,
    "twitter-url": null,
    "avatar-img-url": "http://res.cloudinary.com/lululemon/image/upload/v1471974966/hub/hx3hvpzwuwa2iuirhudk.jpg",
    "avatar-img-path": "v1471974966/hub/hx3hvpzwuwa2iuirhudk.jpg",
    "email": "publishercreator1@lululemon.com",
    "cover-image": yoga,
    "location-label": "Vancouver, BC, Canada",
    "store-label": "Rush Street",
    "store-id": 21,
    "disciplines": ["Running"],
  }
]

export const fetch = (id) => {

  return wait(200).then(() => {
    return dashedToCamelObject(ambassadors[id - 1])
  });
}

export const fetchAll = () => {
 return wait(200).then(() => ambassadors.map((obj) => dashedToCamelObject(obj))); 
}
