# Sweepo Website - Professional Cleaning Services

## Project Overview

A professional, responsive website for Sweepo - a cleaning services company in New Zealand. The website features modern design, comprehensive service pages, contact forms, and is optimized for deployment on nginx servers.

**Slogan:** "We sweep, you relax"  
**Domain:** sweepo.co.nz  
**Services:** Home Cleaning, Commercial Cleaning, Pest Control, Garbage Removal, Lawn & Garden, Car Valet

## File Structure

```
sweepo-website/
├── index.html                          # Homepage
├── company.html                        # Company details page
├── contact.html                        # Contact page
├── README.md                           # This file
├── assets/
│   ├── css/
│   │   └── style.css                   # Main stylesheet
│   ├── js/
│   │   └── script.js                   # JavaScript functionality
│   └── images/                         # Image directory structure
│       ├── team/                       # Team photos (placeholder references)
│       │   ├── customer-service-team.jpg
│       │   ├── cleaning-specialists.jpg
│       │   └── management-team.jpg
│       └── showcase/                   # Service showcase images
│           ├── home-cleaning-1.jpg
│           ├── commercial-cleaning-1.jpg
│           ├── pest-control-1.jpg
│           ├── lawn-garden-1.jpg
│           ├── car-valet-1.jpg
│           └── garbage-removal-1.jpg
└── services/                           # Service pages directory
    ├── home-cleaning.html
    ├── commercial-cleaning.html
    ├── pest-control.html              # To be created
    ├── garbage-removal.html           # To be created
    ├── lawn-garden.html               # To be created
    └── car-valet.html                 # To be created
```

## Deployment Instructions

### 1. Prepare Your Server

Ensure your nginx server is running and you have access to the web root directory (typically `/var/www/html/` or `/usr/share/nginx/html/`).

### 2. Upload Files

1. **Create the project directory:**
   ```bash
   sudo mkdir -p /var/www/html/sweepo
   ```

2. **Upload all files maintaining the directory structure:**
   ```bash
   # Upload files to server (example using scp)
   scp -r sweepo-website/* user@your-server:/var/www/html/sweepo/
   ```

3. **Set proper permissions:**
   ```bash
   sudo chown -R www-data:www-data /var/www/html/sweepo
   sudo chmod -R 755 /var/www/html/sweepo
   ```

### 3. Configure Nginx

Create or edit your nginx configuration:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name sweepo.co.nz www.sweepo.co.nz;
    
    root /var/www/html/sweepo;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/javascript text/javascript application/x-javascript text/xml application/xml application/xml+rss;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Handle routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
    
    # Deny access to sensitive files
    location ~ /\.ht {
        deny all;
    }
    
    # Custom error pages
    error_page 404 /index.html;
    error_page 500 502 503 504 /index.html;
}

# Redirect HTTP to HTTPS (add after SSL setup)
# server {
#     listen 80;
#     server_name sweepo.co.nz www.sweepo.co.nz;
#     return 301 https://$server_name$request_uri;
# }
```

### 4. Add Images

Replace the placeholder image references with your actual service images:

1. **Team photos** - Add to `assets/images/team/`:
    - `customer-service-team.jpg` - Your customer service team
    - `cleaning-specialists.jpg` - Your cleaning professionals
    - `management-team.jpg` - Your management team

2. **Service showcase images** - Add to `assets/images/showcase/`:
    - `home-cleaning-1.jpg` - Home cleaning in action
    - `commercial-cleaning-1.jpg` - Office/commercial cleaning
    - `pest-control-1.jpg` - Pest control service
    - `lawn-garden-1.jpg` - Lawn and garden maintenance
    - `car-valet-1.jpg` - Car cleaning service
    - `garbage-removal-1.jpg` - Waste removal service

### 5. Complete Missing Service Pages

Create the remaining service pages by copying the structure from existing pages:

1. **pest-control.html** - Copy from `services/home-cleaning.html` and modify content
2. **garbage-removal.html** - Copy and modify for garbage removal services
3. **lawn-garden.html** - Copy and modify for lawn and garden services
4. **car-valet.html** - Copy and modify for car valet services

### 6. Test the Website

1. **Restart nginx:**
   ```bash
   sudo nginx -t  # Test configuration
   sudo systemctl restart nginx
   ```

2. **Test functionality:**
    - Navigation between pages
    - Contact forms (note: backend API integration needed)
    - Quote modal functionality
    - Mobile responsiveness
    - Image loading

## Backend Integration

### Quote Form API

The quote forms are configured to send data to a backend API. You'll need to:

1. **Create API endpoint** for quote submissions
2. **Update JavaScript** in `assets/js/script.js`:
   ```javascript
   // Replace the simulateAPICall function with actual API call
   async function submitQuoteToAPI(data) {
       const response = await fetch('/api/quotes', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data)
       });
       return response.json();
   }
   ```

### Contact Form API

Similar setup needed for the contact form in `contact.html`.

## SSL Certificate Setup

For production, set up SSL using Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d sweepo.co.nz -d www.sweepo.co.nz
```

## Features Included

### ✅ Completed Features
- Responsive design for all devices
- Professional navigation with dropdown menus
- Hero sections with call-to-action buttons
- Service overview and detailed service pages
- Company information and team sections
- Contact page with multiple contact methods
- Quote modal with form validation
- Professional styling and animations
- SEO-optimized meta tags
- Accessibility features

### 🔄 Requires Backend Integration
- Quote form submission
- Contact form submission
- Email notifications
- Quote processing system

### 📝 To Be Completed
- Additional service pages (pest-control, garbage-removal, lawn-garden, car-valet)
- Service showcase images
- Team photos
- Blog/news section (optional)
- Customer portal (optional)

## Customization

### Colors
The website uses a professional blue color scheme:
- Primary: #007bff
- Success: #28a745
- Warning: #ffc107
- Danger: #dc3545

### Fonts
- Primary font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Headings are bold with good hierarchy

### Contact Information
Update the following throughout the site:
- Phone: +64 21 123 4567 (currently dummy)
- Email: info@sweepo.co.nz
- Address: Auckland, New Zealand (update with specific address)

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Optimized CSS and JavaScript
- Image optimization recommended
- Gzip compression enabled
- Caching headers configured
- Minimal external dependencies

## Security Considerations

- XSS protection headers
- Content Security Policy
- Form validation (client and server-side needed)
- Sensitive file access denied
- HTTPS redirect (after SSL setup)

## Maintenance

### Regular Updates
- Keep contact information current
- Update service pricing regularly
- Add new testimonials
- Update team photos as needed
- Monitor and fix broken links

### Analytics
Consider adding Google Analytics or similar:
```html
<!-- Add to <head> section of all pages -->
<!-- Google Analytics code here -->
```

## Support

For technical support or questions about the website:
- Review this documentation
- Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- Test in browser developer tools
- Validate HTML/CSS using online validators

## License

This website template is created specifically for Sweepo cleaning services. All rights reserved.