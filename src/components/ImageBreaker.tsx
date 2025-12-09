

export default function ImageBreaker() {
  return (
    <div className="w-full h-32 sm:h-40 md:h-48 overflow-hidden">
      <img
        src="/assets/breaker.jpg"   // ← Put your image in public/assets/
        alt="Travel landscape breaker"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}