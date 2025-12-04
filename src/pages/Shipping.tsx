export default function Shipping() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8  bg-gradient-to-r from-[#72c8fe] via-[#3c9edc] to-[#020608] bg-clip-text text-transparent">
          Shipping Policy
        </h1>
        
        <div className="bg-card rounded-2xl shadow-xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#3491cb]">1. Shipping Coverage</h2>
            <p className="text-muted-foreground">
              We currently ship to all locations within India. International shipping is not available at this time. We deliver to both residential and commercial addresses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#3491cb]">2. Processing Time</h2>
            <p className="text-muted-foreground mb-2">
              Orders are typically processed within 1-2 business days after payment confirmation:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Orders placed on weekends/holidays are processed on the next business day</li>
              <li>You will receive a confirmation email once your order ships</li>
              <li>Large orders may require additional processing time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#3491cb]">3. Delivery Time</h2>
            <p className="text-muted-foreground mb-2">
              Estimated delivery times vary by location:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li><strong>Metro Cities:</strong> 3-5 business days</li>
              <li><strong>Other Cities:</strong> 5-7 business days</li>
              <li><strong>Remote Areas:</strong> 7-10 business days</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Please note these are estimates and actual delivery may vary based on courier availability and external factors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#3491cb]">4. Shipping Charges</h2>
            <p className="text-muted-foreground mb-2">
              Shipping costs are calculated based on:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Order value and weight</li>
              <li>Delivery location</li>
              <li>Selected shipping method</li>
            </ul>
            <p className="text-vibrant-purple font-semibold mt-2">
              🎉 FREE SHIPPING on orders above ₹5,000!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#3491cb]">5. Order Tracking</h2>
            <p className="text-muted-foreground">
              Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order status through:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
              <li>Your account dashboard under "My Orders"</li>
              <li>The tracking link provided in the shipping confirmation email</li>
              <li>Our customer service team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#3491cb]">6. Delivery Issues</h2>
            <p className="text-muted-foreground mb-2">
              If you encounter any delivery issues:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Ensure the shipping address is correct and complete</li>
              <li>Someone should be available to receive the package</li>
              <li>Contact us immediately if delivery is delayed beyond estimated time</li>
              <li>Inspect packages upon delivery for any damage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#3491cb]">7. Failed Delivery Attempts</h2>
            <p className="text-muted-foreground">
              If delivery fails due to incorrect address, unavailability, or refusal to accept:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
              <li>The courier will attempt delivery up to 3 times</li>
              <li>You will be notified via SMS/email for each attempt</li>
              <li>After 3 failed attempts, the order will be returned to us</li>
              <li>Return shipping charges may apply for redelivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#3491cb]">8. Lost or Damaged Packages</h2>
            <p className="text-muted-foreground">
              If your package is lost or arrives damaged, please contact our customer service within 48 hours of expected delivery. We will investigate and arrange for a replacement or refund as appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#3491cb]">9. Contact for Shipping Queries</h2>
            <p className="text-muted-foreground">
              For any shipping-related questions, contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              📧 Email: shipping@caresofttech.com<br />
              📞 Phone: +91 1234567890<br />
              ⏰ Support Hours: Mon-Sat, 9:00 AM - 6:00 PM IST
            </p>
          </section>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
