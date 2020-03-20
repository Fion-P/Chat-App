Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy, :index]
    resources :chatrooms, only: [ :create, :index, :show]
    resources :chatroom_users, only: [:create]
    resources :users_search, only: [:index]
    resources :posts, only: [:create, :destroy]

    resources :chatrooms, only: :show do
      resources :messages, only: [:index]
    end
    
    resources :users, only: :show do
      resources :chatrooms, only: [:index]
      # resources :friends, only: [:index]
      resources :posts, only: [:index]
    end

    # resources :channel_users, only: [:create, :destroy]
  end

  mount ActionCable.server, at: '/cable'

  root "static_pages#root"
end
