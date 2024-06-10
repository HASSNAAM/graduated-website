# Burger House Website

## 🍔 Welcome to the Burger House! 🍔

This is your one-stop destination for all things burgers! Dive in and let your taste buds explore the world of juicy, mouth-watering goodness.

### Features

- **Express Delivery**: Because who wants to wait for their burger?
- **Smooth Scrolling Navigation**: Jump to your favorite sections without any bumps!
- **Delicious Banners**: Drool over our banner images (don’t worry, they’re drool-proof).
- **Interactive Carousel**: Spin through our upcoming events faster than a burger flips on a grill.
- **Reservation Form**: Book your table and be a part of the burger magic. We promise not to judge if you drool a little on the form.
- **Contact Information**: Reach out to us – we love fan mail (and burger compliments).

### How to Use

1. **Navigate**: Use the navbar to move between sections. Click on "Home", "Menu", "Our Story", or "Contact Us". Simple, right?
2. **Order**: See a burger you like? Click on “ORDER NOW” and satisfy those cravings.
3. **Reserve**: Fill out the reservation form. Don’t worry if you forget your name – we only judge based on your burger choices.
4. **Explore Events**: Check out our carousel to see what's sizzling at Burger House.
5. **Contact Us**: Need to chat? Send us an email or drop by our main road location (bring burgers).

### Tech Ingredients

- **HTML & CSS**: The bread and butter of web development. Our site looks tasty thanks to these.
- **Bootstrap**: Adds a dash of style and responsiveness – because burgers should look good on any screen.
- **JavaScript**: Makes the magic happen – scroll effects, form validation, and setting the current date.

### Fun Fact

Our code is as delicious as our burgers. Don't believe us? Have a look and you'll see that clean code can be just as satisfying as a double cheeseburger with extra bacon.

### Current Date Script

We’ve included a little snippet to automatically fill in the current date in the reservation form, so you don’t have to. It's like having your burger and eating it too!

```javascript
const dateControl = document.getElementById("dateControl");
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateControl.value = `${year}-${month}-${day}`;
```

### Coded By

- **Hassnaa Mahmoud**: A burger enthusiast and the brains behind the Burger House website. All rights reserved, 2023.

Enjoy your stay at the Burger House, where every byte is a delight! 🍟

---

Feel free to explore, order, and enjoy – and remember, calories don’t count when you’re having fun!
