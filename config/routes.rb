Rails.application.routes.draw do
  resources :posts, only: [:index]
  resources :users_groups, only: [:index]
  resources :groups, only: [:index]
  resources :users, only: [:index]

  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
