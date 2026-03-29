/**
 * CloudDeals — Weekly Deals Data File
 * =====================================
 * Update this file every Monday to refresh the deals page.
 * Just change the ASIN, title, price, category, and image for each product.
 *
 * HOW TO UPDATE:
 * 1. Find a great deal on Amazon
 * 2. Copy the ASIN from the URL: amazon.com/dp/[ASIN]
 * 3. Save the product image to assets/images/ in your GitHub repo
 * 4. Update the entry below with the new filename
 * 5. Commit to GitHub — page updates instantly
 *
 * CATEGORIES: smart-home | electronics | audio | ereader
 *
 * IMAGE FILES: saved in assets/images/ folder in your GitHub repo
 *
 * Last updated: March 29, 2026
 */

const DEALS = [
  {
    asin:     "B09B8V1LZ3",
    title:    "Echo Dot (5th Gen) Smart Speaker with Alexa",
    price:    "$49.99",
    tag:      "🔥 Top Seller",
    tagClass: "tag-orange",
    category: "smart-home",
    image:    "../assets/images/echo-dot.jpg"
  },
  {
    asin:     "B0F7Z4QZTT",
    title:    "Fire TV Stick 4K Plus (Newest Model) — Wi-Fi 6, Alexa+",
    price:    "$49.99",
    tag:      "⚡ Best Value",
    tagClass: "tag-blue",
    category: "electronics",
    image:    "../assets/images/amazon_fire_tv_stick_4K.jpg"
  },
  {
    asin:     "B0CHWRXH8B",
    title:    "Apple AirPods Pro (2nd Gen) USB-C with MagSafe Case",
    price:    "$189.00",
    tag:      "🎧 Popular",
    tagClass: "tag-green",
    category: "audio",
    image:    "../assets/images/apple_airpods_pro.jpg"
  },
  {
    asin:     "B0CFPJYX7P",
    title:    "Kindle Paperwhite (2024) 16GB — 7\" Glare-Free Display",
    price:    "$159.99",
    tag:      "📚 Editor's Pick",
    tagClass: "tag-blue",
    category: "ereader",
    image:    "../assets/images/amazon_kindle_paperwhite.jpg"
  },
  {
    asin:     "B08CKHPP52",
    title:    "Ring Video Doorbell Wired — 1080p HD, Real-Time Alerts",
    price:    "$59.99",
    tag:      "🏠 Smart Home",
    tagClass: "tag-orange",
    category: "smart-home",
    image:    "../assets/images/ring_video_wired_doorbell.jpg"
  },
  {
    asin:     "B0DX6KZR9T",
    title:    "iRobot Roomba 105 Vac Robot Vacuum — LiDAR Navigation",
    price:    "$149.00",
    tag:      "🤖 50% Off",
    tagClass: "tag-green",
    category: "electronics",
    image:    "../assets/images/irobot_roomba_105_vac.jpg"
  },
  {
    asin:     "B09B2SBHQK",
    title:    "Echo Show 5 (3rd Gen, 2023) Smart Display with Alexa",
    price:    "$89.99",
    tag:      "📺 Smart Display",
    tagClass: "tag-orange",
    category: "smart-home",
    image:    "../assets/images/amazon_echo_show_5.jpg"
  },
  {
    asin:     "B0D6SX8VLQ",
    title:    "Echo Dot Max (2025) — Built for Alexa+, 3x Bass, Graphite",
    price:    "$99.99",
    tag:      "🆕 Newest Model",
    tagClass: "tag-blue",
    category: "audio",
    image:    "../assets/images/amazon_echo_dot_max.jpg"
  },
  {
    asin:     "B0BL5XPDR6",
    title:    "Fire HD 10 (2023) 10.1\" Full HD Tablet — 32 GB",
    price:    "$139.99",
    tag:      "💻 Best Tablet Deal",
    tagClass: "tag-green",
    category: "electronics",
    image:    "../assets/images/amazon_fire_hd.jpg"
  }
];

const AFFILIATE_TAG = "clouddeals20-20";
const LAST_UPDATED  = "March 29, 2026";
