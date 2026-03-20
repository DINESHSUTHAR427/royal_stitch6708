import { prisma } from '@/lib/prisma';

async function main() {
  await prisma.product.deleteMany({});
  
  const products = await prisma.product.createMany({
    data: [
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773988030/Turning_fabric_into_art_one_stitch_at_a_time_DM_TO_ORDER_%EF%B8%8F_NOW_urs....._Handmade_by_r_tgsafs.webp",
        isFeatured: true,
        isTrending: true,
      },
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773987876/Threads_of_Love_DM_to_order_now_urs._Another_level_of_happiness_while_we_see_our_love_in_iqsle5.webp",
        isFeatured: true,
        isTrending: true,
      },
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773993705/DM_to_order_%EF%B8%8F_fexlaq.webp",
        isFeatured: true,
        isTrending: true,
      },
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773993705/%EF%B8%8F_%EF%B8%8FDM_TO_ORDER_%EF%B8%8F_%EF%B8%8F_uobcie.webp",
        isFeatured: true,
        isTrending: true,
      },
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773993706/Check_out_these_beautiful_customized_hair_clips_%EF%B8%8FDM_TO_ORDER_......_gift_hub_......_Gift_fo_kcs1m2.webp",
        isFeatured: true,
        isTrending: true,
      },
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773993706/DM_TO_ORDER_for_ur_loved_ones....._%EF%B8%8F_Plan_ur_gift_more_beautiful_then_before_%EF%B8%8F_weuszp.webp",
        isFeatured: true,
        isTrending: true,
      },
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773993706/%EF%B8%8F_%EF%B8%8F_%EF%B8%8F_%EF%B8%8FDM_%EF%B8%8F_cyciv8.webp",
        isFeatured: true,
        isTrending: true,
      },
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773993706/DM_TO_ORDER_%EF%B8%8F_%EF%B8%8FFind_ur_perfect_gift_for_ur_loved_ones_._handmade_....by_Royal_stitch....._qurnrk.webp",
        isFeatured: true,
        isTrending: true,
      },
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773993708/get_acckcv.webp",
        isFeatured: true,
        isTrending: true,
      },
      {
        title: "Elegant Royal Stitch Design",
        description: "A beautifully crafted embroidery piece that captures love and happiness in every stitch—perfect for adding a personal, heartfelt touch to your style.",
        category: "WEDDING",
        price: 15000,
        image: "https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773993709/DM_TO_ORDER_%EF%B8%8F_my_hands_my_art_%EF%B8%8Fstitch_with_love._tmwa10.webp",
        isFeatured: true,
        isTrending: true,
      },
      
    ]
  });
  console.log("Products added count:", products.count);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
