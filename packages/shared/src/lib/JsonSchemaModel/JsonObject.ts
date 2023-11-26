import { JsonSchemaTypes } from "../JsonSchema/JsonSchemaBase";
import { JsonSchemaElement } from "./JsonSchemaElement";

type Payload = {
  type: JsonSchemaTypes;
  properties: { [key: string]: JsonSchemaElement };
  requiredProperties: string[];
  propertyDependencies: { [key: string]: JsonSchemaElement };
  allOf?: JsonSchemaElement[];
  anyOf?: JsonSchemaElement[];
  oneOf?: JsonSchemaElement[];
  not?: JsonSchemaElement;
  description?: string;
  title?: string;
};

export class JsonObject extends JsonSchemaElement {
  properties: { [key: string]: JsonSchemaElement };
  requiredProperties: string[];
  propertyDependencies: { [key: string]: JsonSchemaElement };
  allOf?: JsonSchemaElement[];
  anyOf?: JsonSchemaElement[];
  oneOf?: JsonSchemaElement[];
  not?: JsonSchemaElement;
  description?: string;
  title?: string;

  constructor({
    type,
    properties,
    requiredProperties,
    propertyDependencies,
    allOf,
    anyOf,
    oneOf,
    not,
    description,
    title,
  }: Payload) {
    super(type);
    this.properties = properties;
    this.requiredProperties = requiredProperties;
    this.propertyDependencies = propertyDependencies;
    this.allOf = allOf;
    this.anyOf = anyOf;
    this.oneOf = oneOf;
    this.not = not;
    this.description = description;
    this.title = title;
  }
}
