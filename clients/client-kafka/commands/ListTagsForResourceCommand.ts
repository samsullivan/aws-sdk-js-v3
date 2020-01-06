import {
  KafkaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KafkaClient";
import {
  ListTagsForResourceRequest,
  ListTagsForResourceResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListTagsForResourceCommand,
  serializeAws_restJson1_1ListTagsForResourceCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type ListTagsForResourceCommandInput = ListTagsForResourceRequest;
export type ListTagsForResourceCommandOutput = ListTagsForResourceResponse;

export class ListTagsForResourceCommand extends $Command<
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListTagsForResourceCommandInput,
    ListTagsForResourceCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListTagsForResourceCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListTagsForResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListTagsForResourceCommandOutput> {
    return deserializeAws_restJson1_1ListTagsForResourceCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
