# Pexels API Integration

## Setup Instructions

1. **Get your Pexels API Key**
   - Go to https://www.pexels.com/api/
   - Sign up for a free account
   - Generate your API key

2. **Configure the API Key**
   - Create a file named `.env.local` in the root of the `souvi-landing` directory
   - Add the following line:
   ```
   NEXT_PUBLIC_PEXELS_API_KEY=BekWxUz4A7v9CTRlm5lkZUdnZvfhVNkS4vGvThvFqFWObsKvxgMCnhhE
   ```
   - Replace `your_api_key_here` with your actual Pexels API key

3. **Restart the Development Server**
   ```bash
   npm run dev
   ```

## Components Using Pexels API

### Hero Component
- Fetches 8 UGC-style videos from Pexels
- Queries: 'fashion model', 'makeup tutorial', 'product review', 'unboxing'
- Displays in a mosaic grid with hover effects

### ExamplesGrid Component
- Fetches videos based on selected category
- Categories: Moda, Cosméticos, Joias, Restaurantes, etc.
- Interactive category filter

### ModelsSection Component
- Fetches 4 portrait photos of models
- Query: 'portrait model'
- Displays in a 2x2 grid layout

## API Limits

The free Pexels API tier includes:
- 200 requests per hour
- 20,000 requests per month

## Troubleshooting

If images/videos don't load:
1. Check that your API key is correctly set in `.env.local`
2. Verify the server was restarted after adding the key
3. Check browser console for API errors
4. Ensure you haven't exceeded API rate limits
