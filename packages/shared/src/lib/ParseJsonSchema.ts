// @ts-nocheck
import {
  JsonObject,
  JsonArray,
  JsonNull,
  JsonBoolean,
  JsonNumber,
  JsonString,
  JsonSchemaElement,
} from "@/lib/JsonSchemaModel";
import { JsonSchema } from "@/lib/JsonSchema";

export function parseJsonSchema(
  jsonSchema: string | JsonSchema
): JsonSchemaElement {
  let schemaObject: Record<string, unknown> | JsonSchema;
  if (typeof jsonSchema === "string") {
    schemaObject = JSON.parse(jsonSchema);
  } else {
    schemaObject = jsonSchema;
  }
  console.log({ schemaObject });
  return parseSchemaElement(schemaObject as any);
}

function parseSchemaElement<T extends JsonSchema | undefined>(
  payload: T
): JsonSchemaElement {
  let schemaElement: T = { type: undefined } as unknown as Exclude<
    T,
    undefined
  >;
  if (typeof payload === "object" && "type" in payload) {
    schemaElement = payload;
  }

  if (schemaElement.type === "object") {
    const properties: { [key: string]: JsonSchema } =
      schemaElement.properties || {};
    const requiredProperties: string[] = schemaElement.required || [];

    const propertyDependencies: { [key: string]: JsonSchemaElement } =
      schemaElement.propertyDependencies || {};
    const allOf: JsonSchemaElement[] | undefined = parseArray(
      schemaElement.allOf
    );
    const anyOf: JsonSchemaElement[] | undefined = parseArray(
      schemaElement.anyOf
    );
    const oneOf: JsonSchemaElement[] | undefined = parseArray(
      schemaElement.oneOf
    );
    const not: JsonSchemaElement | undefined = parseSchemaElement(
      schemaElement.not
    );

    return new JsonObject({
      type: schemaElement.type,
      properties: Object.keys(properties).reduce((acc, key) => {
        const res = parseSchemaElement(properties[key]);
        if (res) {
          // @ts-expect-error
          acc[key] = res;
        }
        return acc;
      }, {}),
      requiredProperties,
      propertyDependencies,
      allOf,
      anyOf,
      oneOf,
      not,
      description: schemaElement.description,
      title: schemaElement.title,
    });
  } else if (schemaElement.type === "array") {
    return new JsonArray({
      type: schemaElement.type,
      items: parseSchemaElement(schemaElement.items),
      minItems: schemaElement.minItems,
      maxItems: schemaElement.maxItems,
    });
  } else if (schemaElement.type === "string") {
    return new JsonString({
      type: schemaElement.type,
      pattern: schemaElement.pattern,
      minLength: schemaElement.minLength,
      maxLength: schemaElement.maxLength,
      format: schemaElement.format,
    });
  } else if (schemaElement.type === "number") {
    return new JsonNumber({
      type: schemaElement.type,
      minimum: schemaElement.minimum,
      maximum: schemaElement.maximum,
      exclusiveMaximum: schemaElement.exclusiveMinimum,
      exclusiveMinimum: schemaElement.exclusiveMaximum,
      multipleOf: schemaElement.multipleOf,
    });
  } else if (schemaElement.type === "boolean") {
    return new JsonBoolean(schemaElement.type);
  } else if (schemaElement.type === "null") {
    return new JsonNull(schemaElement.type);
  }

  // Handle additional types or throw an error for unsupported types
  throw new Error(`Unsupported schema type: ${schemaElement.type}`);
}

function parseArray(array: any[] | undefined): JsonSchemaElement[] | undefined {
  return Array.isArray(array) ? array.map(parseSchemaElement) : undefined;
}
