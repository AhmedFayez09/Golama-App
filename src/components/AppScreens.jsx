import { Search, Bell, Star, ChevronLeft, Minus, Plus, Check, MapPin, Truck, Heart, User, Package, CreditCard, Settings, LogOut } from 'lucide-react'

const CATS = ['Beverages', 'Snacks', 'Household', 'Bakery', 'Frozen', 'Dairy']
const PRODUCTS = [
  { name: 'Sparkling Water 24pk', price: '$11.40', unit: '/case', img: 'from-primary-100 to-primary-400' },
  { name: 'Rolled Oats 5kg', price: '$8.20', unit: '/bag', img: 'from-amber-100 to-amber-400' },
  { name: 'Paper Towels 12pk', price: '$14.90', unit: '/pack', img: 'from-sky-100 to-sky-400' },
  { name: 'Olive Oil 5L', price: '$26.00', unit: '/tin', img: 'from-lime-100 to-lime-500' },
]

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold text-ink">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="w-3 h-2 rounded-sm bg-ink/70" />
        <span className="w-3 h-2 rounded-sm bg-ink/70" />
        <span className="w-4 h-2 rounded-sm bg-ink/70" />
      </span>
    </div>
  )
}

export function HomeScreen() {
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <div className="px-4 pt-2 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[10px] text-ink-700/50">Deliver to</p>
            <p className="text-xs font-semibold text-ink flex items-center gap-1">
              <MapPin className="w-3 h-3 text-primary" /> Central Market Ave
            </p>
          </div>
          <span className="grid place-items-center w-8 h-8 rounded-full bg-white shadow-sm">
            <Bell className="w-4 h-4 text-ink" />
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 shadow-sm">
          <Search className="w-4 h-4 text-ink-700/40" />
          <span className="text-xs text-ink-700/40">Search wholesale products</span>
        </div>
      </div>

      <div className="px-4 mb-3">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-600 p-4 text-white relative overflow-hidden">
          <p className="text-[10px] uppercase tracking-wide text-white/70">This week</p>
          <p className="text-sm font-semibold mt-0.5 leading-snug">Save 12% on bulk<br />beverage orders</p>
          <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="flex gap-2 px-4 mb-3 overflow-hidden">
        {CATS.map((c, i) => (
          <span
            key={c}
            className={`shrink-0 text-[10px] font-medium px-3 py-1.5 rounded-full ${
              i === 0 ? 'bg-ink text-white' : 'bg-white text-ink-700/70 shadow-sm'
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="px-4 flex-1 grid grid-cols-2 gap-2.5 overflow-hidden">
        {PRODUCTS.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl p-2.5 shadow-sm">
            <div className={`h-14 rounded-xl bg-gradient-to-br ${p.img} mb-2`} />
            <p className="text-[10px] font-medium text-ink leading-snug line-clamp-2">{p.name}</p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-[11px] font-bold text-primary">{p.price}<span className="text-[9px] text-ink-700/40 font-normal">{p.unit}</span></p>
              <Heart className="w-3 h-3 text-ink-700/30" />
            </div>
          </div>
        ))}
      </div>

      <TabBar active="home" />
    </div>
  )
}

export function CategoriesScreen() {
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <div className="px-4 py-3">
        <p className="text-sm font-bold text-ink">Categories</p>
      </div>
      <div className="px-4 flex-1 grid grid-cols-2 gap-2.5">
        {['Beverages', 'Snacks', 'Household', 'Bakery', 'Frozen Foods', 'Dairy', 'Cleaning', 'Packaging'].map((c, i) => (
          <div key={c} className="bg-white rounded-2xl p-3 shadow-sm flex flex-col justify-between h-20">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${['from-primary-100 to-primary-400','from-amber-100 to-amber-400','from-sky-100 to-sky-400','from-rose-100 to-rose-400'][i % 4]}`} />
            <p className="text-[10px] font-semibold text-ink">{c}</p>
          </div>
        ))}
      </div>
      <TabBar active="categories" />
    </div>
  )
}

export function ProductDetailsScreen() {
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <div className="px-4 pt-2 flex items-center justify-between">
        <ChevronLeft className="w-4 h-4 text-ink" />
        <Heart className="w-4 h-4 text-ink-700/40" />
      </div>
      <div className="mx-4 mt-2 h-32 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-400" />
      <div className="px-4 pt-3 flex-1">
        <p className="text-[10px] text-primary font-semibold">Beverages</p>
        <p className="text-sm font-bold text-ink mt-0.5">Sparkling Mineral Water 24-Pack</p>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
          <span className="text-[10px] text-ink-700/50 ml-1">4.9 (312 orders)</span>
        </div>
        <p className="text-lg font-bold text-ink mt-2">$11.40 <span className="text-[10px] font-normal text-ink-700/40">/ case of 24</span></p>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {['1 case', '5 cases', '10 cases'].map((u, i) => (
            <span key={u} className={`text-center text-[9px] font-medium py-1.5 rounded-lg ${i===1 ? 'bg-ink text-white' : 'bg-white text-ink-700/60 shadow-sm'}`}>{u}</span>
          ))}
        </div>
        <p className="text-[10px] text-ink-700/50 mt-3 leading-relaxed">
          Sourced directly from certified regional bottlers. Bulk pricing improves automatically as order size increases.
        </p>
      </div>
      <div className="p-4">
        <div className="bg-ink text-white text-xs font-semibold text-center py-3 rounded-xl">Add to cart</div>
      </div>
    </div>
  )
}

