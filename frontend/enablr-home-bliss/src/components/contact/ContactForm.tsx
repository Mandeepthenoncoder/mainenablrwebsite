import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, MessageSquare, MapPin, Send, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const inputVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom * 0.1 }
  })
};

const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    console.log(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            custom={0}
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-enablr-navy font-medium">Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="Your name" 
                        {...field} 
                        className="pl-10 border-gray-300 focus:border-enablr-navy focus:ring-1 focus:ring-enablr-navy rounded-lg py-2.5" 
                      />
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div 
            custom={1}
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-enablr-navy font-medium">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="Your email" 
                        {...field} 
                        className="pl-10 border-gray-300 focus:border-enablr-navy focus:ring-1 focus:ring-enablr-navy rounded-lg py-2.5" 
                      />
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            custom={2}
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-enablr-navy font-medium">Phone (Optional)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="Your phone number" 
                        {...field} 
                        className="pl-10 border-gray-300 focus:border-enablr-navy focus:ring-1 focus:ring-enablr-navy rounded-lg py-2.5" 
                      />
                      <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div 
            custom={3}
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-enablr-navy font-medium">Subject</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="Message subject" 
                        {...field} 
                        className="pl-10 border-gray-300 focus:border-enablr-navy focus:ring-1 focus:ring-enablr-navy rounded-lg py-2.5" 
                      />
                      <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        </div>

        <motion.div 
          custom={4}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-enablr-navy font-medium">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Your message" 
                    {...field} 
                    className="min-h-[150px] border-gray-300 focus:border-enablr-navy focus:ring-1 focus:ring-enablr-navy rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          custom={5}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <Button 
            type="submit" 
            className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy hover:border hover:border-enablr-navy shadow-sm hover:shadow-md group transition-all duration-300 rounded-md px-6 py-2.5"
          >
            Send Message
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </form>
    </Form>
  );
};

export default ContactForm;
