class FixPostsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :pofile_id
    add_column :posts, :profile_id, :integer, null: false
  end
end
