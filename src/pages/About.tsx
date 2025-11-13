export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Caresoft Technology</h1>

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

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
                <p className="text-muted-foreground">
                  We source only the best products from trusted manufacturers worldwide.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Get the best deals with our regular discounts and special offers.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Free shipping on orders over $100 with quick delivery times.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated team is always ready to assist you with any questions.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-primary text-primary-foreground p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
            <p className="leading-relaxed">
              We're more than just a technology retailer – we're a community of tech enthusiasts
              dedicated to bringing you the best products and experiences. Join thousands of satisfied
              customers who trust Caresoft Technology for their tech needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
