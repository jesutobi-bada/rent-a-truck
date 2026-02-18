/**
 * Validate a Nigerian phone number (e.g., +234XXXXXXXXXX or 0XXXXXXXXXX).
 */
export function isValidNigerianPhone(phone: string): boolean {
  return /^(\+234|0)[789]\d{9}$/.test(phone.replace(/\s/g, ''));
}

/**
 * Validate a Nigerian vehicle license plate.
 */
export function isValidLicensePlate(plate: string): boolean {
  return /^[A-Z]{3}-\d{3}[A-Z]{2}$/.test(plate.trim().toUpperCase());
}

/**
 * Validate an email address.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
