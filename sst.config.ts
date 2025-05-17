import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "opennext-redirect-repeated-slashes",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        openNextVersion: "3.6.1",
        regional: {
          enableServerUrlIamAuth: true,
        }
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
