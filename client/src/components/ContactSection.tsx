import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Phone, Mail, MapPin, Building, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Contact <span className="text-[#F37022]">Us</span></h2>
          <p className="max-w-3xl mx-auto text-lg">Reach out to discuss your project needs or learn more about our services.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 bg-[#F37022] rounded-full p-3 text-white flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p>011 674 0922</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-[#F37022] rounded-full p-3 text-white flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p>info@sksbusiness.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-[#F37022] rounded-full p-3 text-white flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Head Office</h4>
                    <p>1163 Frans Venter Street, Eternia Avenue, Roodepoort 1709</p>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
          
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service of Interest</FormLabel>
                      <Select 
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="civil-works">Civil Works</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="electrical">Electrical Works</SelectItem>
                          <SelectItem value="maintenance">Building Maintenance</SelectItem>
                          <SelectItem value="vegetation">Vegetation Management</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project" 
                          className="resize-none" 
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#F37022] hover:bg-[#F37022]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-montserrat mb-6">Find Us</h3>
          <div className="h-96 bg-[#D9D9D9] bg-opacity-30 rounded-lg relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.445662497546!2d27.863399375485865!3d-26.110873997147894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a113e8af7c77%3A0x62f2bf10058bbbc6!2sRoodepoort%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1663342681650!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SKS Business Solutions location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
