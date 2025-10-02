/**
 * Password Strength Checker
 * - Weak: <6 chars
 * - Medium: 6-10 with letters & numbers
 * - Strong: >10 with letters, numbers & symbols
 */

function checkPasswordStrength(password) {
  if (!password) return "Password cannot be empty!";

  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < 6) return "Weak 🔴";
  if (password.length <= 10 && hasLetters && hasNumbers) return "Medium 🟠";
  if (password.length > 10 && hasLetters && hasNumbers && hasSymbols) return "Strong 🟢";

  return "Weak 🔴";
}

// Example Usage
console.log(checkPasswordStrength("abc"));          // Weak
console.log(checkPasswordStrength("abc123"));       // Medium
console.log(checkPasswordStrength("abc123$#@!"));   // Strong
