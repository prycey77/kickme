import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import factory from "../ethereum/factory";
import "semantic-ui-css/semantic.min.css";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }
  render() {
    return <div>{this.renderCampaigns()}</div>;
  }
}
export default CampaignIndex;

// TODO:
// Configure web3 with a provider from metamask
// Use Factory instance to retrieve a list of deployed campaigns
// Use React to show something about each campaign
