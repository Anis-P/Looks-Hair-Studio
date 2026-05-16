import React from 'react';

export const Terms = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">Terms & <span className="text-amber-500">Conditions</span></h1>
        <div className="prose prose-invert max-w-none text-gray-400 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Appointment Booking</h2>
            <p>Appointments can be booked online, via WhatsApp, or by calling our studio. We recommend booking at least 24 hours in advance to ensure your preferred time slot.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Cancellation Policy</h2>
            <p>We value your time and ours. If you need to cancel or reschedule, please notify us at least 4 hours before your appointment time. Late cancellations may be subject to a fee.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Service Guarantee</h2>
            <p>We strive for perfection. If you are not satisfied with your service, please let us know before leaving the studio so we can make it right. No refunds are provided once the service is completed and accepted.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Health & Safety</h2>
            <p>Please inform your stylist of any allergies or skin sensitivities before your treatment. We are not responsible for reactions to products if prior information was not provided.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
