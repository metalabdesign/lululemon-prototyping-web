import yoga from "../assets/yoga@2x.png"

const ambassadors = [
  {
    id: 2,
    "first-name": "Matt",
    "last-name": "Bielby",
    "gender": "male",
    "ambassador-type": "store",
    "short-bio": "lululemon stories",
    "long-bio": "lululemon stories",
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
  }
]

export const fetch = (id) => {
  return Promise.resolve(ambassadors[id - 1]);
}

export const fetchAll = () => {
 return Promise.resolve(ambassadors); 
}
