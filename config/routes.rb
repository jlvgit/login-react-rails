Rails.application.routes.draw do
  root 'home#index'

  resources :users

  namespace :api, defaults: { format: 'json' } do
    resources :sessions, only: [:new, :create, :destroy]
    resources :users, only: [:create]
  end

  resources :sessions, only: [:new, :create, :destroy]
  
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
end
