import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2019-01-25",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "App Mesh",
};
