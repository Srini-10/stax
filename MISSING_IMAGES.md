# Missing Images - Manual Upload Guide

## Image Generation Quota Exhausted
Image generation quota has been exhausted and will reset in approximately 4.5 hours.

You can manually add the following 4 images:

---

## 1. Airlyte Fabric Technology Image

**File Location**: `/public/images/fabrics/airlyte.png` or `/public/images/fabrics/airlyte.jpg`

**Image Requirements**:
- Lightweight, breathable athletic fabric texture closeup
- Airlyte technology showcase
- Professional product photography style
- White or light background
- Size: 800x800px or similar square format

**After adding the image**, update the file that references it (check `promotions.js` or fabric data files).

---

## 2. ThermaFlex Fabric Technology Image

**File Location**: `/public/images/fabrics/thermaflex.png` or `/public/images/fabrics/thermaflex.jpg`

**Image Requirements**:
- Thermal insulated athletic fabric texture closeup
- ThermaFlex technology showcase
- Professional product photography style
- White or light background
- Size: 800x800px or similar square format

**After adding the image**, update the file that references it.

---

## 3. Jackets Category Image

**File Location**: `/public/images/categories/jackets.png` or `/public/images/categories/jackets.jpg`

**Image Requirements**:
- Lifestyle photo of woman in athletic jacket
- Outdoor/running environment
- Professional fitness photography
- Size: 600x600px

**After adding the image**, update `/src/data/promotions.js`:
```javascript
{
    id: 5,
    name: "Jackets",
    slug: "jackets",
    description: "Lightweight and insulated",
    image: "/images/categories/jackets.png",  // Update this line
    gender: "Women"
}
```

---

## 4. Accessories Category Image

**File Location**: `/public/images/categories/accessories.png` or `/public/images/categories/accessories.jpg`

**Image Requirements**:
- Gym accessories (bag, water bottle, resistance bands, etc.)
- Product photography on white background
- Size: 600x600px

**After adding the image**, update `/src/data/promotions.js`:
```javascript
{
    id: 6,
    name: "Accessories",
    slug: "accessories",
    description: "Bags, bottles, and more",
    image: "/images/categories/accessories.png",  // Update this line
    gender: "Unisex"
}
```

---

## Quick Steps

1. **Create directories** (if they don't exist):
   ```bash
   mkdir -p public/images/fabrics
   mkdir -p public/images/categories
   ```

2. **Add your images** to the appropriate folders

3. **Update data files** with the correct image paths

4. **Refresh browser** to see changes

---

## Current Status

✅ **Completed** (12 images generated):
- 7 product images (tights, sports bras, tops, shorts)
- 4 category images (tights, sports bras, tops, shorts)

❌ **Pending** (4 images):
- Airlyte fabric image
- ThermaFlex fabric image
- Jackets category image
- Accessories category image

---

## Alternative Option

You can also use placeholder images temporarily:
- Free stock photos from: unsplash.com, pexels.com
- AI image generators: midjourney.com, leonardo.ai
- Or wait ~4.5 hours for my image generation quota to reset
