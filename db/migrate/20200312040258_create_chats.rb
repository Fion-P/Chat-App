class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.integer :channel_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :chats, :user_id
    add_index :chats, :channel_id
    add_index :chats, [:channel_id, :user_id], unique: true
  end
end
