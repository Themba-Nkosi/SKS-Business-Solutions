import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import nodemailer from 'nodemailer';
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate the request body using zod schema
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission in memory
      const submission = await storage.createContactSubmission({
        ...validatedData,
        createdAt: new Date().toISOString()
      });
      
      // In a real application, you might want to send an email notification
      // For now, we'll just simulate that
      console.log('Contact submission received:', submission);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Contact form submitted successfully',
        data: submission
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Validation error', 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
