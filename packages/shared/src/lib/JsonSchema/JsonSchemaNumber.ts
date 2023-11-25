import { JsonSchemaBase } from "./JsonSchemaBase";

export default interface JsonNumber extends JsonSchemaBase {
  type: "number" | "integer";
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  multipleOf?: number;
}
