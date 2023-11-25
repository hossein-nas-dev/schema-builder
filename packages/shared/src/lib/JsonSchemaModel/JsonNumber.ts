import { JsonSchemaElement } from "@/lib";
import { JsonSchemaTypes } from "@/lib/JsonSchema/JsonSchemaBase";
type Payload = {
  type: JsonSchemaTypes;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  multipleOf?: number;
};

export class JsonNumber extends JsonSchemaElement {
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  multipleOf?: number;

  constructor({
    type,
    minimum,
    maximum,
    exclusiveMinimum,
    exclusiveMaximum,
    multipleOf,
  }: Payload) {
    super(type);
    this.minimum = minimum;
    this.maximum = maximum;
    this.exclusiveMinimum = exclusiveMinimum;
    this.exclusiveMaximum = exclusiveMaximum;
    this.multipleOf = multipleOf;
  }
}
