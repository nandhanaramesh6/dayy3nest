import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  states = [
    {
      "id": 1,
      "name": "Andhra Pradesh",
      "image": "http://3.bp.blogspot.com/-0NP3Q-5v_pU/U652sqmELfI/AAAAAAAAIhw/-0jPNwcdQOo/s1600/Charminar,_Hyderabad,_Andhra_Pradesh.JPG",
      "description": "Known for its rich cultural heritage, historic temples, and beautiful coastline along the Bay of Bengal."
    },
    {
      "id": 2,
      "name": "Arunachal Pradesh",
      "image": "https://tse3.mm.bing.net/th?id=OIP.v8jq1AWR1Kb6LTaemgno9wHaFj&pid=Api&P=0&h=220",
      "description": "A northeastern state known for its pristine natural beauty, snow-capped mountains, and vibrant tribal culture."
    },
    {
      "id": 3,
      "name": "Assam",
      "image": "https://www.travelholicq.com/wp-content/uploads/2021/05/Places-To-Visit-In-Assam.jpg",
      "description": "Famous for its tea gardens, the Brahmaputra River, and the Kaziranga National Park, home to the one-horned rhinoceros."
    },
    {
      "id": 4,
      "name": "Bihar",
      "image": "https://wallpaperaccess.com/full/3510412.jpg",
      "description": "Home to ancient historical sites such as Nalanda and Bodh Gaya, Bihar has a rich cultural and spiritual heritage."
    },
    {
      "id": 5,
      "name": "Chhattisgarh",
      "image": "https://tse1.mm.bing.net/th?id=OIP.FUjlOtgaMNas2J0pEFY8ggHaFj&pid=Api&P=0&h=220",
      "description": "Known for its dense forests, waterfalls, and unique tribal culture."
    },
    {
      "id": 6,
      "name": "Goa",
      "image": "https://tse4.mm.bing.net/th?id=OIP.gwClII_hIf6odcT9pyr2KwHaE8&pid=Api&P=0&h=220",
      "description": "Famous for its beaches, Portuguese heritage, and vibrant nightlife."
    },
    {
      "id": 7,
      "name": "Gujarat",
      "image": "https://tse3.mm.bing.net/th?id=OIP.SjTQQDp6E9xZGLwBoC116gHaE8&pid=Api&P=0&h=220",
      "description": "Known for its historical sites, vibrant festivals, and the Gir National Park, home to Asiatic lions."
    },
    {
      "id": 8,
      "name": "Haryana",
      "image": "https://tse4.mm.bing.net/th?id=OIP.GlybQV2GqV_izY0XmyjL1QHaE5&pid=Api&P=0&h=220",
      "description": "A leading agricultural state with a rich history and proximity to the national capital, Delhi."
    },
    {
      "id": 9,
      "name": "Himachal Pradesh",
      "image": "https://tse3.mm.bing.net/th?id=OIP.4L8pcRB1npnbRCx7qslvzwHaFj&pid=Api&P=0&h=220",
      "description": "A northern state renowned for its scenic beauty, hill stations, and adventure tourism."
    },
    {
      "id": 10,
      "name": "Jharkhand",
      "image": "https://tse1.mm.bing.net/th?id=OIP.-F27vyZPvcyovDCJJc3hcQHaEK&pid=Api&P=0&h=220",
      "description": "Rich in mineral resources, waterfalls, and a unique tribal culture."
    },
    {
      "id": 11,
      "name": "Karnataka",
      "image": "https://tse3.mm.bing.net/th?id=OIP.AfiwGitICWWdGqKsOcqYpAHaE8&pid=Api&P=0&h=220",
      "description": "Known for its IT industry, historical monuments, and diverse landscapes."
    },
    {
      "id": 12,
      "name": "Kerala",
      "image": "https://tse1.mm.bing.net/th?id=OIP.HyjU2tItxGqeu1piwJogEQHaE8&pid=Api&P=0&h=220",
      "description": "Popularly known as 'God's Own Country,' Kerala is famous for its backwaters, lush greenery, and cultural traditions."
    },
    {
      "id": 13,
      "name": "Madhya Pradesh",
      "image": "https://tse2.mm.bing.net/th?id=OIP.PpEYsRu-tyPAvc-q5lcURAHaEU&pid=Api&P=0&h=220",
      "description": "Known as the 'Heart of India,' it is famous for its wildlife reserves, ancient temples, and forts."
    },
    {
      "id": 14,
      "name": "Maharashtra",
      "image": "https://tse4.mm.bing.net/th?id=OIP.zDuaEInZ79G85QEwxmsLvAHaEK&pid=Api&P=0&h=220",
      "description": "A leading industrial state with iconic landmarks like Mumbai, the Ajanta-Ellora caves, and hill stations."
    },
    {
      "id": 15,
      "name": "Manipur",
      "image": "https://tse3.mm.bing.net/th?id=OIP.aZLal07wU4rPs-ROmYzs3wHaE7&pid=Api&P=0&h=220",
      "description": "A northeastern state known for its natural beauty, rich culture, and traditions like Manipuri dance."
    },
    {
      "id": 16,
      "name": "Meghalaya",
      "image": "https://tse3.mm.bing.net/th?id=OIP.xvnR-AMVNj-ZHl8GihWt5QHaFj&pid=Api&P=0&h=220",
      "description": "Known as the 'Abode of Clouds,' it is famous for its lush green landscapes and living root bridges."
    },
    {
      "id": 17,
      "name": "Mizoram",
      "image": "https://tse4.mm.bing.net/th?id=OIP.kslYLbz8ZhakJHIBM6A1KwHaE8&pid=Api&P=0&h=220",
      "description": "A picturesque state known for its rolling hills, pleasant climate, and vibrant culture."
    },
    {
      "id": 18,
      "name": "Nagaland",
      "image": "https://tse2.mm.bing.net/th?id=OIP.lq8q8L4UjLLiQa6JbjoHqwHaE8&pid=Api&P=0&h=220",
      "description": "Famous for its tribal culture, festivals like Hornbill, and scenic landscapes."
    },
    {
      "id": 19,
      "name": "Odisha",
      "image": "https://tse2.mm.bing.net/th?id=OIP.Do1JKB1ZDbAK4MPOFBgIngHaFE&pid=Api&P=0&h=220",
      "description": "Known for its ancient temples, beaches, and the famous Rath Yatra in Puri."
    },
    {
      "id": 20,
      "name": "Punjab",
      "image": "https://tse4.mm.bing.net/th?id=OIP.NmteMDyE7hXtyWKTylaHgwHaE8&pid=Api&P=0&h=220",
      "description": "Renowned for its vibrant culture, delicious cuisine, and the Golden Temple in Amritsar."
    },
    {
      "id": 21,
      "name": "Rajasthan",
      "image": "https://tse4.mm.bing.net/th?id=OIP.Q6JdZxxC5uabjnNzQSae0QHaEK&pid=Api&P=0&h=220",
      "description": "Known for its desert landscapes, historic palaces, and vibrant traditions."
    },
    {
      "id": 22,
      "name": "Sikkim",
      "image": "https://tse1.mm.bing.net/th?id=OIP.Xa8t2xFrf-Zc9ebRE1VkvwHaEK&pid=Api&P=0&h=220",
      "description": "A small northeastern state known for its stunning landscapes and Buddhist monasteries."
    },
    {
      "id": 23,
      "name": "Tamil Nadu",
      "image": "https://tse3.mm.bing.net/th?id=OIP.0tH_lsr9Shh7U4sKPfx0LgHaEq&pid=Api&P=0&h=220",
      "description": "Famous for its ancient temples, classical music and dance, and rich cultural heritage."
    },
    {
      "id": 24,
      "name": "Telangana",
      "image": "https://tse2.mm.bing.net/th?id=OIP.XA7AOYB_ojq3S3UAF95AygHaEQ&pid=Api&P=0&h=220",
      "description": "Known for its historical monuments, IT industry, and vibrant culture."
    },
    {
      "id": 25,
      "name": "Tripura",
      "image": "https://tse2.mm.bing.net/th?id=OIP.apgO8M2s71Yels2MYVkm3gHaEO&pid=Api&P=0&h=220",
      "description": "A small northeastern state with a rich tribal culture and ancient temples."
    },
    {
      "id": 26,
      "name": "Uttar Pradesh",
      "image": "https://tse4.mm.bing.net/th?id=OIP.rVBwWYVPHoizh18JQKm1SwHaE7&pid=Api&P=0&h=220",
      "description": "Home to iconic landmarks like the Taj Mahal, Varanasi, and the Ganges River."
    },
    {
      "id": 27,
      "name": "Uttarakhand",
      "image": "https://www.tripsavvy.com/thmb/4wJONYsP05iMiE3avHzMlkuEcGE=/5120x3413/filters:fill(auto,1)/GettyImages-450784769-58f7b8cd3df78ca1597ccf9c.jpg",
      "description": "Known for its Himalayan beauty, pilgrimage sites, and adventure tourism."
    },
    {
      "id": 28,
      "name": "West Bengal",
      "image": "https://tse4.mm.bing.net/th?id=OIP.FpXTgRBsflwkPe6SbvygpAHaE8&pid=Api&P=0&h=220",
      "description": "Famous for its cultural heritage, literature, and the Sundarbans mangrove forest."
    }
  ]


  constructor() { }

getStates(){
  return this.states;
}

getStateByID(id:any){
  return this.states.find(state => state.id == id);
}


}
