import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Stripe Checkout Session for Renting/Buying/Installments
  app.post('/api/create-checkout-session', async (req, res) => {
    const { carId, carName, price, type, months } = req.body; 

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'car' || process.env.STRIPE_SECRET_KEY.includes('sk_test_...')) {
      return res.status(400).json({ 
        error: 'Stripe Secret Key is not configured correctly. Please update it in the Secrets panel with a valid sk_test_... key.' 
      });
    }

    try {
      const modeText = type === 'rent' 
        ? 'Rental' 
        : type === 'buy' 
          ? 'Purchase' 
          : `Financing (${months} months)`;

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `${carName} - ${modeText}`,
                description: type === 'installment' 
                  ? `Initial installment for ${carName} financing agreement over ${months} months.` 
                  : `Secure payment for ${carName} ${type}.`,
              },
              unit_amount: Math.round(price * 100),
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        automatic_payment_methods: {
          enabled: true,
        },
        success_url: `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.APP_URL}/cars/${carId}`,
      } as any);

      res.json({ id: session.id, url: session.url });
    } catch (error: any) {
      console.error('Stripe error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
