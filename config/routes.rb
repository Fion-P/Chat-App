Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :chatroomss, only: :show do
      resources :messages, only: [:index]
    end

    resources :chatroom_users, only: [:update, :create]
    # resources :channel_users, only: [:create, :destroy]
  end

  mount ActionCable.server, at: '/cable'

  root "static_pages#root"
end
