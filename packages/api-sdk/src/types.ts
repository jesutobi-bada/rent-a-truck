import type { JobStatus, UserRole, VehicleType } from '@rent-a-truck/utils';

// ── User & Auth ──────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  phone: string;
  fullName: string;
  roles: UserRole[];
  avatarUrl?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

// ── Vehicle ──────────────────────────────────────────────

export interface Vehicle {
  id: string;
  ownerId: string;
  licensePlate: string;
  type: VehicleType;
  make: string;
  model: string;
  year: number;
  tonnage: number;
  insuranceExpiry: string;
  isOnline: boolean;
  assignedDriverId?: string;
  createdAt: string;
  updatedAt: string;
}

// ── Job / Booking ────────────────────────────────────────

export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface Job {
  id: string;
  renterId: string;
  driverId?: string;
  vehicleId?: string;
  pickup: Location;
  destination: Location;
  status: JobStatus;
  vehicleType: VehicleType;
  estimatedDistance: number;
  estimatedPrice: number;
  finalPrice?: number;
  loadDescription?: string;
  createdAt: string;
  updatedAt: string;
}

// ── Payment ──────────────────────────────────────────────

export interface Payment {
  id: string;
  jobId: string;
  amount: number;
  commission: number;
  transporterPayout: number;
  status: 'pending' | 'authorized' | 'released' | 'refunded';
  paystackReference: string;
  createdAt: string;
}

// ── Fleet Owner ──────────────────────────────────────────

export interface FleetOwner {
  id: string;
  userId: string;
  businessName: string;
  vehicles: string[];
  drivers: string[];
  bankAccountNumber?: string;
  bankCode?: string;
  isKycVerified: boolean;
}
