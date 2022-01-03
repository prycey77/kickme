import { min } from "mocha/lib/reporters";
import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3"

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log(summary);
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }
  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money.",
        style: { overflowWrap: "break-word" },
      },
      {
          header: web3.utils.fromWei(balance, 'ether'),
          meta: "Current Balance (in ether)",
          description: "The balance is how much money there is to spend."
      },
      {
      header: minimumContribution,
      meta: "Minimum Contribution (wei)",
      description: "You must contribute at least this much wei."
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description: "Number of people who have already donated to this campaign."
      },
      {
      header: requestsCount,
      meta: "Number of Requests",
      description: "A request tries to withdraw money from the contract. Requests must be approved by approvers."
      }
    ];
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        {this.renderCards()}
      </Layout>
    );
  }
}

export default CampaignShow;