export function VariantsScreen() {
  const variants = [
    { size: '500ml x 24', price: '$11.40' },
    { size: '1L x 12', price: '$13.10' },
    { size: '1.5L x 8', price: '$9.60' },
  ]
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <div className="px-4 pt-2 flex items-center gap-2">
        <ChevronLeft className="w-4 h-4 text-ink" />
        <p className="text-xs font-bold text-ink">Choose a variant</p>
      </div>
      <div className="px-4 pt-3 flex-1 space-y-2.5">
        {variants.map((v, i) => (
          <div key={v.size} className={`flex items-center justify-between p-3 rounded-2xl border ${i===0 ? 'border-primary bg-primary-50' : 'border-ink/5 bg-white'}`}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-100 to-primary-400" />
              <div>
                <p className="text-[11px] font-semibold text-ink">{v.size}</p>
                <p className="text-[10px] text-ink-700/50">{v.price} per case</p>
              </div>
            </div>
            {i === 0 && <span className="grid place-items-center w-5 h-5 rounded-full bg-primary text-white"><Check className="w-3 h-3" /></span>}
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="bg-ink text-white text-xs font-semibold text-center py-3 rounded-xl">Confirm variant</div>
      </div>
    </div>
  )
}

export function CartScreen() {
  const items = [
    { name: 'Sparkling Water 24pk', qty: 5, price: '$57.00' },
    { name: 'Rolled Oats 5kg', qty: 2, price: '$16.40' },
  ]
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <div className="px-4 pt-2 pb-1"><p className="text-sm font-bold text-ink">Your cart</p></div>
      <div className="px-4 flex-1 space-y-2.5">
        {items.map((it) => (
          <div key={it.name} className="flex items-center gap-2.5 bg-white p-2.5 rounded-2xl shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-100 to-primary-400 shrink-0" />
            <div className="flex-1">
              <p className="text-[10px] font-semibold text-ink leading-tight">{it.name}</p>
              <p className="text-[10px] text-primary font-bold">{it.price}</p>
            </div>
            <div className="flex items-center gap-1.5 bg-surface rounded-full px-1.5 py-1">
              <Minus className="w-2.5 h-2.5" />
              <span className="text-[10px] font-semibold w-3 text-center">{it.qty}</span>
              <Plus className="w-2.5 h-2.5" />
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white rounded-t-3xl shadow-soft">
        <div className="flex justify-between text-[11px] text-ink-700/60 mb-1">
          <span>Subtotal</span><span>$73.40</span>
        </div>
        <div className="flex justify-between text-xs font-bold text-ink mb-3">
          <span>Total</span><span>$73.40</span>
        </div>
        <div className="bg-primary text-white text-xs font-semibold text-center py-3 rounded-xl">Checkout securely</div>
      </div>
    </div>
  )
}

export function OrdersScreen() {
  const orders = [
    { id: '#GB-3921', status: 'Out for delivery', color: 'text-primary' },
    { id: '#GB-3877', status: 'Delivered', color: 'text-ink-700/50' },
    { id: '#GB-3801', status: 'Delivered', color: 'text-ink-700/50' },
  ]
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <div className="px-4 pt-2 pb-1"><p className="text-sm font-bold text-ink">Orders</p></div>
      <div className="px-4 flex-1 space-y-2.5">
        {orders.map((o) => (
          <div key={o.id} className="bg-white p-3 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-ink">{o.id}</p>
              <Truck className={`w-3.5 h-3.5 ${o.color}`} />
            </div>
            <p className={`text-[10px] font-medium mt-0.5 ${o.color}`}>{o.status}</p>
            <div className="h-1.5 rounded-full bg-surface mt-2 overflow-hidden">
              <div className={`h-full rounded-full bg-primary`} style={{ width: o.status === 'Delivered' ? '100%' : '65%' }} />
            </div>
          </div>
        ))}
      </div>
      <TabBar active="orders" />
    </div>
  )
}

export function ProfileScreen() {
  const rows = [
    { icon: User, label: 'Business profile' },
    { icon: Package, label: 'Order history' },
    { icon: CreditCard, label: 'Payment methods' },
    { icon: Settings, label: 'Settings' },
  ]
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <div className="px-4 pt-3 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-400" />
        <div>
          <p className="text-xs font-bold text-ink">Marlowe & Co.</p>
          <p className="text-[10px] text-ink-700/50">Retail merchant</p>
        </div>
      </div>
      <div className="px-4 mt-4 space-y-1.5 flex-1">
        {rows.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
            <Icon className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-medium text-ink">{label}</span>
          </div>
        ))}
        <div className="flex items-center gap-3 p-3">
          <LogOut className="w-4 h-4 text-rose-500" />
          <span className="text-[11px] font-medium text-rose-500">Sign out</span>
        </div>
      </div>
      <TabBar active="profile" />
    </div>
  )
}

function TabBar({ active }) {
  const tabs = [
    { key: 'home', icon: Search, label: 'Home' },
    { key: 'categories', icon: Package, label: 'Browse' },
    { key: 'orders', icon: Truck, label: 'Orders' },
    { key: 'profile', icon: User, label: 'Profile' },
  ]
  return (
    <div className="flex items-center justify-around bg-white border-t border-ink/5 py-2.5">
      {tabs.map((t) => (
        <div key={t.key} className="flex flex-col items-center gap-0.5">
          <t.icon className={`w-4 h-4 ${active === t.key ? 'text-primary' : 'text-ink-700/30'}`} />
          <span className={`text-[8px] font-medium ${active === t.key ? 'text-primary' : 'text-ink-700/30'}`}>{t.label}</span>
        </div>
      ))}
    </div>
  )
}
