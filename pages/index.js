import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => ({
      header: address,
      description: (
        <Link route={`/campaigns/${address}`}>
          <a>View Campaign</a>
        </Link>
      ),
      fluid: true
    }));

    return <Card.Group items={items} />;
  }

  render() {
    const { campaigns } = this.props;
    return (
      <Layout>
        <h3>Open Campaigns </h3>
        <Link route="campaigns/new">
          <a>
            <Button
              content="Create Campaign"
              icon="add circle"
              primary
              floated="right"
            />
          </a>
        </Link>
        {this.renderCampaigns()}
      </Layout>
    );
  }
}
export default CampaignIndex;

// TODO:
// Configure web3 with a provider from metamask
// Use Factory instance to retrieve a list of deployed campaigns
// Use React to show something about each campaign
