import { JsonSchema, JsonSchemaBase } from "./JsonSchemaBase";

export default interface JsonObject extends JsonSchemaBase {
  not: any;
  oneOf: any[] | undefined;
  anyOf: any[] | undefined;
  allOf(allOf: any): import("..").JsonSchemaElement[] | undefined;
  propertyDependencies: {};
  type: "object";
  properties?: { [key: string]: JsonSchema };
  required?: string[];
  additionalProperties?: boolean | JsonSchema;
  patternProperties?: { [key: string]: JsonSchema };
  minProperties?: number;
  maxProperties?: number;
  dependencies?: { [key: string]: JsonSchema | string[] };
}
