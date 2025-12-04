export default function About() {
  return (
    <div className=" mx-auto px- py-12">
      <div className="max-w-4xl mx-auto container px-4">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#45b8ff] via-[#3287bc] to-[#020608] bg-clip-text text-transparent">About Caresoft Technology</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              Caresoft Technology is a leading provider of cutting-edge technology solutions and products.
              Since our inception, we have been committed to delivering innovative, high-quality products
              that enhance the digital lives of our customers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to make advanced technology accessible to everyone. We strive to offer
              the latest tech products at competitive prices, backed by exceptional customer service
              and support. We believe that technology should empower people, not intimidate them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where technology seamlessly integrates into every aspect of life,
              making things simpler, faster, and more enjoyable. Our goal is to be at the forefront
              of this transformation, continuously innovating and adapting to meet the evolving needs
              of our customers.
            </p>
          </section>



        </div>
      </div>
       

       
      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-[#38aaf1] via-[#2077ac] to-[#0e202b] text-white py-16 mt-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
            Why Choose Caresoft Technology? 🚀
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-semibold mb-2">Free Shipping</h3>
              <p className="opacity-90 text-lg">On orders over ₹5,000</p>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold mb-2">Secure Payment</h3>
              <p className="opacity-90 text-lg">100% secure transactions</p>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-2xl font-semibold mb-2">Best Deals</h3>
              <p className="opacity-90 text-lg">Unbeatable prices guaranteed</p>
            </div>

          </div>
        </div>
      </section>

        

    </div>
     
     

  );
}
