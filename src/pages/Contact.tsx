import { Check, Mail, MessageCircle, Send } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const contactContent = document.querySelector('.contact-content');
    if (contactContent) {
      contactContent.classList.add('fade-in');
    }
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    const userMessage = formData.get("message") as string;

    // Format the message with AgeInsight prefix and additional context
    const formattedMessage = `
[AgeInsight Contact Form]

From: ${formData.get("name")}
Email: ${formData.get("email")}

Message:
${userMessage}

--
This inquiry was sent from AgeInsight Contact Form
Timestamp: ${new Date().toLocaleString()}
    `.trim();

    // Update the message in formData
    formData.set("message", formattedMessage);
    formData.append("subject", "New AgeInsight Contact Form Submission");
    formData.append("access_key", "9c4dbdf0-8c38-47a5-aab1-9e3b06b196db");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSubmitted(true);
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
      </style>

      <div className="py-24 px-4 min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl contact-content">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Contact Us
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Submit the Form</h3>
                    <p className="mt-1"></p>
                    <p className="mt-1 text-purple-200">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Working Hours</h3>
                    <p className="mt-1">Available Monday to Friday</p>
                    <p className="mt-1 text-purple-200">9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/SomeshR82674271"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/somesh-biswal-b73576320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>

                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mb-4">
                    <Check className="w-8 h-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Message Sent!</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="yourname@example.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Type your message here (AgeInsight inquiry)"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {result && !isSubmitted && (
                    <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                      {result}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
