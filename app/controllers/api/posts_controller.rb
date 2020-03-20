class Api::PostsController < ApplicationController

  def index
    @posts = Post.where(profile_id: params[:user_id])
    render 'api/posts/index'
  end 

  def create
    @post = Post.new(post_params)

    @post.author_id = current_user.id
    if @post.save
      render 'api/posts/show'
    else 
      render @post.errors.full_messages, status: 401
    end
  end

  def destroy 
    @post = Post.find(params[:id])
    
    if @post.author_id == current_user.id || @post.profile_id == current_user.id
      @post.destroy
      render json: @post
    else 
      render json: ["Unable to delete post"], status: 404
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :profile_id)
  end
end
