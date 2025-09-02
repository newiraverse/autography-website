"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, MapPin, CreditCard, User, CheckCircle, Shield, Mail } from 'lucide-react';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { useRouter } from 'next/navigation';

// Validation schema for credit card form with English localization
const creditCardSchema = z.object({
  // Billing Address
  billingAddress: z.string()
    .min(10, 'Please enter complete address')
    .max(200, 'Address is too long'),
  city: z.string()
    .min(2, 'City name is required')
    .max(50, 'City name is too long')
    .regex(/^[a-zA-Z\s]+$/, 'City name should contain only letters'),
  state: z.string()
    .min(2, 'State name is required')
    .max(50, 'State name is too long'),
  postalCode: z.string()
    .min(6, 'PIN code must be 6 digits')
    .max(6, 'PIN code must be 6 digits')
    .regex(/^\d{6}$/, 'PIN code must contain only numbers'),
  
  // Payment Information
  cardNumber: z.string()
    .min(19, 'Complete card number required')
    .max(19, 'Card number is too long')
    .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Invalid card number format'),
  expiryDate: z.string()
    .min(5, 'Enter expiry date in MM/YY format')
    .max(5, 'Enter expiry date in MM/YY format')
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date format')
    .refine((val) => {
      const [month, year] = val.split('/');
      const expiry = new Date(parseInt('20' + year), parseInt(month) - 1);
      const now = new Date();
      return expiry > now;
    }, 'Card has expired'),
  cvv: z.string()
    .min(3, 'CVV must be 3 or 4 digits')
    .max(4, 'CVV must be 3 or 4 digits')
    .regex(/^\d{3,4}$/, 'CVV must contain only numbers'),
    
  // General Information
  cardholderName: z.string()
    .min(2, 'Cardholder name is required')
    .max(50, 'Name is too long')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters'),
  phoneNumber: z.string()
    .min(10, 'Mobile number must be 10 digits')
    .max(10, 'Mobile number must be 10 digits')
    .regex(/^[6-9]\d{9}$/, 'Enter valid Indian mobile number'),
  email: z.string()
    .email('Enter valid email address')
    .min(5, 'Email address is required'),
});

type CreditCardForm = z.infer<typeof creditCardSchema>;

interface CreditCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
}

// Format card number with spaces and restrict to numbers only
const formatCardNumber = (value: string) => {
  const cleanValue = value.replace(/\D/g, '');
  const limitedValue = cleanValue.substring(0, 16);
  const formattedValue = limitedValue.replace(/(.{4})/g, '$1 ').trim();
  return formattedValue;
};

// Format expiry date and restrict to numbers only
const formatExpiryDate = (value: string) => {
  const cleanValue = value.replace(/\D/g, '');
  const limitedValue = cleanValue.substring(0, 4);
  if (limitedValue.length >= 2) {
    return limitedValue.substring(0, 2) + '/' + limitedValue.substring(2, 4);
  }
  return limitedValue;
};

// Format CVV and restrict to numbers only
const formatCVV = (value: string) => {
  return value.replace(/\D/g, '').substring(0, 4);
};

// Format postal code and restrict to numbers only
const formatPostalCode = (value: string) => {
  return value.replace(/\D/g, '').substring(0, 6);
};

// Format mobile number and restrict to numbers only
const formatMobileNumber = (value: string) => {
  return value.replace(/\D/g, '').substring(0, 10);
};

// Indian states for dropdown
const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 
  'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 
  'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

// Format name and restrict to letters and spaces only
const formatName = (value: string) => {
  return value.replace(/[^a-zA-Z\s]/g, '');
};

// Format city and restrict to letters and spaces only
const formatCity = (value: string) => {
  return value.replace(/[^a-zA-Z\s]/g, '');
};

