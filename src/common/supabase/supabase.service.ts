import { Injectable } from '@nestjs/common';
import { supabase } from '../utils/supabase';

interface QueryProps {
  query: string | number;
}

@Injectable()
export class SupabaseService {
  constructor() {}

  async selectQuery(table: string, columns: string) {
    /* 타입 수정 예정*/
    const { data, error }: { data: any; error: any } = await supabase
      .from(table)
      .select(columns);
    return { data, error };
  }

  /* 
  const { error } = await supabase
  .from('countries')
  .update({ name: 'Australia' })
  .eq('id', 1)
  */
  async updateQuery(
    table: string,
    column: QueryProps,
    value: { query: any; value: any },
  ) {
    const { data: result, error }: { data: any; error: any } = await supabase
      .from(table)
      .update(column)
      .eq(value.query, value.value);
    return { result, error };
  }
}
