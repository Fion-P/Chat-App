class AddToMessageTableNullFalse < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :chatroom_id
    add_column :messages, :chatroom_id, :integer, null: false
  end
end
