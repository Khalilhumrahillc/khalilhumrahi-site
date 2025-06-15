import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold">Khalil Humrahi LLC</h1>
        <p className="mt-2 text-lg">Your Partner in FBA Wholesale — Health, Beauty & Home Essentials</p>
      </header>

      <section className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            Based in Florida, Khalil Humrahi LLC is dedicated to sourcing and distributing top-quality products in the Health & Beauty and Home & Kitchen categories. We believe in professional service, reliable partnerships, and competitive pricing.
          </p>
        </motion.div>
      </section>

      <section className="bg-gray-100 p-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Health & Beauty</h3>
                <p>
                  From skincare to wellness supplements, we source trending and high-demand products that meet compliance and customer satisfaction standards.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Home & Kitchen</h3>
                <p>
                  We supply practical, innovative, and aesthetic household items designed to improve everyday life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="p-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="text-indigo-600" />
              <span>Virtual Address: Florida, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-indigo-600" />
              <span>Email: info@khalilhumrahi.com</span>
            </div>
            <Button variant="outline" className="mt-4">Contact Us</Button>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-600 text-white text-center p-4 mt-8">
        <p>&copy; 2025 Khalil Humrahi LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}