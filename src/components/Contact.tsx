import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before sending your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append("_subject", `New message from ${name}: ${subject}`);

      await fetch(`https://formsubmit.co/chetanmestry3074@gmail.com`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      toast({
        title: "Message sent",
        description: "Thank you! Your message has been sent successfully.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description:
          "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#1a1a1a] text-white">
  <div className="container mx-auto">
    {/* Title Section (Unchanged) */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">
        Get in Touch
      </h2>
      <p className="text-lg text-film-300">
        Have a project in mind? Let's collaborate and create something beautiful together.
      </p>
    </div>

    {/* Two-column layout */}
    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
      
      {/* Left Column – Info */}
      <div>
        {/* Phone / WhatsApp */}
        <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Phone / WhatsApp</h3>
        <a
          href="https://wa.me/919325196369"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-white underline hover:text-green-400 transition mb-8 block"
        >
          9325196369
        </a>

        {/* Email */}
        <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">E-mail</h3>
        <p className="text-lg mb-8">chetanmestry3074@gmail.com</p>

        {/* Location */}
        <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Location</h3>
        <p className="text-lg">Mapusa, Goa, India</p>
      </div>


      {/* Right Column – Contact Form */}
      <form className="space-y-8" onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name" className="sr-only">Name</label>
    <input
      id="name"
      type="text"
      placeholder="Your name*"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2 placeholder:text-gray-400"
    />
  </div>

  <div>
    <label htmlFor="email" className="sr-only">Email</label>
    <input
      id="email"
      type="email"
      placeholder="Your email*"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2 placeholder:text-gray-400"
    />
  </div>

  <div>
    <label htmlFor="subject" className="sr-only">Subject</label>
    <input
      id="subject"
      type="text"
      placeholder="Subject"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2 placeholder:text-gray-400"
    />
  </div>

  <div>
    <label htmlFor="message" className="sr-only">Message</label>
    <textarea
      id="message"
      placeholder="Your message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      rows={5}
      className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2 placeholder:text-gray-400 resize-none"
    />
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className="bg-gray-300 text-black font-bold uppercase px-6 py-3 tracking-wide hover:bg-white transition disabled:opacity-60"
  >
    {isSubmitting ? "Sending..." : "Send Message"}
  </button>
</form>

    </div>
  </div>
</section>

  );
};

export default Contact;
