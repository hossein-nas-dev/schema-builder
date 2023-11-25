import { JsonSchemaBase } from "./JsonSchemaBase";

export default interface JsonString extends JsonSchemaBase {
  type: "string";
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?: string;
}
