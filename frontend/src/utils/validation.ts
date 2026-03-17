/**
 * Form validation utility functions
 * Provides reusable validation helpers with clear error messages
 */

/**
 * Validates that a field is not empty
 * @param value - The field value to validate
 * @param fieldName - The name of the field (for error message)
 * @returns Empty string if valid, error message if invalid
 */
export function validateRequired(value: string, fieldName: string): string {
  if (!value || value.trim() === '') {
    return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
  }
  return '';
}

/**
 * Validates email format using a simple regex pattern
 * @param email - The email address to validate
 * @returns Empty string if valid, error message if invalid
 */
export function validateEmail(email: string): string {
  // First check if email is provided
  const requiredError = validateRequired(email, 'Email');
  if (requiredError) return requiredError;

  // Simple email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
}
