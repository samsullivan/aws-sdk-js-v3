import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResolverEndpointInput: _Structure_ = {
  type: "structure",
  required: ["ResolverEndpointId"],
  members: {
    ResolverEndpointId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};