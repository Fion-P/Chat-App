class RemoveEmailFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :email
    remove_column :users, :email
  end
end
