/**
 * Day 3: SOL <-> Lamport Converter
 * 
 * Demonstrates the relationship between SOL and Lamports
 * 1 SOL = 1,000,000,000 lamports
 */

const LAMPORTS_PER_SOL = 1_000_000_000;

// Helper functions
function solToLamports(sol) {
  return BigInt(sol * LAMPORTS_PER_SOL);
}

function lamportsToSol(lamports) {
  return Number(lamports) / LAMPORTS_PER_SOL;
}

// Example conversions
console.log("=== SOL to Lamports ===");
console.log(`1 SOL = ${solToLamports(1)} lamports`);
console.log(`2 SOL = ${solToLamports(2)} lamports`);
console.log(`0.000005 SOL = ${solToLamports(0.000005)} lamports (typical fee)`);
console.log(`1.5 SOL = ${solToLamports(1.5)} lamports`);

console.log("\n=== Lamports to SOL ===");
console.log(`5000 lamports = ${lamportsToSol(5000)} SOL (typical fee)`);
console.log(`890880 lamports = ${lamportsToSol(890880)} SOL (token account rent)`);
console.log(`1000000000 lamports = ${lamportsToSol(1000000000)} SOL`);
console.log(`2000000000 lamports = ${lamportsToSol(2000000000)} SOL (devnet airdrop)`);

// Verify the math
console.log("\n=== Verification ===");
const testAmount = 2;
const inLamports = solToLamports(testAmount);
const backToSol = lamportsToSol(inLamports);
console.log(`Start: ${testAmount} SOL`);
console.log(`Convert to lamports: ${inLamports}`);
console.log(`Convert back to SOL: ${backToSol}`);
console.log(`Match? ${testAmount === backToSol ? "✅ Yes!" : "❌ No"}`);
