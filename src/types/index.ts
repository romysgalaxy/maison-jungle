// Plant
export type Plant = {
  id: string;
  name: string;
  category: string;
  light: number;
  water: number;
  cover: string;
  price: number;
  description: string;
};

export type CartItem = Plant & {
  amount: number;
};

// Payment
export type PaymentData = {
  amount: number;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
};

export type PaymentResult = {
  success: boolean;
  transactionId: string;
  amount: number;
  currency: string;
  status: string;
  timestamp: string;
};

export type PaymentMethod = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

export type PaymentFormData = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
};

export type FormErrors = Record<string, string | null>;

// Component Props
export type PlantItemProps = {
  id: string;
  cover: string;
  name: string;
  water: number;
  light: number;
  price: number;
  onAddToCart: () => void;
};

export type CategoriesProps = {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export type PaymentFormProps = {
  amount: number;
  onSuccess: (result: PaymentResult) => void;
  onCancel: () => void;
};

export type HomePageProps = {
  addToCart: (plant: Plant) => void;
};

export type CartPageProps = {
  cart: CartItem[];
  clearCart: () => void;
  updateQuantity: (plantName: string, newAmount: number) => void;
};

export type PlantDetailPageProps = {
  addToCart: (plant: Plant) => void;
};
