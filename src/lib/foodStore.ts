export type FoodCategory =
  | 'Cooked Meals'
  | 'Bakery & Bread'
  | 'Fresh Produce'
  | 'Packaged Goods'
  | 'Dairy & Beverages';

export type DonorType =
  | 'Restaurant'
  | 'Catering Service'
  | 'Community Kitchen'
  | 'Bakery'
  | 'Individual Household'
  | 'Grocery & Supermarket';

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
    id: "sample-food-1",
    foodName: "Freshly Prepared Vegetable Pulao",
    category: "Cooked Meals",
    quantity: "35 Packed Containers",
    donorName: "Sunrise Community Kitchen",
    donorType: "Community Kitchen",
    location: "Community Center Hall, West Avenue",
    city: "Metro Region",
    pickupDeadline: "Today by 8:00 PM",
    cookedOrPreparedTime: "Prepared at 1:00 PM today",
    dietaryType: "Vegetarian",
    contactPhone: "+91 98201 11223",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
    description: "Wholesome vegetable pulao with carrots, peas, and mild spices. Packed in food-grade thermal containers right after preparation.",
    status: "Available",
    createdAt: new Date().toISOString(),
  },
  {
    id: "sample-food-2",
    foodName: "Packed Vegetable Biryani with Raita",
    category: "Cooked Meals",
    quantity: "40 Portions",
    donorName: "Grand Heritage Catering",
    donorType: "Catering Service",
    location: "Banquet Dispatch Bay 2, Park Road",
    city: "Metro Region",
    pickupDeadline: "Today by 8:30 PM",
    cookedOrPreparedTime: "Prepared at 1:30 PM today",
    dietaryType: "Vegetarian",
    contactPhone: "+91 98202 33445",
    imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
    description: "Surplus untouched lunch service boxes. Kept warm under insulated covers; suitable for evening distribution.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "sample-food-3",
    foodName: "Fresh Chapati and Roti Packs",
    category: "Cooked Meals",
    quantity: "120 Pieces (Packs of 10)",
    donorName: "Annapurna Bhojanalaya",
    donorType: "Restaurant",
    location: "Station Road Market, Shop 8",
    city: "Metro Region",
    pickupDeadline: "Today by 9:00 PM",
    cookedOrPreparedTime: "Made fresh at 2:00 PM today",
    dietaryType: "Vegetarian",
    contactPhone: "+91 98203 44556",
    imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80",
    description: "Soft whole wheat tawa chapatis wrapped in foil packs of 10. Hygienically prepared and ready for pickup.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
  },
  {
    id: "sample-food-4",
    foodName: "Unused Bread Loaves and Bakery Rolls",
    category: "Bakery & Bread",
    quantity: "25 Loaves & 50 Dinner Rolls",
    donorName: "Daily Crust Artisan Bakery",
    donorType: "Bakery",
    location: "Bakery Storefront, 14 Market Street",
    city: "Metro Region",
    pickupDeadline: "Today by 9:30 PM",
    cookedOrPreparedTime: "Baked this morning at 6:30 AM",
    dietaryType: "Vegetarian",
    contactPhone: "+91 98204 55667",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
    description: "Freshly baked whole wheat loaves, baguettes, and dinner rolls unsold at close of afternoon retail hours.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "sample-food-5",
    foodName: "Fresh Bananas and Seasonal Fruit",
    category: "Fresh Produce",
    quantity: "4 Crates (~30 kg total)",
    donorName: "Valley Green Produce Market",
    donorType: "Grocery & Supermarket",
    location: "Fruit Section Gate 1, Central Wholesale Yard",
    city: "Metro Region",
    pickupDeadline: "Tomorrow by 11:00 AM",
    cookedOrPreparedTime: "Inspected and sorted this morning",
    dietaryType: "Vegan",
    contactPhone: "+91 98205 66778",
    imageUrl: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=700&q=80",
    description: "Ripe bananas, apples, and seasonal oranges in sound condition. Ideal for shelter breakfast or community distribution.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: "sample-food-6",
    foodName: "Fresh Seasonal Vegetables (Carrots, Potatoes, Greens)",
    category: "Fresh Produce",
    quantity: "35 kg Assorted Crates",
    donorName: "Kisan Direct Farm Outlet",
    donorType: "Grocery & Supermarket",
    location: "Warehouse Bay 4, Agro Complex",
    city: "Metro Region",
    pickupDeadline: "Tomorrow by 1:00 PM",
    cookedOrPreparedTime: "Harvested yesterday, stored dry",
    dietaryType: "Vegan",
    contactPhone: "+91 98206 77889",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
    description: "Firm, clean farm-fresh vegetables sorted into crates. Suitable for community kitchens preparing large batch meals.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
  },
  {
    id: "sample-food-7",
    foodName: "Unopened Packaged Food Within Date (Rice & Lentils)",
    category: "Packaged Goods",
    quantity: "18 Sealed Bags (1 kg and 2 kg)",
    donorName: "Neighborhood Food Relief Group",
    donorType: "Individual Household",
    location: "Community Storage Locker, civic building",
    city: "Metro Region",
    pickupDeadline: "This Friday by 6:00 PM",
    cookedOrPreparedTime: "Factory sealed; expiry 8+ months out",
    dietaryType: "Vegan",
    contactPhone: "+91 98207 88990",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
    description: "Factory-sealed dry ration bags of basmati rice, toor dal, and rolled oats. Stored in a dry, cool pantry.",
    status: "Reserved",
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: "sample-food-8",
    foodName: "Sealed, Properly Refrigerated Milk & Plain Yogurt",
    category: "Dairy & Beverages",
    quantity: "45 Sealed Cartons (500ml) & 30 Yogurt Cups",
    donorName: "City Cooperative Dairy Depot",
    donorType: "Grocery & Supermarket",
    location: "Cold Room 2, Dairy Distribution Depot",
    city: "Metro Region",
    pickupDeadline: "Tomorrow by 12:00 PM",
    cookedOrPreparedTime: "Maintained at 3°C; Best before 3 days",
    dietaryType: "Vegetarian",
    contactPhone: "+91 98208 99001",
    imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80",
    description: "Pasteurized milk cartons and fresh curd cups kept continuously under refrigeration. Clean, sealed original packaging.",
    status: "Available",
    createdAt: new Date(Date.now() - 3600000 * 7).toISOString(),
  },
];

