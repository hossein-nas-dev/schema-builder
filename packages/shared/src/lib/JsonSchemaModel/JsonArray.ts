import { JsonSchemaElement } from "@/lib/";
import { JsonSchemaTypes } from "@/lib/JsonSchema/JsonSchemaBase";

type Payload = {
  type: JsonSchemaTypes;
  items: JsonSchemaElement;
  minItems?: number;
  maxItems?: number;
};

export class JsonArray extends JsonSchemaElement {
  items: JsonSchemaElement;
  minItems?: number;
  maxItems?: number;

  constructor({ type, items, minItems, maxItems }: Payload) {
    super(type);
    this.items = items;
    this.minItems = minItems;
    this.maxItems = maxItems;
  }
}
