const resObj = [{
  "restaurant": {
    "id": "res_10245",
    "name": "Spice Villa",
    "brand": "Zomato",
    "location": {
      "address": "12, MG Road, Indiranagar",
      "city": "Bengaluru",
      "state": "Karnataka",
      "country": "India",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "contact": {
      "phone": "+91 98765 43210",
      "email": "contact@spicevilla.com"
    },
    "rating": {
      "average": 3.3,
      "total_reviews": 1850,
      "rating_text": "Very Good"
    },
    "cuisine": ["North Indian", "Chinese", "Mughlai"],
    "price_range": "₹₹",
    "average_cost_for_two": 600,
    "opening_hours": {
      "open": "11:00 AM",
      "close": "11:30 PM",
      "is_open_now": true
    },
    "delivery": {
      "available": true,
      "delivery_time": "30-40 mins",
      "delivery_fee": 40,
      "minimum_order": 199
    },
    "menu": [
      {
        "category": "Starters",
        "items": [
          {
            "id": "item_1",
            "name": "Paneer Tikka",
            "price": 220,
            "description": "Cottage cheese marinated with spices and grilled",
            "is_veg": true,
            "rating": 4.5
          },
          {
            "id": "item_2",
            "name": "Chicken Lollipop",
            "price": 260,
            "description": "Crispy fried chicken wings tossed in spicy sauce",
            "is_veg": false,
            "rating": 4.4
          }
        ]
      },
      {
        "category": "Main Course",
        "items": [
          {
            "id": "item_3",
            "name": "Butter Chicken",
            "price": 320,
            "description": "Creamy tomato-based chicken curry",
            "is_veg": false,
            "rating": 4.6
          },
          {
            "id": "item_4",
            "name": "Paneer Butter Masala",
            "price": 280,
            "description": "Paneer cooked in rich buttery gravy",
            "is_veg": true,
            "rating": 4.5
          }
        ]
      },
      {
        "category": "Biryani",
        "items": [
          {
            "id": "item_5",
            "name": "Chicken Biryani",
            "price": 300,
            "description": "Aromatic basmati rice cooked with spiced chicken",
            "is_veg": false,
            "rating": 4.7
          },
          {
            "id": "item_6",
            "name": "Veg Biryani",
            "price": 240,
            "description": "Mixed vegetables cooked with fragrant rice",
            "is_veg": true,
            "rating": 4.3
          }
        ]
      }
    ],
    "offers": [
      {
        "id": "offer_1",
        "title": "50% OFF",
        "description": "Up to ₹150 on first order",
        "valid_till": "2026-03-31"
      }
    ],
    "images": [
      "https://example.com/images/spicevilla_1.jpg",
      "https://example.com/images/spicevilla_2.jpg"
    ],
    "created_at": "2026-01-15T10:30:00Z"
  }
},

{
  "restaurant": {
    "id": "res_10246",
    "name": "Urban Tandoor",
    "brand": "Swiggy",
    "location": {
      "address": "45, Brigade Road",
      "city": "Bengaluru",
      "state": "Karnataka",
      "country": "India",
      "latitude": 12.9758,
      "longitude": 77.6070
    },
    "contact": {
      "phone": "+91 91234 56789",
      "email": "support@urbantandoor.in"
    },
    "rating": {
      "average": 4.5,
      "total_reviews": 2410,
      "rating_text": "Excellent"
    },
    "cuisine": ["North Indian", "Tandoor", "Punjabi"],
    "price_range": "₹₹₹",
    "average_cost_for_two": 750,
    "opening_hours": {
      "open": "12:00 PM",
      "close": "12:00 AM",
      "is_open_now": false
    },
    "delivery": {
      "available": true,
      "delivery_time": "35-45 mins",
      "delivery_fee": 50,
      "minimum_order": 249
    },
    "menu": [
      {
        "category": "Starters",
        "items": [
          {
            "id": "item_7",
            "name": "Tandoori Chicken",
            "price": 340,
            "description": "Chicken marinated in yogurt and spices, roasted in tandoor",
            "is_veg": false,
            "rating": 4.6
          },
          {
            "id": "item_8",
            "name": "Hara Bhara Kabab",
            "price": 210,
            "description": "Spinach and green pea kababs shallow fried",
            "is_veg": true,
            "rating": 4.4
          }
        ]
      },
      {
        "category": "Main Course",
        "items": [
          {
            "id": "item_9",
            "name": "Dal Makhani",
            "price": 260,
            "description": "Slow-cooked black lentils in buttery gravy",
            "is_veg": true,
            "rating": 4.5
          },
          {
            "id": "item_10",
            "name": "Kadai Chicken",
            "price": 330,
            "description": "Spicy chicken curry cooked with bell peppers",
            "is_veg": false,
            "rating": 4.6
          }
        ]
      },
      {
        "category": "Breads",
        "items": [
          {
            "id": "item_11",
            "name": "Butter Naan",
            "price": 60,
            "description": "Soft naan topped with butter",
            "is_veg": true,
            "rating": 4.3
          },
          {
            "id": "item_12",
            "name": "Garlic Roti",
            "price": 55,
            "description": "Whole wheat roti flavored with garlic",
            "is_veg": true,
            "rating": 4.2
          }
        ]
      }
    ],
    "offers": [
      {
        "id": "offer_2",
        "title": "30% OFF",
        "description": "Flat discount up to ₹120",
        "valid_till": "2026-04-15"
      }
    ],
    "images": [
      "https://example.com/images/urbantandoor_1.jpg",
      "https://example.com/images/urbantandoor_2.jpg"
    ],
    "created_at": "2026-01-18T09:15:00Z"
  }
},

{
  "restaurant": {
    "id": "res_10247",
    "name": "Wok & Roll",
    "brand": "Zomato",
    "location": {
      "address": "88, HSR Layout Sector 7",
      "city": "Bengaluru",
      "state": "Karnataka",
      "country": "India",
      "latitude": 12.9121,
      "longitude": 77.6446
    },
    "contact": {
      "phone": "+91 99887 66554",
      "email": "hello@woknroll.com"
    },
    "rating": {
      "average": 4.1,
      "total_reviews": 980,
      "rating_text": "Very Good"
    },
    "cuisine": ["Chinese", "Asian", "Thai"],
    "price_range": "₹₹",
    "average_cost_for_two": 550,
    "opening_hours": {
      "open": "10:30 AM",
      "close": "10:45 PM",
      "is_open_now": true
    },
    "delivery": {
      "available": true,
      "delivery_time": "25-35 mins",
      "delivery_fee": 30,
      "minimum_order": 179
    },
    "menu": [
      {
        "category": "Starters",
        "items": [
          {
            "id": "item_13",
            "name": "Spring Rolls",
            "price": 190,
            "description": "Crispy rolls stuffed with veggies",
            "is_veg": true,
            "rating": 4.2
          },
          {
            "id": "item_14",
            "name": "Chilli Chicken",
            "price": 270,
            "description": "Chicken tossed in spicy Indo-Chinese sauce",
            "is_veg": false,
            "rating": 4.4
          }
        ]
      },
      {
        "category": "Noodles & Rice",
        "items": [
          {
            "id": "item_15",
            "name": "Veg Hakka Noodles",
            "price": 220,
            "description": "Stir-fried noodles with vegetables",
            "is_veg": true,
            "rating": 4.1
          },
          {
            "id": "item_16",
            "name": "Chicken Fried Rice",
            "price": 260,
            "description": "Wok-tossed rice with chicken and sauces",
            "is_veg": false,
            "rating": 4.3
          }
        ]
      }
    ],
    "offers": [
      {
        "id": "offer_3",
        "title": "Free Delivery",
        "description": "On orders above ₹299",
        "valid_till": "2026-02-28"
      }
    ],
    "images": [
      "https://example.com/images/woknroll_1.jpg",
      "https://example.com/images/woknroll_2.jpg"
    ],
    "created_at": "2026-01-20T14:40:00Z"
  }
}]


export default resObj;