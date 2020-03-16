class Api::UsersSearchController < ApplicationController

  before_action :require_login

  def index
    chatter_ids = current_user.chatters.uniq{ |user| user.id }.map{|user| user.id}
    search_name = params[:query].downcase
    @users = User.where("id NOT IN (?)", chatter_ids).where('lower(username) LIKE?', "%#{search_name}%")
  end

  private

  def user_search_params
    params.permit(:query)
	end
end
