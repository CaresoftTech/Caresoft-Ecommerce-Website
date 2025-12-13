import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";


const PLACE_ID = "ChIJK_mPc6pnUjoRjJmVqYVvA8Q"; 
const API_KEY = "AIzaSyAJhdOOADka4p-ePW_4VEpdfJgOxO0RKOY"; 


declare global {
  interface Window {
    google: any;
  }
}

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
}

const GoogleReviews: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    function initService() {
      if (!window.google || !mapRef.current) return;

      const service = new window.google.maps.places.PlacesService(mapRef.current);

      service.getDetails(
        {
          placeId: PLACE_ID,
          fields: ["reviews", "rating", "user_ratings_total"],
        },
        (place: any, status: any) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place
          ) {
            setReviews(place.reviews || []);
            setRating(place.rating || 0);
            setTotal(place.user_ratings_total || 0);
          }
        }
      );
    }

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
      script.async = true;
      script.onload = initService;
      document.body.appendChild(script);
    } else {
      initService();
    }
  }, []);

  return (
    <section className="w-full py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Google Reviews
          </h2>

          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(rating)
                      ? "fill-yellow-400"
                      : "fill-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              {rating.toFixed(1)} / 5 • {total} reviews
            </span>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {review.author_name}
                  </h4>

                  <div className="flex text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm line-clamp-4">
                “{review.text}”
              </p>
            </div>
          ))}
        </div>

        {/* Hidden map ref required by API */}
        <div ref={mapRef} className="hidden" />
      </div>
    </section>
  );
};

export default GoogleReviews;
