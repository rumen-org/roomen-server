import { Injectable } from '@nestjs/common';
import { Item } from '../models/item.model';
import { Injectable } from '@nestjs/common';
import { Item } from '../models/item.model';
import { supabase } from '../supabase'; // Import the supabase client

@Injectable()
export class CartService {
  private cartItems: Item[] = [];
  private tableName = 'cart'; // Set the table name

  async addItem(item: Item): Promise<void> {
    this.cartItems.push(item);
    await supabase.from(this.tableName).insert(item); // Insert the item into the cart table
  }

  async removeItem(item: Item): Promise<void> {
    const index = this.cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    );
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      await supabase.from(this.tableName).delete().eq('id', item.id); // Delete the item from the cart table
    }
  }

  async getItems(): Promise<Item[]> {
    const { data } = await supabase.from(this.tableName).select('*'); // Retrieve all items from the cart table
    return data;
  }

  async clearCart(): Promise<void> {
    this.cartItems = [];
    await supabase.from(this.tableName).delete(); // Delete all items from the cart table
  }
}
