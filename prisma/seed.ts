import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("Seeding database...")

  // Clean existing data
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()
  await prisma.service.deleteMany()

  // 1. Seed Categories
  const categoriesData = [
    { name: "Televisions", icon: "Tv", order: 1 },
    { name: "Audio Systems", icon: "Speaker", order: 2 },
    { name: "Mobile Accessories", icon: "Smartphone", order: 3 },
    { name: "CCTV & Security", icon: "Shield", order: 4 },
    { name: "Networking", icon: "Wifi", order: 5 },
    { name: "Headphones", icon: "Headphones", order: 6 }
  ]

  const createdCategories = await Promise.all(
    categoriesData.map(cat => prisma.category.create({ data: cat }))
  )
  console.log(`Created ${createdCategories.length} categories`)

  // 2. Seed Products
  const tvCategory = createdCategories.find(c => c.name === "Televisions")!
  const audioCategory = createdCategories.find(c => c.name === "Audio Systems")!
  const mobileCategory = createdCategories.find(c => c.name === "Mobile Accessories")!
  const cctvCategory = createdCategories.find(c => c.name === "CCTV & Security")!
  const netCategory = createdCategories.find(c => c.name === "Networking")!
  const hpCategory = createdCategories.find(c => c.name === "Headphones")!

  const productsData = [
    { 
      name: 'Samsung 43" 4K Smart TV', 
      description: "Crystal clear 4K UHD display with Smart Hub.",
      badge: "In Stock", badgeColor: "bg-sasi-red", icon: "Tv", categoryId: tvCategory.id,
      availableKalawana: true, availableRatnapura: true
    },
    { 
      name: "Sony HT-S40R Soundbar", 
      description: "5.1ch real surround sound system with wireless rear.",
      badge: "Fast Service", badgeColor: "bg-green-600", icon: "Speaker", categoryId: audioCategory.id,
      availableKalawana: true, availableRatnapura: true
    },
    { 
      name: "JBL Flip 6 Bluetooth Speaker", 
      description: "Portable waterproof speaker with punchy bass.",
      badge: "In Stock", badgeColor: "bg-sasi-red", icon: "Speaker", categoryId: audioCategory.id,
      availableKalawana: true, availableRatnapura: true
    },
    { 
      name: "Hikvision 4-Camera CCTV Kit", 
      description: "Full HD outdoor surveillance system.",
      badge: "In Stock", badgeColor: "bg-sasi-red", icon: "Shield", categoryId: cctvCategory.id,
      availableKalawana: true, availableRatnapura: true
    },
    { 
      name: "TP-Link AC1200 WiFi Router", 
      description: "Dual-band gigabit router for fast, reliable home internet.",
      badge: "In Stock", badgeColor: "bg-sasi-red", icon: "Wifi", categoryId: netCategory.id,
      availableKalawana: true, availableRatnapura: true
    },
    { 
      name: "Sony WH-1000XM5 Headphones", 
      description: "Industry-leading noise cancellation with 30-hour battery.",
      badge: "Trusted Service", badgeColor: "bg-[#F59E0B]", icon: "Headphones", categoryId: hpCategory.id,
      availableKalawana: true, availableRatnapura: true
    },
    { 
      name: 'LG 55" OLED Smart TV', 
      description: "Perfect blacks and vivid colors with self-lit OLED.",
      badge: "Available at Kalawana", badgeColor: "bg-purple-600", icon: "Tv", categoryId: tvCategory.id,
      availableKalawana: true, availableRatnapura: false
    },
    { 
      name: "Samsung Galaxy Buds2 Pro", 
      description: "True wireless earbuds with ANC and Hi-Fi sound.",
      badge: "In Stock", badgeColor: "bg-sasi-red", icon: "Smartphone", categoryId: mobileCategory.id,
      availableKalawana: true, availableRatnapura: true
    }
  ]

  const createdProducts = await Promise.all(
    productsData.map(prod => prisma.product.create({ data: prod }))
  )
  console.log(`Created ${createdProducts.length} products`)

  // 3. Seed Services
  const servicesData = [
    { 
      name: "Mobile Phone Repair", 
      badge: "Fast Service", badgeColor: "bg-[#2563EB]", icon: "Smartphone",
      description: "Screen replacement, battery swap, charging port repair, software issues — all models.",
      turnaround: "Same day - Both branches"
    },
    { 
      name: "Speaker & Audio Repair", 
      badge: "Trusted Service", badgeColor: "bg-[#F59E0B]", icon: "Speaker",
      description: "Woofer refoaming, amplifier board repair, bluetooth module replacement, cabinet refurbishment.",
      turnaround: "1-3 days - Kalawana only"
    },
    { 
      name: "TV Display Replacement", 
      badge: "Trusted Service", badgeColor: "bg-[#F59E0B]", icon: "Monitor",
      description: "LED backlight repair, panel replacement, power board fixing.",
      turnaround: "2-5 days - Both branches"
    },
    { 
      name: "CCTV Installation", 
      badge: "Fast Service", badgeColor: "bg-[#2563EB]", icon: "Shield",
      description: "Professional installation of security cameras, DVR setup, remote viewing configuration.",
      turnaround: "Same day - Both branches"
    }
  ]

  const createdServices = await Promise.all(
    servicesData.map(svc => prisma.service.create({ data: svc }))
  )
  console.log(`Created ${createdServices.length} services`)

  console.log("Seeding complete!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
