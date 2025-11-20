import { z } from 'zod';

// Review form validation schema
export const reviewFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your name (at least 2 characters)')
    .max(50, 'Name is too long (maximum 50 characters)'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  
  product: z
    .string()
    .min(1, 'Please select the product you want to review'),
  
  rating: z
    .number()
    .min(1, 'Please give a star rating for your review')
    .max(5, 'Rating must be between 1 and 5 stars'),
  
  title: z
    .string()
    .min(5, 'Please enter a title for your review (at least 5 characters)')
    .max(100, 'Title is too long (maximum 100 characters)'),
  
  review: z
    .string()
    .min(10, 'Please write a detailed review (at least 10 characters)')
    .max(1000, 'Review is too long (maximum 1000 characters)'),
  
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Please accept the terms and conditions to continue',
    }),
});

// Type inference from schema
export type ReviewFormData = z.infer<typeof reviewFormSchema>;
