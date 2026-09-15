export type Product = {
  id: number; slug: string; name: string; sku: string; category: string; subcategory: string;
  price: number; compareAt?: number; material: string; plating: string; color: string; occasion: string;
  badge: string; rating: number; reviews: number; stock: number; description: string; crop: string; image: string;
};

const base = [
  ["gulnaar-zircon-jhumkas","Gulnaar Zircon Jhumkas","SYS-EJ-1042","Earrings","Jhumkas",2490,2990,"Zircon & faux pearls","18K gold-plated","Champagne","Wedding","New",4.9,128,14,"A light-catching jhumka framed with petal-cut zircon and a soft pearl fringe.","18% 64%"],
  ["meher-emerald-ring","Meher Emerald Ring","SYS-RG-1078","Rings","Adjustable Rings",1850,2150,"Emerald-tone zircon","Gold-plated brass","Emerald","Party","Trending",4.8,94,8,"An adjustable cocktail ring with a vivid emerald centre and fine zircon halo.","52% 17%"],
  ["ayla-pearl-drops","Ayla Pearl Drops","SYS-ER-1031","Earrings","Drop Earrings",1390,undefined,"Faux pearl & zircon","Gold-plated alloy","Pearl","Everyday","Bestseller",4.9,216,22,"Graceful pearl drops with marquise zircon leaves for day-to-evening polish.","83% 45%"],
  ["noor-tennis-bracelet","Noor Tennis Bracelet","SYS-BR-1110","Bracelets","Tennis Bracelets",2990,3450,"Cubic zirconia","Silver-plated alloy","Silver","Party","Limited",4.7,73,6,"A slim, fluid line of cubic zirconia finished with a secure box clasp.","30% 82%"],
  ["sahar-pendant","Sahar Emerald Pendant","SYS-NK-1141","Necklaces","Pendant Necklaces",2190,2590,"Emerald-tone zircon","18K gold-plated","Emerald","Office","New",4.8,61,18,"A sculptural teardrop pendant on a fine adjustable chain.","80% 82%"],
  ["chandni-studs","Chandni Halo Studs","SYS-ER-1008","Earrings","Studs",1190,1490,"Cubic zirconia","Rhodium-plated","Clear","Everyday","Sale",4.6,142,31,"Crisp halo studs designed for an effortless, polished sparkle.","21% 29%"],
  ["mahnoor-chandbalis","Mahnoor Pearl Chandbalis","SYS-ER-1188","Earrings","Chandbalis",3290,3790,"Zircon & faux pearl","Gold-plated brass","Champagne","Festive","Bestseller",4.9,184,9,"Classic crescent chandbalis reworked with airy proportions and pearl drops.","19% 60%"],
  ["zarmin-choker","Zarmin Kundan Choker","SYS-NK-1204","Necklaces","Chokers",4990,5990,"Kundan-style glass & pearls","Gold-plated alloy","Ruby","Wedding","Limited",4.8,86,4,"A regal yet wearable choker with ruby accents and adjustable dori fastening.","52% 50%"],
  ["ria-minimal-ring","Ria Minimal Band","SYS-RG-1090","Rings","Minimal Rings",990,undefined,"Stainless steel","18K gold-plated","Gold","Everyday","New",4.7,52,44,"A slender everyday band with a tiny bezel-set zircon detail.","53% 17%"],
  ["zoya-hoops","Zoya Textured Hoops","SYS-ER-1154","Earrings","Hoops",1490,1790,"Textured alloy","Gold-plated","Gold","Office","Trending",4.6,77,16,"Sculptural mid-size hoops with a softly hammered, fashion-forward finish.","42% 45%"],
  ["aabroo-necklace-set","Aabroo Necklace Set","SYS-NS-1220","Necklaces","Necklace Sets",4290,4990,"Zircon & faux pearls","Gold-plated","Pearl","Festive","Bestseller",4.9,103,11,"A coordinated necklace and earring set balanced for festive dressing.","70% 58%"],
  ["kaif-layered-necklace","Kaif Layered Necklace","SYS-NK-1176","Necklaces","Layered Necklaces",1990,2390,"Stainless steel","Gold-plated","Gold","Everyday","Sale",4.5,41,20,"Three delicate chains in one easy clasp, finished with tiny zircon accents.","80% 81%"],
  ["resham-bangle-set","Resham Bangle Set","SYS-BG-1244","Bangles","Bangle Sets",2790,3290,"Enamel & zircon","Gold-plated brass","Rose","Festive","New",4.8,68,15,"A six-piece bangle stack with muted rose enamel and fine zircon lines.","31% 80%"],
  ["sunehri-kangan","Sunehri Kangan Pair","SYS-BG-1230","Bangles","Kangan",3490,3990,"Textured brass","Gold-plated","Gold","Wedding","Limited",4.7,56,5,"A statement kangan pair with carved floral texture and secure side clasps.","31% 82%"],
  ["sitara-anklet","Sitara Payal","SYS-AN-1161","Anklets & Payal","Payal",1590,1890,"Cubic zirconia","Silver-plated","Silver","Festive","Trending",4.7,88,12,"A delicate silver-tone payal with tiny star-cut zircon charms.","28% 81%"],
  ["mehrunisa-bridal-set","Mehrunisa Bridal Set","SYS-BD-1301","Bridal Jewelry","Bridal Sets",12990,14990,"Kundan-style glass, zircon & faux pearl","Gold-plated alloy","Ruby","Bridal","Limited",4.9,37,3,"A complete artificial bridal set created for Barat grandeur without excessive weight.","55% 52%"],
  ["roshan-matha-patti","Roshan Matha Patti","SYS-BD-1284","Bridal Jewelry","Matha Patti",3990,4590,"Zircon & faux pearl","Gold-plated","Champagne","Bridal","New",4.8,45,7,"A balanced matha patti with pearl edging and adjustable chain links.","75% 80%"],
  ["naz-maang-tikka","Naz Maang Tikka","SYS-BD-1266","Bridal Jewelry","Maang Tikka",1890,2290,"Kundan-style glass","Gold-plated","Ruby","Mehndi","Bestseller",4.7,81,13,"A single statement tikka with ruby-tone drops and a comfortable hook.","77% 79%"],
  ["heera-jhoomar","Heera Jhoomar","SYS-BD-1272","Bridal Jewelry","Jhoomar",2890,3390,"Cubic zirconia & pearls","Silver-plated","Silver","Walima","Limited",4.8,49,4,"An elegant side jhoomar with cascading faux pearls for Walima styling.","16% 45%"],
  ["laleh-hand-jewelry","Laleh Hand Harness","SYS-BD-1295","Bridal Jewelry","Hand Jewelry",2490,2890,"Zircon & chain","Gold-plated","Gold","Mehndi","New",4.6,32,9,"A flexible hand harness linking a floral ring to a fine bracelet.","53% 18%"],
  ["sanam-cuff","Sanam Sculpted Cuff","SYS-BR-1126","Bracelets","Cuffs",2290,undefined,"Stainless steel","Gold-plated","Gold","Party","Trending",4.7,59,17,"A clean architectural cuff with rounded edges and an adjustable opening.","31% 82%"],
  ["pari-charm-bracelet","Pari Charm Bracelet","SYS-BR-1137","Bracelets","Charm Bracelets",1690,1990,"Stainless steel & zircon","Gold-plated","Champagne","Gifting","Bestseller",4.8,117,19,"Meaningful moon, star and floral charms on an adjustable link bracelet.","29% 82%"],
  ["haya-nose-ring","Haya Bridal Nath","SYS-BD-1312","Bridal Jewelry","Nose Rings",1790,2090,"Faux pearl & zircon","Gold-plated","Pearl","Bridal","Low Stock",4.6,28,2,"A lightweight clip-on bridal nath with a detachable pearl chain.","84% 45%"],
  ["rooh-couple-rings","Rooh Couple Rings","SYS-RG-1109","Rings","Couple Rings",2890,3290,"Stainless steel & zircon","Silver-plated","Silver","Gifting","New",4.8,64,10,"A coordinated pair of adjustable bands with subtle zircon accents.","54% 17%"]
] as const;

