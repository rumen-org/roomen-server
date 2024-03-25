import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

interface QueryProps {
  query: string | number;
}

@Injectable()
export class SupabaseService {
  constructor(private configService: ConfigService) {}

  supabase() {
    const supabaseUrl = this.configService.get('SUPABASE_URL');
    const supabaseKey = this.configService.get('SUPABASE_KEY');
    const supabase = createClient(supabaseUrl, supabaseKey);
    return supabase;
  }
  async selectQuery(table: string, columns: string) {
    /* 타입 수정 예정*/
    const supabase = this.supabase();
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
    const supabase = this.supabase();
    const { data: result, error }: { data: any; error: any } = await supabase
      .from(table)
      .update(column)
      .eq(value.query, value.value);
    return { result, error };
  }
}
