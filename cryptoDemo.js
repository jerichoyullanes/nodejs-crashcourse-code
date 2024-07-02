import crypto from 'crypto';

// createHash() - Creates a hash object using the specified algorithm
const hash = crypto.createHash('sha256'); // Create a SHA-256 hash object
hash.update('password1234'); // Update the hash with the string 'password1234'
console.log("Hashed Password: ", hash.digest('hex')); // Log the hashed password in hexadecimal format

// randomBytes() - Generates cryptographically strong pseudorandom data
crypto.randomBytes(16, (error, buffer) => { // Generate 16 random bytes
    if (error) throw error; // Throw an error if it occurs
    console.log(buffer.toString('hex')); // Log the random bytes in hexadecimal format
});

// createCipheriv & createDecipheriv - Encrypt and decrypt data using the specified algorithm, key, and IV
const algorithm = 'aes-256-cbc'; // Define the encryption algorithm
const key = crypto.randomBytes(32); // Generate a random 32-byte key
const iv = crypto.randomBytes(16); // Generate a random 16-byte initialization vector (IV)

const cipher = crypto.createCipheriv(algorithm, key, iv); // Create a cipher object using the algorithm, key, and IV
console.log("Encrypted:");
let encrypted = cipher.update('Hello this is the secret message', 'utf8', 'hex'); // Encrypt the message
encrypted += cipher.final('hex'); // Finalize the encryption
console.log(encrypted); // Log the encrypted message in hexadecimal format

const decipher = crypto.createDecipheriv(algorithm, key, iv); // Create a decipher object using the algorithm, key, and IV
console.log("Decrypted:");
let decrypted = decipher.update(encrypted, 'hex', 'utf8'); // Decrypt the message
decrypted += decipher.final('utf8'); // Finalize the decryption
console.log(decrypted); // Log the decrypted message