export const INITIAL_SAMPLE_REQUESTS: FoodRequest[] = [
  {
    id: "sample-req-1",
    requesterName: "Community Meals Coordinator",
    organization: "St. Jude Shelter for Families",
    requesterType: "Community Shelter",
    foodRequirement: "Evening cooked meals or fresh bread for 35 residents",
    quantityNeeded: "35-40 Portions",
    location: "Old Town Shelter Center, 4th Cross Road",
    urgency: "Today",
    contactPhone: "+91 98111 22334",
    contactEmail: "contact@stjudeshelter.org",
    additionalNotes: "Preference for mild vegetarian meals. Pickup transport available upon notice.",
    status: "Approved",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "sample-req-2",
    requesterName: "Volunteer Dispatch Team",
    organization: "Helping Hands Community Kitchen",
    requesterType: "Community Kitchen",
    foodRequirement: "Surplus fresh vegetables or dry pulses for daily free lunch service",
    quantityNeeded: "20-30 kg produce or grains",
    location: "Transit Camp Distribution Center, Sector 8",
    urgency: "Tomorrow",
    contactPhone: "+91 98222 33445",
    contactEmail: "dispatch@helpinghandskitchen.org",
    additionalNotes: "We have insulated crates and clean distribution transport ready.",
    status: "Pending",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
];

const STORAGE_KEY_DONATIONS = "smart_food_donations_demo_v2";
const STORAGE_KEY_REQUESTS = "smart_food_requests_demo_v2";

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
