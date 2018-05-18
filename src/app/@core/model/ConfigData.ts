export interface ConfigData {
  key: string;
  data: any;
  type: 'INTEGER' | 'STRING' | 'DATE' | 'LONG' | 'DOUBLE' | 'BOOLEAN';
  defaultValue: any;
}
