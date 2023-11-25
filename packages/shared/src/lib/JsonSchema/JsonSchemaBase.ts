import type {
  JsonSchemaArray,
  JsonSchemaBoolean,
  JsonSchemaNull,
  JsonSchemaNumber,
  JsonSchemaObject,
  JsonSchemaString,
} from ".";

export type JsonSchemaTypes =
  | "object"
  | "string"
  | "array"
  | "boolean"
  | "number"
  | "null";

export interface JsonSchemaBase {
  // Common properties for all JSON Schema types
  type?: string | string[];
  title?: string;
  description?: string;
  default?: any;
  examples?: any[];
  // Add other common properties as needed
}

export type JsonSchema =
  | JsonSchemaString
  | JsonSchemaNumber
  | JsonSchemaBoolean
  | JsonSchemaNull
  | JsonSchemaArray
  | JsonSchemaObject;

export type MaybeJsonSchema = JsonSchema | undefined | null | unknown;

const acceptableTypes = [
  "object",
  "string",
  "array",
  "boolean",
  "number",
  "null",
] as JsonSchemaTypes[];

export const isJsonSchema = (schema: MaybeJsonSchema): schema is JsonSchema => {
  return !!(
    schema &&
    typeof schema === "object" &&
    "type" in schema &&
    (acceptableTypes as string[]).includes(schema.type as string)
  );
};
