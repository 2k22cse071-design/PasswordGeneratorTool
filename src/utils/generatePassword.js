export const generatePassword = (length, options) => {
  const charset = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
  };

  let pool = '';
  let password = [];
  const selectedTypes = [];

  if (options.uppercase) {
    pool += charset.uppercase;
    selectedTypes.push(charset.uppercase);
  }
  if (options.lowercase) {
    pool += charset.lowercase;
    selectedTypes.push(charset.lowercase);
  }
  if (options.numbers) {
    pool += charset.numbers;
    selectedTypes.push(charset.numbers);
  }
  if (options.symbols) {
    pool += charset.symbols;
    selectedTypes.push(charset.symbols);
  }

  if (pool === '' || selectedTypes.length === 0) return '';

  selectedTypes.forEach(type => {
    const randomIndex = Math.floor(Math.random() * type.length);
    password.push(type[randomIndex]);
  });

  for (let i = password.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    password.push(pool[randomIndex]);
  }

  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join('');
};


