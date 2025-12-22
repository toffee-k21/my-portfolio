"use client"
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function Contact() {

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      const data = await res.json()
  
      if (res.ok && data.success) {
        alert("Message sent successfully!")
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        alert(`Failed to send: ${data.error || "Something went wrong"}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to send. Please try again later.")
    }
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev:any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }


    return (
    <section id="contact" className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="space-y-2 text-center">
              <h3 className="text-sm uppercase tracking-wider text-secondary-text">
                Get In Touch
              </h3>
              <h2 className="text-4xl text-foreground">Let's Connect</h2>
              <p className="text-secondary-text max-w-xl mx-auto">
                Open to full-time engineering roles, consulting opportunities, and technical discussions.
                Available for remote or hybrid positions.
              </p>
            </div>

            <div className="max-w-lg mx-auto space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                        <label htmlFor="name" className="block text-sm text-foreground mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        </div>

                        <div>
                        <label htmlFor="email" className="block text-sm text-foreground mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        </div>

                        <div>
                        <label htmlFor="message" className="block text-sm text-foreground mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell me about your project or opportunity..."
                            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        />
                        </div>
                    </div>

                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent-hover transition-colors cursor-pointer">
                        <Send className="w-4 h-4" />
                        Send Message
                    </button>
                </form>
              <p className="text-sm text-center text-secondary-text">
                Or email directly at{' '}
                <a href="mailto:taufiq2004.21@gmail.com" className="text-accent hover:text-accent-hover">
                  taufiq2004.21@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
}