import { writeFileSync } from 'fs';

export const writeFile = async (path: string, data: any) => {
  const toJSON = JSON.stringify(data, null, 2);
  writeFileSync(path, toJSON);
};
