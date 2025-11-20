// User-related types

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

export interface UserProfile extends User {
  address?: Address;
  phoneNumber?: string;
  dateOfBirth?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
