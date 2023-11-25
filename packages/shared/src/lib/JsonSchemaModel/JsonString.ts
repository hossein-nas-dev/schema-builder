import { JsonSchemaElement } from "@/lib";
import { JsonSchemaTypes } from "@/lib/JsonSchema/JsonSchemaBase";

type Payload = {
  type: JsonSchemaTypes;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  format?: string;
};

export class JsonString extends JsonSchemaElement {
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  format?: string;

  constructor({ type, pattern, minLength, maxLength, format }: Payload) {
    super(type);
    this.pattern = pattern;
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.format = format;
  }
}
