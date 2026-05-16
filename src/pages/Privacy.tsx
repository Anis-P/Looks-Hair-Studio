import React from 'react';

export const Privacy = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">Privacy <span className="text-amber-500">Policy</span></h1>
        <div className="prose prose-invert max-w-none text-gray-400 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to Looks Hair Studio. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data includes first name, last name.</li>
              <li>Contact Data includes email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, browser type and version.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To book and manage your appointments.</li>
              <li>To respond to your inquiries.</li>
              <li>To send you updates about our services (with your consent).</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
