import { JsonSchemaTypes } from "../JsonSchema/JsonSchemaBase";
import { JsonSchemaElement } from "./JsonSchemaElement";

type Payload = {
  type: JsonSchemaTypes;
  items: JsonSchemaElement | undefined;
  minItems?: number;
  maxItems?: number;
};

export class JsonArray extends JsonSchemaElement {
  items: JsonSchemaElement | undefined;
  minItems?: number;
  maxItems?: number;

  constructor({ type, items, minItems, maxItems }: Payload) {
    super(type);
    this.items = items;
    this.minItems = minItems;
    this.maxItems = maxItems;
  }
}
