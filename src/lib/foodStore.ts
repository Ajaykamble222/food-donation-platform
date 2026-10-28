export type FoodCategory =
  | 'Cooked Meals'
  | 'Bakery & Bread'
  | 'Fresh Produce'
  | 'Packaged Goods'
  | 'Dairy & Beverages';

export type DonorType =
  | 'Restaurant'
  | 'Catering & Events'
  | 'College Canteen'
  | 'Bakery'
  | 'Individual Donor'
  | 'Supermarket';

export type DietaryType = 'Vegetarian' | 'Non-Vegetarian' | 'Vegan' | 'Jain Friendly';

export interface FoodDonation {
  id: string;
  foodName: string;
  category: FoodCategory;
  quantity: string;
  donorName: string;
  donorType: DonorType;
  location: string;
  city: string;
  pickupDeadline: string;
  cookedOrPreparedTime: string;
  dietaryType: DietaryType;
  contactPhone: string;
  imageUrl: string;
  description: string;
  status: 'Available' | 'Reserved' | 'Completed';
  createdAt: string;
}

export interface FoodRequest {
  id: string;
  requesterName: string;
  organization: string;
  requesterType: string;
  foodRequirement: string;
  quantityNeeded: string;
  location: string;
  urgency: string;
  contactPhone: string;
  contactEmail: string;
  additionalNotes?: string;
  status: 'Pending' | 'Approved' | 'Fulfilled';
  createdAt: string;
}

export const INITIAL_SAMPLE_DONATIONS: FoodDonation[] = [
  {
    id: "demo-food-1",
    foodName: "Vegetable Biryani & Mirchi Raita Boxes",
    category: "Cooked Meals",
    quantity: "45 Meal Boxes",
    donorName: "Campus Central Canteen",
    donorType: "College Canteen",
    location: "Engineering Block C, Ground Floor Dispatch",
    city: "Metro City",
    pickupDeadline: "Today by 7:30 PM",
    cookedOrPreparedTime: "Prepared at 1:30 PM today",
    dietaryType: "Vegetarian",
    contactPhone: "+91 98450 12345",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
    description: "Surplus hygienic packed meals from afternoon college seminar. Kept warm in food-grade thermal containers.",
    status: "Available",
    createdAt: new Date().toISOString(),
  },
  {
    id: "demo-food-2",
    foodName: "Artisan Whole Wheat Bread & Baguettes",
    category: "Bakery & Bread",
    quantity: "28 Loaves & 40 Rolls",
    donorName: "Daily Crust Bakery",
    donorType: "Bakery",
    location: "Shop #14, University Avenue Commercial Hub",
    city: "Metro City",
    pickupDeadline: "Today by 9:00 PM",
    cookedOrPreparedTime: "Baked fresh this morning (7:00 AM)",
    dietaryType: "Vegetarian",
    contactPhone: "+91 98450 67890",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
    description: "Wholesome sourdough and artisan baguettes baked fresh today. Ideal for shelter homes or community breakfast centers.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "demo-food-3",
    foodName: "Farm Fresh Apples & Bananas Crates",
    category: "Fresh Produce",
    quantity: "6 Crates (~35 kg)",
    donorName: "Green Valley Agro Mandi",
    donorType: "Supermarket",
    location: "Wholesale Market Gate #3, Sector 8",
    city: "Metro City",
    pickupDeadline: "Tomorrow by 11:00 AM",
    cookedOrPreparedTime: "Harvested yesterday",
    dietaryType: "Vegan",
    contactPhone: "+91 98450 24680",
    imageUrl: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=700&q=80",
    description: "Unsold ripe fruit inventory in excellent condition. Perfect for orphanages or nutrition supplement distribution.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "demo-food-4",
    foodName: "Paneer Butter Masala with Tawa Rotis",
    category: "Cooked Meals",
    quantity: "30 Servings",
    donorName: "Royal Spice Banquet Hall",
    donorType: "Catering & Events",
    location: "Grand Heritage Hall, Near Ring Road Flyover",
    city: "Metro City",
    pickupDeadline: "Today by 8:45 PM",
    cookedOrPreparedTime: "Cooked at 2:00 PM today",
    dietaryType: "Vegetarian",
    contactPhone: "+91 98450 13579",
    imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
    description: "Leftover untouched banquet dishes packed in sterile stainless containers. High nutritional value, kept refrigerated.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
  },
  {
    id: "demo-food-5",
    foodName: "Assorted Dairy Milk & Plain Yogurt Cups",
    category: "Dairy & Beverages",
    quantity: "50 Sealed Cartons (500ml each)",
    donorName: "Metro Cooperative Dairy",
    donorType: "Supermarket",
    location: "Cold Storage Warehouse 2, Industrial Link Rd",
    city: "Metro City",
    pickupDeadline: "Tomorrow by 2:00 PM",
    cookedOrPreparedTime: "Processed yesterday, Best before 3 days",
    dietaryType: "Vegetarian",
    contactPhone: "+91 98450 97531",
    imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80",
    description: "Pasteurized wholesome cow milk cartons and yogurt tubs kept constantly chilled. Ready for immediate pickup.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: "demo-food-6",
    foodName: "Unopened Rolled Oats & Lentil Packets",
    category: "Packaged Goods",
    quantity: "20 Packets (1 kg each)",
    donorName: "Community Food Drive Club",
    donorType: "Individual Donor",
    location: "Student Activity Center, Room 102",
    city: "Metro City",
    pickupDeadline: "This Friday by 5:00 PM",
    cookedOrPreparedTime: "Packaged grocery items (MFG: this month)",
    dietaryType: "Vegan",
    contactPhone: "+91 98450 86420",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
    description: "Factory sealed dry rations collected during college NSS social awareness camp. Long shelf life.",
    status: "Reserved",
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
];

export const INITIAL_SAMPLE_REQUESTS: FoodRequest[] = [
  {
    id: "req-1",
    requesterName: "Sister Mary",
    organization: "St. Jude Children Shelter Home",
    requesterType: "Shelter Home",
    foodRequirement: "Evening meals or bread for 35 children",
    quantityNeeded: "35-40 Servings",
    location: "Old Town, Near St. Jude Chapel",
    urgency: "Immediate (Within 4 hrs)",
    contactPhone: "+91 98111 22334",
    contactEmail: "stjude.shelter@example.org",
    additionalNotes: "Preference for mild vegetarian cooked meals or freshly baked goods.",
    status: "Approved",
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
  },
  {
    id: "req-2",
    requesterName: "Rajesh Kumar",
    organization: "Feeding Hope NGO Volunteer Group",
    requesterType: "NGO",
    foodRequirement: "Surplus cooked food or dry grains for migrant worker cluster",
    quantityNeeded: "50-60 Servings",
    location: "Transit Camp Colony, Sector 12",
    urgency: "Today",
    contactPhone: "+91 98222 33445",
    contactEmail: "rajesh.feedinghope@example.org",
    additionalNotes: "We have clean distribution transport ready for pickup at any time.",
    status: "Pending",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
];

const STORAGE_KEY_DONATIONS = "smart_food_donations_demo_v1";
const STORAGE_KEY_REQUESTS = "smart_food_requests_demo_v1";

export function getStoredDonations(): FoodDonation[] {
  if (typeof window === "undefined") {
    return INITIAL_SAMPLE_DONATIONS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DONATIONS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_DONATIONS, JSON.stringify(INITIAL_SAMPLE_DONATIONS));
      return INITIAL_SAMPLE_DONATIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_SAMPLE_DONATIONS;
  } catch (e) {
    console.error("Failed to parse donations from localStorage:", e);
    return INITIAL_SAMPLE_DONATIONS;
  }
}

export function saveDonation(newDonation: Omit<FoodDonation, "id" | "createdAt" | "status">): FoodDonation {
  const current = getStoredDonations();
  const donation: FoodDonation = {
    ...newDonation,
    id: `donation-${Date.now()}`,
    status: "Available",
    createdAt: new Date().toISOString(),
  };

  const updated = [donation, ...current];
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_DONATIONS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("food-donations-updated", { detail: updated }));
  }
  return donation;
}

