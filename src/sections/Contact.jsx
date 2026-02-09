import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anupamkumar3062@gmail.com",
    href: "mailto:anupamkumar3062@gmail.com",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91 99734 67274",
    href: "tel:+919973467274",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(), // ⭐ IMPORTANT
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again later.",
      });

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Let's build <span className="italic text-white">something great.</span>
          </h2>

          <p className="text-muted-foreground">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* FORM */}
          <div className="glass p-8 rounded-3xl border border-primary/30">
            <form className="space-y-6" onSubmit={handleSubmit}>

              <input
                type="text"
                required
                placeholder="Your name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none"
              />

              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none"
              />

              <textarea
                rows={5}
                required
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none resize-none"
              />

              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : <>Send Message <Send /></>}
              </Button>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>

              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
