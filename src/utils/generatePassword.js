export const generatePassword = (length, options) => {
  const charset = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
  };

  let pool = '';
  if (options.uppercase) pool += charset.uppercase;
  if (options.lowercase) pool += charset.lowercase;
  if (options.numbers) pool += charset.numbers;
  if (options.symbols) pool += charset.symbols;

  if (pool === '') return '';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    password += pool[randomIndex];
  }

  return password;
};
