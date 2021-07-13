import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page
    title="Product Selector"
    primaryAction={{
      content: "Select products",
      onAction: () => console.log("clicked"),
    }}
    title="Product Selector 2"
    primaryAction={{
      content: "Select products",
      onAction: () => console.log("clicked"),
    }}
  />
);

export default Index;
