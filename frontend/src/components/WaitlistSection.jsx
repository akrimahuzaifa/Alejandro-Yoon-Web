import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckCircle, Loader2 } from 'lucide-react';
import { mockWaitlistSubmission } from '../data/mock';
import { toast } from 'sonner';

export const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    propertySize: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePropertySizeChange = (value) => {
    setFormData({
      ...formData,
      propertySize: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.company || !formData.propertySize || !formData.phone) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Mock submission (will be replaced with real API call)
      const response = await mockWaitlistSubmission(formData);
      
      if (response.success) {
        setIsSuccess(true);
        toast.success('Successfully joined the waitlist!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          propertySize: '',
          phone: ''
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Demo
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
            See Yunere in action. Schedule a personalized demo and discover how we can transform your CAM reconciliation process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Live product walkthrough</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Personalized consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">No commitment required</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Demo Request Received!
              </h3>
              <p className="text-gray-600 mb-8">
                Thank you for your interest! Our team will reach out within 24 hours to schedule your personalized demo.
              </p>
              <Button 
                onClick={() => setIsSuccess(false)}
                className="bg-slate-600 hover:bg-slate-700"
              >
                Submit Another Response
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="ABC Properties"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertySize">Total Property Size *</Label>
                <Select onValueChange={handlePropertySizeChange} value={formData.propertySize}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select property size range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-5k">0 - 5,000 SF</SelectItem>
                    <SelectItem value="5k-10k">5,000 - 10,000 SF</SelectItem>
                    <SelectItem value="10k-15k">10,000 - 15,000 SF</SelectItem>
                    <SelectItem value="15k-25k">15,000 - 25,000 SF</SelectItem>
                    <SelectItem value="25k-35k">25,000 - 35,000 SF</SelectItem>
                    <SelectItem value="35k-50k">35,000 - 50,000 SF</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-slate-600 hover:bg-slate-700 text-white text-lg font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Request Free Demo'
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                By requesting a demo, you agree to receive updates about Yunere. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