export const products: Product[] = base.map((p,i)=>({id:i+1,slug:p[0],name:p[1],sku:p[2],category:p[3],subcategory:p[4],price:p[5],compareAt:p[6],material:p[7],plating:p[8],color:p[9],occasion:p[10],badge:p[11],rating:p[12],reviews:p[13],stock:p[14],description:p[15],crop:p[16],image: i>=15?"/assets/shopsystore-bridal.png":"/assets/shopsystore-edit.png"}));

export const categories = ["Earrings","Necklaces","Rings","Bracelets","Bangles","Anklets & Payal","Bridal Jewelry","Traditional Jewelry","Western & Minimal","Pearl Jewelry","Zircon Jewelry","Gold-Plated","Silver-Plated","Gift Sets","Under PKR 1,500","Under PKR 3,000"];
export const collections = ["Wedding Edit","Eid Collection","Festive Collection","Everyday Essentials","Office Elegance","Party Glam","Gifts for Her","Trending Now","New Arrivals","Best Sellers","Limited Editions"];

export const articles = [
  {slug:"style-artificial-jewelry-pakistani-wedding",title:"How to Style Artificial Jewelry for a Pakistani Wedding",category:"Styling",author:"Areeba Khan",date:"12 September 2026",time:"7 min read",excerpt:"A practical guide to balancing color, neckline and occasion across Mehndi, Barat and Walima looks."},
  {slug:"care-gold-plated-jewelry",title:"A Complete Guide to Caring for Gold-Plated Jewelry",category:"Care",author:"Maha Saleem",date:"5 September 2026",time:"6 min read",excerpt:"Simple habits that help your favorite plated pieces retain their finish for longer."},
  {slug:"earrings-for-face-shape",title:"Choosing Earrings for Your Face Shape",category:"Styling",author:"Areeba Khan",date:"28 August 2026",time:"5 min read",excerpt:"From chandbalis to drops, find proportions that frame your features beautifully."},
  {slug:"eid-jewelry-trends",title:"Jewelry Trends to Wear This Eid",category:"Trends",author:"Sana Mir",date:"18 August 2026",time:"4 min read",excerpt:"Fresh pearls, sculptural gold tones and the new festive minimalism."},
  {slug:"everyday-jewelry-collection",title:"How to Build an Everyday Jewelry Collection",category:"Guides",author:"Maha Saleem",date:"10 August 2026",time:"6 min read",excerpt:"Five versatile pieces that make getting dressed feel effortless."},
  {slug:"bridal-jewelry-mehndi-barat-walima",title:"Bridal Jewelry for Mehndi, Barat, and Walima",category:"Bridal",author:"Sana Mir",date:"1 August 2026",time:"8 min read",excerpt:"A considered approach to creating three distinct bridal moods."},
  {slug:"best-jewelry-gifts-for-her",title:"The Best Jewelry Gifts for Her",category:"Gifting",author:"Areeba Khan",date:"24 July 2026",time:"5 min read",excerpt:"Thoughtful jewelry ideas for birthdays, bridesmaids and just-because moments."},
  {slug:"traditional-vs-contemporary",title:"Traditional vs. Contemporary Jewelry: Finding Your Style",category:"Styling",author:"Maha Saleem",date:"16 July 2026",time:"5 min read",excerpt:"How to mix heirloom-inspired forms with clean modern pieces."},
  {slug:"prevent-artificial-jewelry-tarnish",title:"How to Prevent Artificial Jewelry from Tarnishing",category:"Care",author:"Sana Mir",date:"8 July 2026",time:"6 min read",excerpt:"Storage, moisture and wear tips explained without the myths."},
  {slug:"style-statement-necklace",title:"Five Ways to Style a Statement Necklace",category:"Styling",author:"Areeba Khan",date:"29 June 2026",time:"4 min read",excerpt:"Five polished pairings, from a crisp kurta to an evening sari."}
];
