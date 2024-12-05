import React from 'react';
import { LinkButton } from '../../components/LinkButton';
import { Section } from '../../components/Section';
import { AccountTimelines } from './AccountTimelines';
import { Labelling } from './Labelling';
import { PortfolioTracking } from './PortfolioTracking';

enum TabEnum {
  Portfolio = 'portfolio',
  Timeline = 'timeline',
  Labels = 'labels',
}

export const ApiSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(TabEnum.Portfolio);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              borderStyle: 'solid',
              borderWidth: '1px',
              padding: '8px 24px',
              borderRadius: '16px',
              width: 'fit-content',
              fontWeight: '600',
            }}
            className="border text-alt-color"
          >
            Powered by an open interpretation layer
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <h1
              style={{
                flex: 1,
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              The Ultimate Onchain API
            </h1>
            <p
              className="text-alt-color"
              style={{
                fontWeight: '300',
                textAlign: 'center',
                maxWidth: '720px',
              }}
            >
              One API to access all DeFi positions, tokens, apps, NFT collections, and human-readable transaction feeds
              across 30+ chains 一 all available with a few lines of code.
            </p>
          </div>
          <LinkButton href="/docs/api-intro#quickstart" type="primary" buttonCopy="Get Your API Key" />
        </div>
      </div>
    </div>
  );
};
