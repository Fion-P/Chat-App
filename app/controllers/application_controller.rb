class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  
  helper_method :current_user, :logged_in?

  def current_user
    # if there isn't a session[:session_token] then no one is logged in
    return nil unless session[:session_token]
    current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_login
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @user = user
    session[:session_token] = @user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

end
