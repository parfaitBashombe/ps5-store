"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { reviewFormSchema, type ReviewFormData } from "@/lib/validators/review";

const CreateReviewPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    email: "",
    product: "",
    rating: 0,
    title: "",
    review: "",
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const result = reviewFormSchema.safeParse(formData);

    if (!result.success) {
      const flattened = result.error.flatten().fieldErrors;
      Object.values(flattened).forEach((messages) =>
        messages?.forEach((msg) => toast.error(msg))
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!result.success) {
        toast.error(result.message || "Failed to submit review");
        return;
      }

      toast.success("Review submitted successfully! Thank you for sharing your experience.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        product: "",
        rating: 0,
        title: "",
        review: "",
        termsAccepted: false,
      });

      // Redirect to testimonials page
      setTimeout(() => {
        router.push('/testimonials');
      }, 1500);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("An error occurred while submitting your review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="flex h-screen w-full items-center justify-center bg-background-dark py-12 px-2"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('/hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full max-w-2xl">
        {/* Back Link */}
        <Link 
          href="/testimonials"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 group"
        >
          <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="font-medium">Back to Testimonials</span>
        </Link>

        <div className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Share Your PS5 Story
          </h1>
          <p className="text-white/60">
            Your review helps fellow gamers make the right choice. Share your
            experience with your new PS5 gear.
          </p>
        </div>

        <form 
          className="space-y-4 rounded-2xl bg-white/5 p-8 border border-white/10 backdrop-blur-sm"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name or alias"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white">
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-white">
              Product Reviewed
            </label>
            <div className="relative">
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Select a PS5 Product</option>
                <option value="PS5 Console">PS5 Console</option>
                <option value="Controller">DualSense Controller</option>
                <option value="Headset">Pulse 3D Headset</option>
                <option value="Game">Game</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-white">Your Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                >
                  <span
                    className={`material-symbols-outlined text-2xl transition-colors ${
                      star <= (hoverRating || formData.rating)
                        ? "text-yellow-500"
                        : "text-white/20"
                    }`}
                    style={{
                      fontVariationSettings:
                        star <= (hoverRating || formData.rating) ? "'FILL' 1" : "'FILL' 0",
                    }}
                  >
                    star
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-white">Review Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Sum up your experience in a few words"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-white">Your Story</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows={3}
              placeholder="Describe your experience, what you liked most, and any tips for new players..."
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/10 bg-white/5 checked:bg-primary checked:border-primary transition-all"
              />
              <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                <span className="material-symbols-outlined text-base">check</span>
              </span>
            </div>
            <label htmlFor="terms" className="text-sm text-white/60 cursor-pointer select-none">
              I agree to the{" "}
              <Link href="#" className="text-white font-bold underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-white font-bold underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary py-4 font-bold text-white transition-colors hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting && (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            )}
            {isSubmitting ? "Submitting Review..." : "Submit Review"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateReviewPage;