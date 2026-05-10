# Day 3: Understand SOL and Lamports

## The Scenario
Now that your wallet works, understand how its balance is handled in code. SOL is what users see, but lamports are what your code actually uses.

## Key Concept: SOL vs Lamports

**1 SOL = 1,000,000,000 lamports (10^9)**

The name "lamport" comes from Leslie Lamport, a computer scientist whose work on distributed systems laid the theoretical groundwork for blockchains.

### Why Integers, Not Decimals?

Floating point arithmetic is unreliable for money:
```javascript
0.1 + 0.2
// 0.30000000000000004 ❌ Rounding error!
```

On a blockchain, every validator must arrive at the **exact same result** byte-for-byte. Integer math guarantees this. Lamports are always whole numbers—no fractions, no rounding, no ambiguity.

## Where You'll See This in Practice

### Wallet UI displays SOL
```
Balance: 2 SOL
```

### Everything else uses lamports
```javascript
// Query balance (returns lamports)
const balance = await rpc.getBalance(wallet.address).send();
// 2000000000 (lamports, not SOL)

// Check transaction fees (in lamports)
const fees = await rpc.getFeeForMessage(message).send();
// 5000 (lamports = 0.000005 SOL)

// Transfer SOL (amount expects lamports)
const lamports = 1.5 * LAMPORTS_PER_SOL;
// 1500000000
```

## Common Lamport Amounts to Know

| Amount | In SOL | What It Is |
|--------|--------|-----------|
| 5,000 | 0.000005 | Typical base transaction fee |
| 890,880 | ~0.00089 | Minimum rent for basic token account |
| 1,000,000,000 | 1 | Exactly 1 SOL |
| 2,000,000,000 | 2 | Default devnet airdrop amount |

## The Challenge

### Step 1: Check your balance in SOL
```bash
solana balance --url devnet
```

### Step 2: Get the raw lamport value
```bash
solana balance --url devnet --lamports
```

### Step 3: Verify the math
Multiply the SOL value by 1,000,000,000. The numbers should match exactly.

### Step 4: Inspect a transaction
```bash
solana transaction-history $(solana address) --url devnet --limit 1
```

Take the signature and inspect it:
```bash
solana confirm SIGNATURE_HERE -v --url devnet
```

Find the **fee** field (in lamports). Divide by 1,000,000,000 to see what you paid in SOL. Should be 0.000005 SOL (5,000 lamports).

## Key Takeaways

✅ SOL is what users see. Lamports are what code uses.

✅ 1 SOL = 1,000,000,000 lamports. Always integers.

✅ Every RPC call, program instruction, and fee: all denominated in lamports.

✅ Same pattern as Stripe—if you've built payment flows with amounts in cents, you already know this.


---

**Resources:**
- [Solana CLI Installation](https://docs.solana.com/cli/install-solana-cli-tools)
- [Solana Web3.js Docs](https://solana-labs.github.io/solana-web3.js/)
- [Leslie Lamport - Wikipedia](https://en.wikipedia.org/wiki/Leslie_Lamport)
