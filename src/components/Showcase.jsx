import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import PhoneFrame from './PhoneFrame'
import {
  HomeScreen,
  CategoriesScreen,
  ProductDetailsScreen,
  VariantsScreen,
  CartScreen,
  OrdersScreen,
  ProfileScreen,
} from './AppScreens'

const SCREENS = [
  { label: 'Home', Screen: HomeScreen },
  { label: 'Categories', Screen: CategoriesScreen },
  { label: 'Product details', Screen: ProductDetailsScreen },
  { label: 'Variants', Screen: VariantsScreen },
  { label: 'Cart', Screen: CartScreen },
  { label: 'Orders', Screen: OrdersScreen },
  { label: 'Profile', Screen: ProfileScreen },
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 md:py-32 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 text-center mx-auto"
        >
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest">Inside the app</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-3 text-balance">
            Every screen designed for fast, confident buying
          </h2>
        </motion.div>
      </div>

      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect="coverflow"
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 140, modifier: 2, slideShadows: false }}
        pagination={{ clickable: true }}
        className="!pb-16"
      >
        {SCREENS.map(({ label, Screen }) => (
          <SwiperSlide key={label} style={{ width: '300px' }}>
            <div className="flex flex-col items-center">
              <PhoneFrame>
                <Screen />
              </PhoneFrame>
              <p className="mt-5 text-xs font-medium text-white/50 tracking-wide">{label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
