class FixDatabases < ActiveRecord::Migration[5.2]
  def change
    drop_table :channels
    drop_table :chats
    remove_column :messages, :channel_id

  end
end
