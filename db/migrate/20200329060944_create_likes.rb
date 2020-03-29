class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.string :post_type, null: false
      t.timestamps
    end
    add_index :likes, [:user_id, :post_id, :post_type], unique: true
  end
end
