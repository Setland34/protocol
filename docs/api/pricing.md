---
sidebar_position: 6
sidebar_label: Pricing
---

import { LinkButton } from '@site/src/components/LinkButton';
import Link from '@docusaurus/Link';
import { SignInDashboard } from '@site/src/components/SignInDashboard';

# Pricing

## Overview

The Zapper API uses a credit-based system where each API call consumes a specific number of credits from your balance. Our flexible pricing model allows you to purchase credits onchain and offers volume-based discounts for larger purchases.

## Credit System Basics

- **Exchange Rate**: 1,000 Credits = $1 USD
- **Purchase Options**: Pay onchain with ETH, MATIC, USDC, USDT, DAI, and 100+ other tokens
- **Free Tier**: 5,000 credits available to all new API clients
- **Credit Balance**: Monitor usage and purchase credits through your <SignInDashboard />

## Query Pricing Structure

### Onchain Prices (4 Credits)

| Query                                                                                       | Description                                                             |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`fungibleToken`](/docs/api/endpoints/onchain-prices#fungibletoken)                         | Get comprehensive token data including market metrics and price history |
| [`fungibleTokensByAddresses`](/docs/api/endpoints/onchain-prices#fungibletokensbyaddresses) | Retrieve data for multiple tokens in one request                        |

### Portfolio Queries (3 Credits)

| Query                                        | Features Included                                                                                                                                                                                                                                                                                                                                                  | Description                           |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| [`portfolio`](/docs/api/endpoints/portfolio) | [`appBalances`](/docs/api/endpoints/portfolio#2-app-balances-appbalances) [`nftBalances`](/docs/api/endpoints/portfolio#3-nft-balances-nftbalances) [`tokenBalances`](/docs/api/endpoints/portfolio#1-token-balances-tokenbalances) [`claimables`](/docs/api/endpoints/portfolio#5-claimables) [`totals`](/docs/api/endpoints/portfolio#4-portfolio-totals-totals) | Onchain portfolio's in a single query |

### Other Queries (2 Credits)

| Category                    | Queries                                                                                                                                                                                                                                                                                                                                            | Description                                  |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Human-readable Transactions | [`timelineEvent`](/docs/api/endpoints/human-readable-transactions/timeline-event) [`timelineForApp`](/docs/api/endpoints/human-readable-transactions/app-timelines) [`accountsTimeline`](/docs/api/endpoints/human-readable-transactions/account-timelines)                                                                                        | Human-readable transactions and activity     |
| Onchain Identity            | [`accounts`](/docs/api/endpoints/onchain-identity#accounts)                                                                                                                                                                                                                                                                                        | ENS, Farcaster, and Lens identity resolution |
| NFT Data                    | [`nftCollections`](/docs/api/endpoints/nft-queries/nft-collections) [`nftToken`](/docs/api/endpoints/nft-queries/nft-token) [`nftUsersCollections`](/docs/api/endpoints/nft-queries/nft-collection-holdings) [`nftUsersTokens`](/docs/api/endpoints/nft-queries/nft-token-holdings) [`nftNetWorth`](/docs/api/endpoints/nft-queries/nft-net-worth) | Comprehensive NFT data                       |

## Volume Discounts

| Tier | Credit Volume | Price per 1k Credits | Savings |
| ---- | ------------- | -------------------- | ------- |
| 1    | 0-15M         | $1.00                | -       |
| 2    | 15M-50M       | $0.80                | 20%     |
| 3    | 50M+          | $0.70                | 30%     |

### Volume Pricing Example

For a 60M credit purchase:

1. First 15M credits @ $1.00/1k = $15,000
2. Next 35M credits @ $0.80/1k = $28,000
3. Final 10M credits @ $0.70/1k = $7,000
   Total cost: $50,000 (vs $60,000 at standard pricing)

## Important Notes

### Rate Limits

- Default: 30 requests per minute
- Need higher limits? Contact api@zapper.xyz

### Multi-Address Queries

- Cost = (Query Base Price) × (Number of Addresses)
- Example: Portfolio query for 3 addresses = 9 credits

### Getting Started

1. Access your free 5,000 credits
2. Test queries in our [Sandbox](/docs/api/sandbox) (doesn't consume credits)
3. Purchase additional credits through your [Dashboard](/dashboard)

:::warning Terms of Service
Creating multiple API keys to accumulate free credits violates our [Terms of Service](https://zapper.xyz/docs/api-terms-of-use.pdf).
:::
