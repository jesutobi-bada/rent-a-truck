export const COMMISSION_RATE = 0.2; // 20% platform commission
export const TRANSPORTER_RATE = 0.8; // 80% to transporter

export const JOB_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  ARRIVED: 'arrived',
  LOADED: 'loaded',
  IN_TRANSIT: 'in_transit',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;

export type JobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];

export const USER_ROLES = {
  RENTER: 'renter',
  DRIVER: 'driver',
  FLEET_OWNER: 'fleet_owner',
  SUPER_ADMIN: 'super_admin',
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export const VEHICLE_TYPES = {
  PICKUP: 'pickup',
  VAN: 'van',
  FLATBED: 'flatbed',
  TANKER: 'tanker',
  TRAILER: 'trailer',
} as const;

export type VehicleType = (typeof VEHICLE_TYPES)[keyof typeof VEHICLE_TYPES];
