import { attributes } from "./attributes";
import { custom_fields } from "./custom_fields";

export interface SharkObject {
  attributes:     attributes;
  custom_fields:  custom_fields;
  description:    any;
  external_url:   any;
  file_url:       any;
  name:           any;
}
