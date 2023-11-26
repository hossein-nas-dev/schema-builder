import { JsonSchemaTypes } from "../JsonSchema/JsonSchemaBase";

export class JsonSchemaElement {
  private type: JsonSchemaTypes;

  constructor(type: JsonSchemaTypes) {
    this.type = type;
  }

  get getType() {
    return this.type;
  }
}
