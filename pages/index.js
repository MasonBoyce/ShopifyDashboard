
import React from 'react';
import { Heading, Page, Layout, EmptyState} from "@shopify/polaris";
import { ResourcePicker} from "@shopify/app-bridge-react";
import store from 'store-js';
import ResourceListWithProducts from './components/ResourceList';


class Index extends React.Component{
  state  = {open: false }
  render(){
    return(
      <Page
      title="Product Selector"
      primaryAction={{
        content: "Select products",
        onAction: () => this.setState({open:true})
      }}
      >
      <ResourcePicker
      resourceType ='Product'
      open = {this.state.open}
      onCancel ={() => this.setState({open: false})}
      onSelection = {(resources) => this.handleSelection(resources)}
      />
      <EmptyState
      heading="Discount your products temporarily"
      action={{
        content: 'Select products',
        onAction: () => this.setState({ open: true }),
      }}
      
      >
      <p>Select products to change their price temporarily.</p>
      </EmptyState>
      <ResourceListWithProducts />
      </Page>
    )}

    handleSelection = (resources)  => {
      const idFromResources  = resources.selection.map((product) => product.id)
      this.setState({open: false})
      store.set('ids',idFromResources);
    };
  }

  export default Index;
