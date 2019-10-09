import {
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse
} from "../models/transcribe-streaming";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import {
  SerializerUtils,
  DeserializerUtils,
  HeaderBag,
  ResponseMetadata
} from "@aws-sdk/types";
import * as __aws_sdk_stream_collector_node from "@aws-sdk/stream-collector-node";
import * as __aws_sdk_util_utf8_node from "@aws-sdk/util-utf8-node";
type Utils = { [key: string]: any };

export function startStreamTranscriptionAwsJson1_1Serialize(
  input: StartStreamTranscriptionRequest,
  utils?: Utils
): HttpRequest {
  let body: any = {};
  let headers: HeaderBag = {
    "Content-Type": "application/json"
  };

  if (input.MediaEncoding !== undefined) {
    headers["x-amzn-transcribe-media-encoding"] = input.MediaEncoding;
  }

  if (input.VocabularyName !== undefined) {
    headers["x-amzn-transcribe-vocabulary-name"] = input.VocabularyName;
  }

  if (input.SessionId !== undefined) {
    headers["x-amzn-transcribe-session-id"] = input.SessionId;
  }

  if (input.LanguageCode !== undefined) {
    headers["x-amzn-transcribe-language-code"] = input.LanguageCode;
  }

  if (input.MediaSampleRateHertz !== undefined) {
    headers[
      "x-amzn-transcribe-sample-rate"
    ] = input.MediaSampleRateHertz.toString();
  }

  return new HttpRequest({
    body: input.AudioStream,
    path: "/stream-transcriptionfoo",
    method: "POST",
    protocol: "https:",
    headers: headers
  });
}

export async function startStreamTranscriptionAwsJson1_1Deserialize(
  output: HttpResponse,
  utils?: Utils
): Promise<StartStreamTranscriptionResponse> {
  if (output.statusCode !== 200) {
    return startStreamTranscriptionAwsJson1_1DeserializeError(output);
  }
  return Promise.resolve({
    $metadata: deserializeMetadata(output),
    __type: "com.amazon.transcribe.streaming#StartStreamTranscriptionResponse",
    TranscriptResultStream: output.body,
    LanguageCode: output.headers["x-amzn-transcribe-language-code"],
    SessionId: output.headers["x-amzn-transcribe-session-id"],
    MediaSampleRateHertz: parseInt(
      output.headers["x-amzn-transcribe-sample-rate"]
    ),
    MediaEncoding: output.headers["x-amzn-transcribe-media-encoding"],
    RequestId: output.headers["x-amzn-request-id"],
    VocabularyName: output.headers["x-amzn-transcribe-vocabulary-name"]
  });
}

async function startStreamTranscriptionAwsJson1_1DeserializeError(
  output: HttpResponse
): Promise<StartStreamTranscriptionResponse> {
  return Promise.reject({
    __type: "com.amazon.transcribe.streaming#UnknownException",
    $name: "UnknownException",
    $fault: "server"
  });
}

const deserializeMetadata = (output: HttpResponse): ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});
