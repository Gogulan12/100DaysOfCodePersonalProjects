const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quos, quisquam hic explicabo ipsum voluptatibus nemo nisi velit maiores inventore placeat accusantium nam earum culpa nostrum molestias vitae veniam provident? Eos odit illo nesciunt fugiat ut sit consectetur, molestiae repellendus quod non cupiditate consequuntur itaque fuga libero? Deleniti, vero debitis.",
  },
  {
    name: "Charles Edwards",
    position: "Graphic Designer",
    photo:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aut deserunt qui obcaecati, nobis tempora sint asperiores modi delectus quisquam saepe provident dolorem beatae culpa totam necessitatibus aliquid ea non. Omnis iste corporis autem dicta, quo, fugiat nisi explicabo maxime in modi nesciunt vitae obcaecati consequatur facere, assumenda tempora voluptate.",
  },
  {
    name: "Bernard Shaffer",
    position: "Photographer",
    photo:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore sequi, nobis labore, debitis ducimus excepturi dolorum dignissimos libero ipsum sapiente nostrum tempore ab, explicabo ratione mollitia. Beatae harum veniam quia. Earum reprehenderit sapiente nulla quia, dignissimos facilis officiis. Vero.",
  },
  {
    name: "Wayne Hageman",
    position: "Accounting",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam placeat necessitatibus repudiandae voluptate vitae pariatur voluptatem adipisci sint commodi quo ipsum cupiditate veritatis, mollitia dolorem ratione? Vel aperiam magni a aut est, laborum veniam eum quasi ipsa, porro iure nihil, possimus dolore saepe. Saepe.",
  },
];

let idx = 1;

function updateTestimonial() {
  // console.log(testimonials[1]);
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

// updateTestimonial();
setInterval(updateTestimonial, 10000);
