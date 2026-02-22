import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  googleVerification?: string;
  bingVerification?: string;
  author?: string;
  publisher?: string;
  robots?: string;
  twitterHandle?: string;
  themeColor?: string;
}

export const SEO = ({
  title = 'Rent-a-Truck | Logistics Revolutionized',
  description = 'Revolutionizing Logistics in Nigeria. Move anything, anywhere, anytime with total peace of mind.',
  image = '/og-image.jpg', // Default OG image
  url = 'https://rentatruck.ng',
  type = 'website',
  keywords = [
    'truck rental',
    'logistics Nigeria',
    'move anything',
    'trucking marketplace',
    'haulage Nigeria',
    'commercial vehicle rental',
  ],
  googleVerification,
  bingVerification,
  author = 'Rent-a-Truck',
  publisher = 'Rent-a-Truck',
  robots = 'index, follow',
  twitterHandle = '@rentatruck',
  themeColor = '#000000',
}: SEOProps) => {
  const siteTitle = title.includes('Rent-a-Truck') ? title : `${title} | Rent-a-Truck`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="theme-color" content={themeColor} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta name="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta name="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Rent-a-Truck" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Itemprop for Schema.org */}
      <meta itemProp="name" content={siteTitle} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      {/* Verification Tags */}
      {googleVerification && <meta name="google-site-verification" content={googleVerification} />}
      {bingVerification && <meta name="msvalidate.01" content={bingVerification} />}
    </Helmet>
  );
};