export function updateDonationStatus(id: string, newStatus: FoodDonation["status"]): void {
  const current = getStoredDonations();
  const updated = current.map((item) => (item.id === id ? { ...item, status: newStatus } : item));
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_DONATIONS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("food-donations-updated", { detail: updated }));
  }
}

export function getStoredRequests(): FoodRequest[] {
  if (typeof window === "undefined") {
    return INITIAL_SAMPLE_REQUESTS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_REQUESTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_REQUESTS, JSON.stringify(INITIAL_SAMPLE_REQUESTS));
      return INITIAL_SAMPLE_REQUESTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_SAMPLE_REQUESTS;
  } catch (e) {
    console.error("Failed to parse requests from localStorage:", e);
    return INITIAL_SAMPLE_REQUESTS;
  }
}

export function saveRequest(newReq: Omit<FoodRequest, "id" | "createdAt" | "status">): FoodRequest {
  const current = getStoredRequests();
  const req: FoodRequest = {
    ...newReq,
    id: `req-${Date.now()}`,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  const updated = [req, ...current];
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_REQUESTS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("food-requests-updated", { detail: updated }));
  }
  return req;
}

export function resetDemoData(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_DONATIONS, JSON.stringify(INITIAL_SAMPLE_DONATIONS));
    localStorage.setItem(STORAGE_KEY_REQUESTS, JSON.stringify(INITIAL_SAMPLE_REQUESTS));
    window.dispatchEvent(new CustomEvent("food-donations-updated", { detail: INITIAL_SAMPLE_DONATIONS }));
    window.dispatchEvent(new CustomEvent("food-requests-updated", { detail: INITIAL_SAMPLE_REQUESTS }));
  }
}
