# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  profile_id :integer          not null
#

class Post < ApplicationRecord

  belongs_to :profile,
    foreign_key: :profile_id,
    class_name: :User 

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
