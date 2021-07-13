import { Heading, Page} from "@shopify/polaris";
import { ResourcePicker} from "@shopify/app-bridge-react";

class Index extends React.Component{
  state  = {open: false }
  render()
  return(
  <Page
    title="Product Selector"
    primaryAction={{
      content: "Select products",
      onAction: () => console.log("clicked"),
    }})
  >
  <ResourcePicker
    resourceType ='Product'
    open = {this.state.open}
  />
  </Page>
)}

export default Index;
