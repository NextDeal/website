"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Language } from '@/lib/i18n';

interface EarlyAccessProps {
  translations: any;
  lang: Language;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  dealershipName: z.string().min(2, { message: "Dealership name is required" }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().optional(),
});

const EarlyAccess = ({ translations, lang }: EarlyAccessProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      dealershipName: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, this would submit to an API
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <section id="early-access" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="lg:pr-12">
              <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <span className={lang === 'he' ? 'ml-2' : 'mr-2'}>{translations.badge}</span>
                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {translations.title}
              </h2>
              
              <p className="text-lg text-slate-600 mb-8">
                {translations.description}
              </p>
              
              <div className="space-y-6">
                {translations.benefits.map((benefit: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className={`h-6 w-6 text-green-500 ${lang === 'he' ? 'ml-3' : 'mr-3'} flex-shrink-0 mt-0.5`} />
                    <div>
                      <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    {translations.form.title}
                  </h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{translations.form.fields.name}</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" {...field} />
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
                              <FormLabel>{translations.form.fields.email}</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="dealershipName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{translations.form.fields.dealershipName}</FormLabel>
                              <FormControl>
                                <Input placeholder="ABC Motors" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{translations.form.fields.phoneNumber}</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.form.fields.message}</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder={translations.form.fields.messagePlaceholder}
                                className="resize-none h-24"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full" size="lg">
                        {translations.form.submit}
                        <ArrowRight className={`${lang === 'he' ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                      </Button>
                    </form>
                  </Form>
                  
                  <p className="text-xs text-slate-500 mt-6 text-center">
                    {translations.form.disclaimer}
                  </p>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {translations.form.success.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {translations.form.success.message}
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    {translations.form.success.button}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;