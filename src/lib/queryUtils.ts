import connect from "@/lib/config";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

///selectQuery
export async function selectQuery<T>(query: string): Promise<Partial<T>[]> {
  const [data] = await connect.query(query);
  return data as T[];
}

///insertQuery,update,delete
export async function ModifyQuery(query: string): Promise<ResultSetHeader> {
  const [data] = await connect.execute(query);
  return data as ResultSetHeader;
}
