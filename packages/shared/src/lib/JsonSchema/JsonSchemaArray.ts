import { JsonSchema, JsonSchemaBase } from "./JsonSchemaBase";

export default interface JsonArray extends JsonSchemaBase {
  type: "array";
  items?: JsonSchema;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
  contains?: JsonSchema;
}
