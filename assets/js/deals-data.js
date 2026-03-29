/**
 * CloudDeals — Weekly Deals Data File
 * =====================================
 * Update this file every Monday to refresh the deals page.
 * Just change the ASIN, title, price, and category for each product.
 * The page renders automatically from this data.
 *
 * HOW TO UPDATE:
 * 1. Find a great deal on Amazon
 * 2. Copy the ASIN from the URL: amazon.com/dp/[ASIN]
 * 3. Update the entry below
 * 4. Commit to GitHub — page updates instantly
 *
 * CATEGORIES: smart-home | electronics | audio | ereader
 *
 * SVG ICONS: echo-dot | fire-stick | airpods | kindle |
 *            ring-doorbell | roomba | echo-show | echo-max | fire-tablet |
 *            echo-studio | headphones | laptop | camera | speaker
 *
 * Last updated: March 29, 2026
 */

const DEALS = [
  {
    asin:     "B09B8V1LZ3",
    title:    "Echo Dot (5th Gen, 2022) Smart Speaker with Alexa",
    price:    "$49.99",
    tag:      "🔥 Top Seller",
    tagClass: "tag-orange",
    category: "smart-home",
    icon:     "echo-dot"
  },
  {
    asin:     "B0F7Z4QZTT",
    title:    "Fire TV Stick 4K Plus (Newest Model) — Wi-Fi 6, Alexa+",
    price:    "$49.99",
    tag:      "⚡ Best Value",
    tagClass: "tag-blue",
    category: "electronics",
    icon:     "fire-stick"
  },
  {
    asin:     "B0CHWRXH8B",
    title:    "Apple AirPods Pro (2nd Gen) USB-C with MagSafe Case",
    price:    "$189.00",
    tag:      "🎧 Popular",
    tagClass: "tag-green",
    category: "audio",
    icon:     "airpods"
  },
  {
    asin:     "B0CFPJYX7P",
    title:    "Kindle Paperwhite (2024) 16GB — 7\" Glare-Free Display",
    price:    "$159.99",
    tag:      "📚 Editor's Pick",
    tagClass: "tag-blue",
    category: "ereader",
    icon:     "kindle"
  },
  {
    asin:     "B08CKHPP52",
    title:    "Ring Video Doorbell Wired — 1080p HD, Real-Time Alerts",
    price:    "$59.99",
    tag:      "🏠 Smart Home",
    tagClass: "tag-orange",
    category: "smart-home",
    icon:     "ring-doorbell"
  },
  {
    asin:     "B0DX6KZR9T",
    title:    "iRobot Roomba 105 Vac Robot Vacuum — LiDAR Navigation",
    price:    "$199.99",
    tag:      "🤖 New Model",
    tagClass: "tag-green",
    category: "electronics",
    icon:     "roomba"
  },
  {
    asin:     "B09B2SBHQK",
    title:    "Echo Show 5 (3rd Gen, 2023) Smart Display with Alexa",
    price:    "$89.99",
    tag:      "📺 Smart Display",
    tagClass: "tag-orange",
    category: "smart-home",
    icon:     "echo-show"
  },
  {
    asin:     "B0D6SX8VLQ",
    title:    "Echo Dot Max (2025) — Built for Alexa+, 3x Bass, Graphite",
    price:    "$99.99",
    tag:      "🆕 Newest Model",
    tagClass: "tag-blue",
    category: "audio",
    icon:     "echo-max"
  },
  {
    asin:     "B0BL5XPDR6",
    title:    "Fire HD 10 (2023) 10.1\" Full HD Tablet — 32 GB, Ocean",
    price:    "$139.99",
    tag:      "💻 Best Tablet Deal",
    tagClass: "tag-green",
    category: "electronics",
    icon:     "fire-tablet"
  }
];

const AFFILIATE_TAG = "clouddeals20-20";
const LAST_UPDATED  = "March 29, 2026";
