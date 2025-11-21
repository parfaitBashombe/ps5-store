'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import type { Product } from '@/lib/data/products-data';
import { GameDetailSkeleton } from '@/components/skeletons';

const ProductDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    async function fetchProductData() {
      try {
        const resolvedParams = await params;
        const response = await fetch(`/api/products/${resolvedParams.id}`);
        const result = await response.json();
        
        if (result.success) {
          const fetchedProduct = result.data;
          setProduct(fetchedProduct);

          // Fetch related products based on category
          const relatedResponse = await fetch(`/api/products?category=${fetchedProduct.category}`);
          const relatedResult = await relatedResponse.json();
          
          if (relatedResult.success) {
            // Filter out current product and limit to 4
            const related = relatedResult.data
              .filter((p: Product) => p.id !== fetchedProduct.id)
              .slice(0, 4);
            setRelatedProducts(related);
          }
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to load product');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProductData();
  }, [id, params]);

  if (loading) {
    return <GameDetailSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background-dark pt-24 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 max-w-md">
          <p className="text-red-400 text-center text-lg">{error || 'Product not found'}</p>
          <Link href="/products">
            <button className="mt-4 w-full bg-primary hover:bg-blue-600 text-white font-bold py-2 rounded-lg">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, ...(product.screenshots || [])];
  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specs', label: 'Specifications' },
    { id: 'whats-in-box', label: "What's in the Box" },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div className="min-h-screen bg-background-dark pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white">Products</Link>
          <span>/</span>
          <span className="text-white">{product.title}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-lg overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.title}
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {images.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? 'border-primary scale-105'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img src={img} alt={`${product.title} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>
            <p className="text-white/70 mb-6">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-yellow-500"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-white/60 text-sm">4.8 (215 reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-primary mb-2">{product.price}</p>
              <p className="text-green-500 font-medium">In Stock</p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-white/80 font-medium mb-2 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold"
                >
                  -
                </button>
                <span className="text-white font-bold text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">shopping_cart</span>
                Add to Cart
              </button>
              <button className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">favorite_border</span>
              </button>
            </div>

            {/* Info Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <span className="material-symbols-outlined text-primary">autorenew</span>
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span>1-year warranty included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          {/* Tab Headers */}
          <div className="flex gap-1 border-b border-white/10 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-white font-bold text-2xl mb-4">Unleash New Gaming Possibilities</h2>
                <p className="text-white/70 mb-4 leading-relaxed">{product.description}</p>
                <p className="text-white/70 leading-relaxed">
                  Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion
                  with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new
                  generation of incredible PlayStation® games.
                </p>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-bold mb-2">Release Date</h3>
                  <p className="text-white/70">{product.releaseDate}</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Genre</h3>
                  <p className="text-white/70">{product.displayGenre}</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Platform</h3>
                  <p className="text-white/70">PlayStation 5</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Price</h3>
                  <p className="text-white/70">{product.price}</p>
                </div>
              </div>
            )}

            {activeTab === 'whats-in-box' && (
              <ul className="space-y-3">
                <li className="text-white/70 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Game Disc
                </li>
                <li className="text-white/70 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Product Manual
                </li>
                <li className="text-white/70 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Promotional Materials
                </li>
              </ul>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center gap-8 mb-8 pb-8 border-b border-white/10">
                  <div>
                    <div className="text-5xl font-bold text-white mb-2">4.8</div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-yellow-500"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-white/60 text-sm">Based on 215 reviews</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-3">
                        <span className="text-white/60 text-sm w-4">{rating}</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${rating === 5 ? 80 : rating === 4 ? 15 : 3}%` }}
                          ></div>
                        </div>
                        <span className="text-white/60 text-sm w-12">{rating === 5 ? '80%' : rating === 4 ? '15%' : '3%'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-white/60 text-center">View full reviews on the testimonials page</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-white font-bold text-2xl mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                  <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group">
                    <div className="aspect-square overflow-hidden bg-linear-to-br from-blue-900/20 to-purple-900/20">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold mb-2 line-clamp-1">{relatedProduct.title}</h3>
                      <p className="text-xl font-bold text-primary">{relatedProduct.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
