class Api::UsersController < ApplicationController


  def show
    @user = User.includes(:messages, :chatroom_memberships, :chatrooms, :friendships, :friends, :chatters, :profile_posts, :authored_posts).find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
    
  end

  def update
    @user = User.find(params[:id])
    
    if @user.id == current_user.id 
      @user.update(user_params)

      if @user.save
        # debugger
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
    # else
    #   render 
    end
    
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :first_name, :last_name, :password, :photo)
  end

end
