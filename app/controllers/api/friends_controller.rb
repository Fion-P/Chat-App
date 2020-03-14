class Api::FriendsController < ApplicationController

  def index
    # user = user.find(params[:user_id])
    # @friends = user.friends
    @friends = Friend.where(user_id: params[:user_id])
    render :index
  end

  def create
    @friend = Friend.new(friend_params)
    @friend.user_id = current_user.id

    if @friend.save
      render :show
    else
      render @friend.errors.full_messages, status: 401
    end
  end

  def destroy
    @friend = Friend.find(params[:id])

    @friend.destroy 

    render json @friend
  end

  private

  def friend_params
    params.require(:friends).permit(:friend_id)
  end

end
