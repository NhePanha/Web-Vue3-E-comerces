import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "vue-router";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const banners = ref([
      {
        image:
          "https://i.pinimg.com/736x/6f/77/18/6f7718bfbfc4a663f383f75405fa7bc7.jpg",
      },
      {
        image:
          "https://i.pinimg.com/736x/e8/d8/3d/e8d83dc27cee4ae2f8d5fc1cd88b9d15.jpg",
      },
      {
        image:
          "https://i.pinimg.com/736x/db/9d/90/db9d90ddb0e9aecaf48216b9e2b58661.jpg",
      },
    ]);

    const products = ref([
      {
        id: 1001,
        name: "Cement",
        description: "High-quality cement",
        price: 10,
        image:
          "https://i.pinimg.com/736x/b1/3a/7f/b13a7f261aaf4b57aa25b7cb931948b2.jpg",
        isFavorite: false,
      },
      {
        id: 1002,
        name: "Bricks",
        description: "Durable bricks",
        price: 5,
        image:
          "https://i.pinimg.com/736x/40/ed/63/40ed63ac0567fcded3d47582126978f0.jpg",
        isFavorite: false,
      },
      {
        id: 1003,
        name: "Steel Rods",
        description: "Strong steel rods",
        price: 50,
        image:
          "https://i.pinimg.com/736x/fb/6f/85/fb6f85af0266aa9fb3eb388eb9cef4e0.jpg",
        isFavorite: false,
      },
      {
        name: "Tiles",
        description: "Beautiful tiles",
        image:
          "https://i.pinimg.com/736x/99/f4/82/99f48211d1af0da185dcf515f3e71866.jpg",
        isFavorite: false,
      },
      {
        id: 1001,
        name: "Cement",
        description: "High-quality cement",
        price: 10,
        image:
          "https://i.pinimg.com/736x/b1/3a/7f/b13a7f261aaf4b57aa25b7cb931948b2.jpg",
        isFavorite: false,
      },
      {
        name: "Bricks",
        description: "Durable bricks",
        price: 5,
        image:
          "https://i.pinimg.com/736x/40/ed/63/40ed63ac0567fcded3d47582126978f0.jpg",
        isFavorite: false,
      },
      {
        name: "Steel Rods",
        description: "Strong steel rods",
        price: 50,
        image:
          "https://i.pinimg.com/736x/fb/6f/85/fb6f85af0266aa9fb3eb388eb9cef4e0.jpg",
        isFavorite: false,
      },
      {
        name: "Tiles",
        description: "Beautiful tiles",
        image:
          "https://i.pinimg.com/736x/99/f4/82/99f48211d1af0da185dcf515f3e71866.jpg",
        isFavorite: false,
      },
      {
        id: 1001,
        name: "Cement",
        description: "High-quality cement",
        price: 10,
        image:
          "https://i.pinimg.com/736x/b1/3a/7f/b13a7f261aaf4b57aa25b7cb931948b2.jpg",
        isFavorite: false,
      },
      {
        name: "Bricks",
        description: "Durable bricks",
        price: 5,
        image:
          "https://i.pinimg.com/736x/40/ed/63/40ed63ac0567fcded3d47582126978f0.jpg",
        isFavorite: false,
      },
      {
        name: "Steel Rods",
        description: "Strong steel rods",
        price: 50,
        image:
          "https://i.pinimg.com/736x/fb/6f/85/fb6f85af0266aa9fb3eb388eb9cef4e0.jpg",
        isFavorite: false,
      },
      {
        name: "Tiles",
        description: "Beautiful tiles",
        image:
          "https://i.pinimg.com/736x/99/f4/82/99f48211d1af0da185dcf515f3e71866.jpg",
        isFavorite: false,
      },
      {
        id: 1001,
        name: "Cement",
        description: "High-quality cement",
        price: 10,
        image:
          "https://i.pinimg.com/736x/b1/3a/7f/b13a7f261aaf4b57aa25b7cb931948b2.jpg",
        isFavorite: false,
      },
      {
        name: "Bricks",
        description: "Durable bricks",
        price: 5,
        image:
          "https://i.pinimg.com/736x/40/ed/63/40ed63ac0567fcded3d47582126978f0.jpg",
        isFavorite: false,
      },
      {
        name: "Steel Rods",
        description: "Strong steel rods",
        price: 50,
        image:
          "https://i.pinimg.com/736x/fb/6f/85/fb6f85af0266aa9fb3eb388eb9cef4e0.jpg",
        isFavorite: false,
      },
      {
        name: "Tiles",
        description: "Beautiful tiles",
        image:
          "https://i.pinimg.com/736x/99/f4/82/99f48211d1af0da185dcf515f3e71866.jpg",
        isFavorite: false,
      },
      {
        id: 1001,
        name: "Cement",
        description: "High-quality cement",
        price: 10,
        image:
          "https://i.pinimg.com/736x/b1/3a/7f/b13a7f261aaf4b57aa25b7cb931948b2.jpg",
        isFavorite: false,
      },
      {
        name: "Bricks",
        description: "Durable bricks",
        price: 5,
        image:
          "https://i.pinimg.com/736x/40/ed/63/40ed63ac0567fcded3d47582126978f0.jpg",
        isFavorite: false,
      },
      {
        name: "Steel Rods",
        description: "Strong steel rods",
        price: 50,
        image:
          "https://i.pinimg.com/736x/fb/6f/85/fb6f85af0266aa9fb3eb388eb9cef4e0.jpg",
        isFavorite: false,
      },
      {
        name: "Tiles",
        description: "Beautiful tiles",
        image:
          "https://i.pinimg.com/736x/99/f4/82/99f48211d1af0da185dcf515f3e71866.jpg",
        isFavorite: false,
      },
      {
        id: 1001,
        name: "Cement",
        description: "High-quality cement",
        price: 10,
        image:
          "https://i.pinimg.com/736x/b1/3a/7f/b13a7f261aaf4b57aa25b7cb931948b2.jpg",
        isFavorite: false,
      },
      {
        name: "Bricks",
        description: "Durable bricks",
        price: 5,
        image:
          "https://i.pinimg.com/736x/40/ed/63/40ed63ac0567fcded3d47582126978f0.jpg",
        isFavorite: false,
      },
      {
        name: "Steel Rods",
        description: "Strong steel rods",
        price: 50,
        image:
          "https://i.pinimg.com/736x/fb/6f/85/fb6f85af0266aa9fb3eb388eb9cef4e0.jpg",
        isFavorite: false,
      },
      {
        name: "Tiles",
        description: "Beautiful tiles",
        image:
          "https://i.pinimg.com/736x/99/f4/82/99f48211d1af0da185dcf515f3e71866.jpg",
        isFavorite: false,
      },
    ]);
    // Toggle favorite status
    const toggleFavorite = (index) => {
      products.value[index].isFavorite = !products.value[index].isFavorite;
    };
    const router = useRouter();

    const goToDetail = (id) => {
      router.push({ name: "ProductDetail", params: { id: String(id) } }); // ✅ Ensure id is a string for routing
    };
    
    return {
      banners,
      products,
      toggleFavorite,
      Navigation,
      Pagination,
      Autoplay,
      goToDetail,
    };
  },
};
