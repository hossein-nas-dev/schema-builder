import { JsonSchema, JsonSchemaBase } from "./JsonSchemaBase";

export default interface JsonObject extends JsonSchemaBase {
  type: "object";
  properties?: { [key: string]: JsonSchema };
  required?: string[];
  additionalProperties?: boolean | JsonSchema;
  patternProperties?: { [key: string]: JsonSchema };
  minProperties?: number;
  maxProperties?: number;
  dependencies?: { [key: string]: JsonSchema | string[] };
}
