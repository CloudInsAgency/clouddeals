# CloudDeals.com

Price tracking and deal alerts website — companion to the CloudDeals iOS app.

## Site Structure

```
clouddeals-site/
├── index.html              ← Homepage
├── deals/
│   └── index.html          ← All deals hub (filterable)
├── guides/
│   ├── index.html          ← Guides hub
│   └── best-amazon-echo-deals.html  ← Article 1 (Amazon qualifying sales)
├── compare/
│   └── amazon-vs-best-buy.html      ← Comparison article
├── app/
│   └── index.html          ← App waitlist page
├── assets/
│   ├── css/style.css       ← Global stylesheet
│   └── js/main.js          ← Global JavaScript
└── _config.yml             ← GitHub Pages config
```

## Deploying to GitHub Pages

1. Create a new GitHub repo named `clouddeals` (or your custom domain repo)
2. Upload all files maintaining the folder structure above
3. Go to repo Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site will be live at `https://[username].github.io/clouddeals/`

## Custom Domain (clouddeals.com)

1. Add a file named `CNAME` to the root with content: `clouddeals.com`
2. In your domain registrar DNS settings, add:
   - A record: `@` → `185.199.108.153`
   - A record: `@` → `185.199.109.153`
   - A record: `@` → `185.199.110.153`
   - A record: `@` → `185.199.111.153`
   - CNAME: `www` → `[username].github.io`

## Amazon Affiliate Tag

All affiliate links use tag: `clouddeals-20`

To update the tag, find/replace `clouddeals-20` across all HTML files.

## Weekly Content Updates

- **Every Monday**: Update `deals/index.html` with fresh deals and current prices
- **Monthly**: Update article dates and price data in guides
- **As needed**: Add new articles to `guides/` following the existing template

## Adding New Articles

Copy `guides/best-amazon-echo-deals.html` as a template. Update:
1. Title, meta description, canonical URL
2. Article content and prices
3. Internal links
4. Schema markup dates
5. Add link to new article from `guides/index.html`

---

Built by Cloud Design Studio LLC · cloudstudiodesign.com
