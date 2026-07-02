import ShopBanner from "@/components/products/banner"
import CategoryNav from "@/components/products/categoryNav"
import data from "@/lib/db.json"

export default function ProductLayout({ children, }: { children: React.ReactNode }) {
  return <section className="min-h-screen relative">
    <ShopBanner hero={data.hero} />
    <CategoryNav />
    {children}
  </section>
}