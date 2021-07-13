import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page
  title  = 'Product Selector'
    primaryAction = {{
      content: 'Select products',
      onAction: () => console.log('clicked')
    }
    }
  />
);

export default Index;