export function CreditCardModal({ 
  isOpen, 
  onClose, 
  planName, 
  price, 
  billingPeriod 
}: CreditCardModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Billing, 2: Payment, 3: Personal, 4: OTP
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const router = useRouter();

  const form = useForm<CreditCardForm>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      billingAddress: '',
      city: '',
      state: '',
      postalCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
      phoneNumber: '',
      email: '',
    },
  });

  // Check authentication status (mock implementation)
  useEffect(() => {
    // In a real app, check if user is authenticated
    const authToken = localStorage.getItem('authToken');
    setIsLoggedIn(!!authToken);
  }, []);

  // Save form state to localStorage for recovery after login
  const saveFormState = () => {
    const formData = form.getValues();
    localStorage.setItem('creditCardFormState', JSON.stringify({
      formData,
      currentStep,
      planName,
      price,
      billingPeriod
    }));
  };

  // Restore form state after login
  const restoreFormState = () => {
    const savedState = localStorage.getItem('creditCardFormState');
    if (savedState) {
      const { formData, currentStep: savedStep } = JSON.parse(savedState);
      form.reset(formData);
      setCurrentStep(savedStep);
      localStorage.removeItem('creditCardFormState');
    }
  };

  // Validate current step before proceeding
  const validateCurrentStep = async () => {
    let fieldsToValidate: (keyof CreditCardForm)[] = [];
    
    switch (currentStep) {
      case 1: // Billing Address
        fieldsToValidate = ['billingAddress', 'city', 'state', 'postalCode'];
        break;
      case 2: // Payment Information
        fieldsToValidate = ['cardNumber', 'expiryDate', 'cvv'];
        break;
      case 3: // Personal Information
        fieldsToValidate = ['cardholderName', 'phoneNumber', 'email'];
        break;
    }

    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  // Send OTP for verification
  const sendOTP = async () => {
    try {
      setIsProcessing(true);
      const formData = form.getValues();
      
      const response = await fetch('/api/otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'send',
          email: formData.email,
          userData: formData
        }),
      });

      if (response.ok) {
        setOtpSent(true);
        setOtpError('');
      } else {
        const error = await response.json();
        setOtpError(error.error || 'Failed to send OTP');
      }
    } catch (error) {
      setOtpError('Failed to send OTP. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Verify OTP and process payment
  const verifyOTPAndProcess = async () => {
    try {
      setIsProcessing(true);
      setOtpError('');
      const formData = form.getValues();

      // Verify OTP
      const otpResponse = await fetch('/api/otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'verify',
          email: formData.email,
          otp: otp
        }),
      });

      if (!otpResponse.ok) {
        const error = await otpResponse.json();
        setOtpError(error.error || 'Invalid OTP');
        return;
      }

      // Process payment (simulate payment processing)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Send billing confirmation email
      const emailResponse = await fetch('/api/billing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          cardholderName: formData.cardholderName,
          planName,
          price,
          billingPeriod,
          billingAddress: formData.billingAddress,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          phoneNumber: formData.phoneNumber,
          cardNumber: formData.cardNumber,
        }),
      });

      if (emailResponse.ok) {
        console.log('Billing confirmation email sent successfully');
      }

      // Mark as completed
      setIsCompleted(true);
      
      // Wait a moment to show success state
      setTimeout(() => {
        setIsProcessing(false);
        onClose();
        form.reset();
        setCurrentStep(1);
        setIsCompleted(false);
        setOtpSent(false);
        setOtp('');
        
        // Clear any saved form state
        localStorage.removeItem('creditCardFormState');
      }, 3000);
      
    } catch (error) {
      setIsProcessing(false);
      setOtpError('Payment processing failed. Please try again.');
      console.error('Payment failed:', error);
    }
  };

  const onSubmit = async (data: CreditCardForm) => {
    // This should not be called directly anymore
    // The flow goes through OTP verification
    console.log('Form submitted:', data);
  };

  const handleNextStep = async () => {
    const isValid = await validateCurrentStep();
    
    if (!isValid) {
      // Focus on first error field
      const errors = form.formState.errors;
      const firstErrorField = Object.keys(errors)[0] as keyof CreditCardForm;
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        element?.focus();
      }
      return;
    }

    if (currentStep === 3) {
      // After step 3 (personal info), check authentication
      if (!isLoggedIn) {
        // Save form state and redirect to login
        saveFormState();
        router.push('/login?message=complete-payment&returnTo=payment');
        return;
      } else {
        // User is logged in, proceed to OTP step
        setCurrentStep(4);
        await sendOTP();
      }
    } else if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 4) {
        setOtpSent(false);
        setOtp('');
        setOtpError('');
      }
    }
  };

  // Check if returning from login
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('returnTo') === 'payment' && isLoggedIn) {
      restoreFormState();
    }
  }, [isLoggedIn]);

  if (!isOpen) return null;

  // Success state
  if (isCompleted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative bg-white dark:bg-black border border-gray-300 dark:border-gray-700 w-full max-w-md p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
            Trial Started!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your 14-day free trial has started. Please create your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white dark:bg-black border border-gray-300 dark:border-gray-700 w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-black dark:bg-white text-white dark:text-black p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Start {planName} Trial</h2>
            <p className="text-sm">14-day free trial, then ₹{price}/{billingPeriod === 'monthly' ? 'month' : 'year'}</p>
          </div>
          <button onClick={onClose} className="text-white dark:text-black hover:opacity-70">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-black dark:text-white">
              Step {currentStep} of 4
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(currentStep / 4) * 100}%`,
                background: 'linear-gradient(to right, #1967d2, #1557b0)'
              }}
            />
          </div>
        </div>

        {/* Form */}
        <div className="p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              
              {/* Step 1: Billing Address */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Billing Address
                    </h3>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="billingAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black dark:text-white">
                          Complete Address <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="123 Main Street, Apartment 4B"
                            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black dark:text-white">
                          City <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Mumbai"
                            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3"
                            value={field.value}
                            onChange={(e) => {
                              const formatted = formatCity(e.target.value);
                              field.onChange(formatted);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black dark:text-white">
                          State <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3 rounded-md"
                          >
                            <option value="">Select State</option>
                            {indianStates.map((state) => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black dark:text-white">
                          PIN Code <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="400001"
                            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3"
                            value={field.value}
                            onChange={(e) => {
                              const formatted = formatPostalCode(e.target.value);
                              field.onChange(formatted);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full text-white hover:opacity-90 p-3 font-semibold"
                    style={{ background: 'linear-gradient(to right, #1967d2, #1557b0)' }}
                  >
                    Save Address
                  </Button>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Payment Information
                    </h3>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black dark:text-white">
                          Card Number <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="1234 5678 9012 3456"
                            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3"
                            value={field.value}
                            onChange={(e) => {
                              const formatted = formatCardNumber(e.target.value);
                              field.onChange(formatted);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black dark:text-white">
                            Expiry Date <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="MM/YY"
                              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3"
                              value={field.value}
                              onChange={(e) => {
                                const formatted = formatExpiryDate(e.target.value);
                                field.onChange(formatted);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black dark:text-white">
                            CVV <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123"
                              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3 text-center"
                              value={field.value}
                              onChange={(e) => {
                                const formatted = formatCVV(e.target.value);
                                field.onChange(formatted);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="button"
                      onClick={handlePreviousStep}
                      className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-3"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="flex-1 text-white hover:opacity-90 p-3 font-semibold"
                      style={{ background: 'linear-gradient(to right, #1967d2, #1557b0)' }}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: General Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Personal Information
                    </h3>
                  </div>

                  <FormField
                    control={form.control}
                    name="cardholderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black dark:text-white">
                          Cardholder Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Sharma"
                            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3"
                            value={field.value}
                            onChange={(e) => {
                              const formatted = formatName(e.target.value);
                              field.onChange(formatted);
                            }}
                          />
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
                        <FormLabel className="text-black dark:text-white">
                          Mobile Number <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="flex">
                            <span className="flex items-center px-3 border border-r-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-black dark:text-white">
                              +91
                            </span>
                            <Input
                              placeholder="9876543210"
                              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3 rounded-l-none"
                              value={field.value}
                              onChange={(e) => {
                                const formatted = formatMobileNumber(e.target.value);
                                field.onChange(formatted);
                              }}
                            />
                          </div>
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
                        <FormLabel className="text-black dark:text-white">
                          Email Address <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            type="email"
                            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-3"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Note:</strong> Your 14-day free trial will start. You can cancel before the trial ends.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="button"
                      onClick={handlePreviousStep}
                      className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-3"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="flex-1 text-white hover:opacity-90 p-3 font-semibold"
                      style={{ background: 'linear-gradient(to right, #1967d2, #1557b0)' }}
                    >
                      {isLoggedIn ? 'Continue to Verification' : 'Login to Continue'}
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: OTP Verification */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Verify Your Payment
                    </h3>
                  </div>

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      We've sent a 6-digit verification code to:
                    </p>
                    <p className="font-semibold text-black dark:text-white">
                      {form.getValues('email')}
                    </p>
                  </div>

                  {otpSent && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-black dark:text-white mb-2">
                          Enter Verification Code <span className="text-red-500">*</span>
                        </label>
                        <Input
                          placeholder="123456"
                          value={otp}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').substring(0, 6);
                            setOtp(value);
                            setOtpError('');
                          }}
                          className="text-center text-2xl font-mono tracking-wider border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white p-4"
                          maxLength={6}
                        />
                        {otpError && (
                          <p className="text-red-500 text-sm mt-2">{otpError}</p>
                        )}
                      </div>

                      <div className="text-center">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={sendOTP}
                          disabled={isProcessing}
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          Didn't receive code? Resend
                        </Button>
                      </div>

                      <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          <strong>Security:</strong> This code expires in 10 minutes. Never share it with anyone.
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          type="button"
                          onClick={handlePreviousStep}
                          className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-3"
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={verifyOTPAndProcess}
                          disabled={isProcessing || otp.length !== 6}
                          className="flex-1 text-white hover:opacity-90 disabled:opacity-50 p-3 font-semibold"
                          style={{ background: 'linear-gradient(to right, #1967d2, #1557b0)' }}
                        >
                          {isProcessing ? 'Processing...' : 'Complete Payment'}
                        </Button>
                      </div>
                    </div>
                  )}

                  {!otpSent && (
                    <div className="text-center">
                      <Button
                        type="button"
                        onClick={sendOTP}
                        disabled={isProcessing}
                        className="text-white hover:opacity-90 p-3 font-semibold"
                        style={{ background: 'linear-gradient(to right, #1967d2, #1557b0)' }}
                      >
                        {isProcessing ? 'Sending...' : 'Send Verification Code'}
                      </Button>
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                Your trial will automatically convert to a paid subscription after 14 days.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
